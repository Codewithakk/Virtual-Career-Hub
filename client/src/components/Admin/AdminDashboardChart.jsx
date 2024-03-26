import React, { useState, useEffect } from 'react';
 import axios from 'axios';
// import { Bar } from 'react-chartjs-2';

 const AdminDashboard = () => {
//   const [analyticsData, setAnalyticsData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [chartKey, setChartKey] = useState(0);

//   useEffect(() => {
//     fetchAnalyticsData();
//   }, []);

//   const fetchAnalyticsData = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/api/analytics');
//       setAnalyticsData(response.data);
//     } catch (error) {
//       console.error('Error fetching analytics data:', error);
//       setError('Error fetching analytics data');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleExportData = () => {
//     // Implement data export functionality
//     console.log('Exporting data...');
//   };

//   const renderChart = () => {
//     if (analyticsData) {
//       return (
//         <div className="chart-container">
//           <Bar
//             key={chartKey}
//             data={{
//               labels: ['Students', 'Team Members', 'Companies'],
//               datasets: [
//                 {
//                   label: 'Count',
//                   backgroundColor: 'rgba(75,192,192,0.2)',
//                   borderColor: 'rgba(75,192,192,1)',
//                   borderWidth: 1,
//                   hoverBackgroundColor: 'rgba(75,192,192,0.4)',
//                   hoverBorderColor: 'rgba(75,192,192,1)',
//                   data: [
//                     analyticsData.studentsCount || 0,
//                     analyticsData.teamMembersCount || 0,
//                     analyticsData.companiesCount || 0,
//                   ],
//                 },
//               ],
//             }}
//             options={{
//               scales: {
//                 y: {
//                   beginAtZero: true,
//                 },
//               },
//             }}
//           />
//         </div>
//       );
//     }
//     return null;
//   };

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

 return (
//   <div>
    <h1>Admin Dashboard</h1>
//       <h2>Analytics</h2>
//       <div>
//         <p>Number of Students: {analyticsData.studentsCount}</p>
//         <p>Number of Team Members: {analyticsData.teamMembersCount}</p>
//         <p>Number of Companies: {analyticsData.companiesCount}</p>
//       </div>
//       {renderChart()}
//       <button onClick={handleExportData}>Export Data</button>
//     </div>
   );
};

export default AdminDashboard;
