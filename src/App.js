import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'; 
import UserForm from './UserForm';
import MyChatBot from './ChatBot';
import Register from './auth/register'; 
import Login from './auth/Login'; 
import UserList from './UserList'; 
import Employer from './Employer';

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
                <Route path="/login" element={isLoggedIn ? <Navigate to="/users" /> : <Login onLogin={handleLogin} />} />
                <Route path="/Employer" element= {<Employer/>} />
                
                <Route path="/register" element={isRegistering ? <Navigate to="/users" /> : <Register onRegister={handleRegister} />} />
                
                <Route path="/users" element={!isLoggedIn ? <Navigate to="/login" /> : (
                    <>
                        <UserForm />
                        <MyChatBot />
                    </>
                )} />
                
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

export default App;