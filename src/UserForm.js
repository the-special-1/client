import React, { useState } from 'react';
import axios from 'axios';

const UserForm = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [experience, setExperience] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:5000/api/users', { name, age, experience });
        // Reset form after submission
        setName('');
        setAge('');
        setExperience('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
            <input type="number" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} required />
            <textarea placeholder="Experience" value={experience} onChange={(e) => setExperience(e.target.value)} required />
            <button type="submit">Submit</button>
        </form>
    );
};

export default UserForm;