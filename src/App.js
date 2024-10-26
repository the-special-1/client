import React, { useState } from 'react';
import UserForm from './UserForm';
import UserList from './UserList';
import MyChatBot from './ChatBot';
import Register from './register'; 
import Login from './Login'; 

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isRegistering, setIsRegistering] = useState(false);

    const handleLogin = () => {
        setIsLoggedIn(true);
        setIsRegistering(false);
    };

    const handleRegister = () => {
        setIsLoggedIn(true);
        setIsRegistering(false);
    };
    return (
        <div>
            {!isLoggedIn ? (
                <>
                    {!isRegistering ? (
                        <>
                            <Login onLogin={handleLogin} />
                            <p>Don't have an account? <button onClick={() => setIsRegistering(true)}>Register</button></p>
                        </>
                    ) : (
                        <>
                            <Register onRegister={handleRegister} />
                            <p>Already have an account? <button onClick={() => setIsRegistering(false)}>Login</button></p>
                        </>
                    )}
                </>
            ) : (
                <div>
       <h1>User Information</h1>
            <UserForm />
            <UserList />
            <MyChatBot />

                </div> // Show chatbot if logged in
            )}
     
        </div>
    );
}

export default App;