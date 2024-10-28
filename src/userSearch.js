import React, { useState } from 'react';
import axios from 'axios';

const UserSearch = () => {
    const [info, setInfo] = useState(null); // Change to null for better handling
    const [username, setUsername] = useState('');

    const handleUserFetch = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/users/info', {
                params: { username } // Use params to send the query
            });
            setInfo(response.data); // Set data directly
        } catch (error) {
            alert('Error fetching users: ' + error.message);
        }
    };

    return (
        <div>
            <input  
                type='text' 
                value={username}
                placeholder='Enter the username'
                onChange={(e) => setUsername(e.target.value)}
                required
            />
            <div>
                <button onClick={handleUserFetch}>Find</button>
            </div>
            {info && (
                <div>
                    <h2>User Info</h2>
                    <p>experience: {info.experience}</p>
                    <p>Age: {info.age}</p>
                    {/* Add more fields as necessary */}
                </div>
            )}
        </div>
    );
};

export default UserSearch;