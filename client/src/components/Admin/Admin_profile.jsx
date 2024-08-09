import React from 'react';
import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill } from 'react-icons/bs';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';

const AdminDashboard = () => {
  const userData = [
    { name: 'Jan', users: 40, companies: 24, students: 20, contacts: 32 },
    { name: 'Feb', users: 30, companies: 13, students: 15, contacts: 25 },
    { name: 'Mar', users: 20, companies: 18, students: 10, contacts: 21 },
    { name: 'Apr', users: 27, companies: 39, students: 25, contacts: 30 },
    { name: 'May', users: 18, companies: 48, students: 15, contacts: 40 },
    { name: 'Jun', users: 23, companies: 38, students: 20, contacts: 38 },
    { name: 'Jul', users: 34, companies: 43, students: 30, contacts: 42 },
  ];

  return (
    <main className='main-container'>
      <div className='main-title'>
        <h3>DASHBOARD</h3>
      </div>

      <div className='main-cards'>
        <div className='card'>
          <div className='card-inner'>
            <h3>USERS</h3>
            <BsFillArchiveFill className='card_icon'/>
          </div>
          <h1>223</h1>
        </div>
        <div className='card'>
          <div className='card-inner'>
            <h3>COMPANIES</h3>
            <BsFillGrid3X3GapFill className='card_icon'/>
          </div>
          <h1>250</h1>
        </div>
        <div className='card'>
          <div className='card-inner'>
            <h3>STUDENTS</h3>
            <BsPeopleFill className='card_icon'/>
          </div>
          <h1>186</h1>
        </div>
        <div className='card'>
          <div className='card-inner'>
            <h3>CONTACTS</h3>
            <BsFillBellFill className='card_icon'/>
          </div>
          <h1>249</h1>
        </div>
      </div>

      <div className='charts'>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={userData}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="users" fill="#8884d8" name="Users" />
            <Bar dataKey="companies" fill="#82ca9d" name="Companies" />
          </BarChart>
        </ResponsiveContainer>

        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={userData}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="students" stroke="#8884d8" name="Students" />
            <Line type="monotone" dataKey="contacts" stroke="#82ca9d" name="Contacts" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </main>
  );
};

export default AdminDashboard;
