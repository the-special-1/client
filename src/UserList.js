import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserSearch from './userSearch';

const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/users');
                setUsers(response.data);
            } catch (error) {
                console.error('Error fetching users:', error);
                
            }
        };
        fetchUsers();
    }, []);

    return (
        <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-center">User List</h2>
            <ul className="space-y-2">
                {users.map(user => (
                    <li key={user.id} className="p-4 border border-gray-300 rounded hover:bg-gray-100 transition duration-200">
                        <p className="font-semibold">{user.name}</p>
                        <p>Age: {user.age}</p>
                        <p>Experience: {user.experience}</p>
                    </li>
                ))}
            </ul>

            <UserSearch/>
        </div>
    );
};

export default UserList;