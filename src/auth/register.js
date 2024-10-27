import React, { useState } from 'react';

const Register = ({ onRegister }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/api/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password }),
            });

            if (!response.ok) throw new Error('Registration failed');

            onRegister(); // Call the onRegister function passed as a prop
        } catch (err) {
            setError(err.message);
        }
    };

    return (
                <div className="flex h-screen items-center justify-center ">
                      <div className="bg-white p-6 rounded-lg shadow-md max-w-md w-full border border-gray-300">
            <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
                />
                <button 
                    type="submit" 
                    className="w-60 mx-auto  bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-200 block"
                >
                    Register
                </button>
            </form>
            </div>
        </div>
    );
};

export default Register;