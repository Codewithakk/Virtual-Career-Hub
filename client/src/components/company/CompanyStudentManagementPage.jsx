import React, { useState, useEffect } from 'react';
import axios from 'axios'; // For making HTTP requests

const CompanyStudentManagementPage = () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        fetchStudents();
    }, []);

    const fetchStudents = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/students');
            setStudents(response.data);
        } catch (error) {
            console.error('Error fetching students:', error);
            // Handle error scenario
        }
    };

    return (
        <div>
            <h2>Students Applied</h2>
            <ul>
                {students.map(student => (
                    <li key={student._id}>
                        <div>Name: {student.name}</div>
                        <div>Email: {student.email}</div>
                        <div>Position: {student.position}</div>
                        <div>Contact: {student.phone}</div>

                        {/* Add further details as needed */}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CompanyStudentManagementPage;
