import React from 'react';
import ChatBot from 'react-simple-chatbot';

const MyChatBot = () => {
    return (
        <ChatBot 
            steps={[
                {
                    id: '1',
                    message: 'Welcome! Please enter your height in centimeters.',
                    trigger: 'heightInput',
                },
                {
                    id: 'heightInput',
                    user: true, // This allows for user input
                    trigger: 'convertHeight', // Move to conversion step
                },
                {
                    id: 'convertHeight',
                    message: ({ previousValue }) => {
                        const heightInCm = parseFloat(previousValue);
                        if (isNaN(heightInCm)) {
                            return "That's not a valid number. Please enter your height in centimeters.";
                        }
                        const heightInFeet = (heightInCm / 30.48).toFixed(2); // Convert cm to feet
                        return `Your height is approximately ${heightInFeet} feet.`;
                    },
                    trigger: 'askAnother', // Move to ask if they want to enter another height
                },
                {
                    id: 'askAnother',
                    message: "Would you like to enter another height?",
                    trigger: 'anotherHeightOptions', // Move to options for yes/no
                },
                {
                    id: 'anotherHeightOptions',
                    options: [
                        { value: 'yes', label: 'Yes', trigger: 'heightInput' }, // Go back to input
                        { value: 'no', label: 'No', trigger: 'end' }, // End the conversation
                    ],
                },
                {
                    id: 'end',
                    message: "Thank you for using the height converter! Goodbye!",
                    end: true, // End the chatbot conversation
                },
            ]}
        />
    );
};

export default MyChatBot;