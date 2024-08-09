// import React from "react";

// import {
//   PieChart,
//   Pie,
//   Tooltip,
//   BarChart,
//   XAxis,
//   YAxis,
//   Legend,
//   CartesianGrid,
//   Bar,
// } from "recharts";

// const Profile = () => {
//   const data = [
//     { name: "Facebook", users: 2000000000 },
//     { name: "Instagram", users: 1500000000 },
//     { name: "Twiter", users: 1000000000 },
//     { name: "Telegram", users: 500000000 },
//   ];

//   return (
//     <div style={{ textAlign: "center" }}>
//       <h1>Student Profile</h1>
//       <div className="pie-chart">
//         <PieChart width={400} height={400}>
//           <Pie
//             dataKey="users"
//             isAnimationActive={false}
//             data={data}
//             cx={200}
//             cy={200}
//             outerRadius={80}
//             fill="#8884d8"
//             label
//           />
//           <Tooltip />
//         </PieChart>
//         <BarChart
//           width={500}
//           height={300}
//           data={data}
//           margin={{
//             top: 5,
//             right: 30,
//             left: 80,
//             bottom: 5,
//           }}
//           barSize={20}
//         >
//           <XAxis
//             dataKey="name"
//             scale="point"
//             padding={{ left: 10, right: 10 }}
//           />
//           <YAxis />
//           <Tooltip />
//           <Legend />
//           <CartesianGrid strokeDasharray="3 3" />
//           <Bar dataKey="users" fill="#8884d8" background={{ fill: "#eee" }} />
//         </BarChart>
//       </div>
//     </div>
//   );
// };

// export default Profile;


import React from 'react'
import 
{ BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill}
 from 'react-icons/bs'
 import 
 { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } 
 from 'recharts';

function Profiledash() {

    const data = [
        {
          name: 'Jan',
          offcampus: 40,
          oncampus: 2,
        },
        {
          name: 'Feb',
          offcampus: 30,
          oncampus: 5,
          
        },
        {
          name: 'March',
          offcampus: 20,
          oncampus: 2,
          
        },
        {
          name: 'April',
          offcampus: 50,
          oncampus: 6,
        
        },
        {
          name: 'May',
          offcampus: 60,
          oncampus: 11,
        
        },
        {
          name: 'June',
          offcampus:12,
          oncampus: 3,
        
        },
        // {
        //   name: 'Page G',
        //   offcampus: 3490,
        //   oncampus: 4300,
        //   amt: 2100,
        // },
      ];
     

  return (
    <main className='main-container'>
        <div className='main-title'>
            <h3>DASHBOARD</h3>
        </div>

        <div className='main-cards'>
            <div className='card'>
                <div className='card-inner'>
                    <h3>Applied</h3>
                    <BsFillArchiveFill className='card_icon'/>
                </div>
                <h1>24</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>Pending</h3>
                    <BsFillGrid3X3GapFill className='card_icon'/>
                </div>
                <h1>12</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>Rejected</h3>
                    <BsPeopleFill className='card_icon'/>
                </div>
                <h1>6</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>Selected</h3>
                    <BsFillBellFill className='card_icon'/>
                </div>
                <h1>4</h1>
            </div>
        </div>

        <div className='charts'>
            <ResponsiveContainer width="100%" height="100%">
            <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="oncampus" fill="#8884d8" />
                <Bar dataKey="offcampus" fill="#82ca9d" />
                </BarChart>
            </ResponsiveContainer>

            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="offcampus" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="oncampus" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>

        </div>
    </main>
  )
}

export default Profiledash;