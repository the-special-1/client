import React, { useState } from 'react';
import axios from 'axios';

const Employer = () => {
    const [name, setName] = useState('');
    const [job, setJob] = useState('');
    const [salary, setSalary] = useState(0);
    const [availableJobs, setAvailableJobs] = useState(false);
    const [jobList, setJobList] = useState([]);

    const handleJob = () => {
        setAvailableJobs(true);
        fetchJob();
    };

    const employerHandler = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        try {
            const resp = await axios.post('http://localhost:5000/api/job', { name, job, salary });
            console.log('Job added:', resp.data); // Log the response data
            // Optionally reset form fields after successful submission
            setName('');
            setJob('');
            setSalary(0);
        } catch (error) {
            console.log('Error adding job:', error.message);
        }
    };

    const fetchJob = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/job');
            setJobList(response.data); // Use response.data to get the actual data
        } catch (error) {
            console.log('Error fetching jobs:', error.message);
        }
    };

    return (
        <div>
            <form onSubmit={employerHandler}>
                <input 
                    type='text'
                    placeholder='Type name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="text"
                    placeholder='Enter job'
                    value={job}
                    onChange={(e) => setJob(e.target.value)}
                />
                <input 
                    type='number'
                    placeholder='Type salary'
                    value={salary}
                    onChange={(e) => setSalary(e.target.value)}
                />
                <button type='submit'>Add Job</button>
            </form>

            <span>
                See available jobs
                <button onClick={handleJob}>Click here</button>
            </span>

            {availableJobs && (
                <div>
                    {jobList.length > 0 ? (
                        jobList.map(user => (
                            <li key={user.id} className="p-4 border border-gray-300 rounded hover:bg-gray-100 transition duration-200">
                                <p className="font-semibold">{user.name}</p>
                                <p>Job: {user.job}</p>
                                <p>Salary: {user.salary}</p>
                            </li>
                        ))
                    ) : (
                        <p>There are no available jobs.</p>
                    )}
                </div>
            )}
        </div>
    );
};

export default Employer;