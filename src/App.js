import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useNavigate } from 'react-router-dom'; 
import UserForm from './UserForm';
import MyChatBot from './ChatBot';
import Register from './auth/register'; 
import Login from './auth/Login'; 
import UserList from './UserList'; 

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isRegistering, setIsRegistering] = useState(false);

    const handleLogin = () => {
        setIsLoggedIn(true);
        setIsRegistering(false);
    };

    const handleRegister = () => {
        setIsLoggedIn(false); // Redirect to login after registration
        setIsRegistering(true);
    };

    return (
        <Router>
            <Routes>
                {/* Redirect to login if not logged in */}
                <Route path="/login" element={!isLoggedIn ? (
                    <>
                        <Login onLogin={handleLogin} />
                        <p>Don't have an account? <RegisterLink /></p>
                    </>
                ) : <Navigate to="/users" />} />
                
                <Route path="/register" element={!isRegistering ? (<>
                    <Register onRegister={handleRegister} /> <p>already have an account? <LoginLink /></p></>
                ) : <Navigate to="/users" />} />
                
                <Route path="/users" element={isLoggedIn ? (
                    <>
                        <UserForm />
                        <MyChatBot />
                    </>
                ) : <Navigate to="/login" />} />
                
                <Route path="/admin" element={<UserList />} />
                
                {/* Main application content */}
                <Route path="/" element={isLoggedIn ? (
                    <>
                        <UserForm />
                        <MyChatBot />
                    </>
                ) : <Navigate to="/login" />} />
            </Routes>
        </Router>
    );
}

// Component for Register link
const RegisterLink = () => {
    const navigate = useNavigate(); // Define navigate using useNavigate hook

    return (
        <button onClick={() => navigate('/register')}>Register</button>
    );
};


const LoginLink = () => {
    const navigate = useNavigate(); // Define navigate using useNavigate hook

    return (
        <button onClick={() => navigate('/login')}>login</button>
    );
};
export default App;