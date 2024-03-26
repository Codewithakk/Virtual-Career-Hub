// import React from 'react';
// const Home = () => {
//   return (
//     <div className="home-page">
//       <h1 className="welcome-message">Welcome to the Placement Cell and Training Section</h1>
//       <div className="content">
//         <p>
//           Our Placement Cell is committed to providing students with the best possible
//           opportunities for their career growth. We work closely with various
//           industries and organizations to ensure that our students are placed in
//           reputed companies with good salary packages.
//         </p>
//         <p>
//           Our Training Section offers various programs and workshops to help students
//           develop their skills and knowledge in their chosen fields. We provide
//           training in technical and soft skills, communication skills, and
//           interview techniques to prepare students for the competitive job market.
//         </p>
//       </div>
//       <h2 className="events-heading">Upcoming Events</h2>
//       <ul className="events-list">
//         <li>
//           <strong>Workshop on Data Structures and Algorithms:</strong> 10th March, 2024
//         </li>
//         <li>
//           <strong>Interview Skills Workshop:</strong> 15th March, 2024
//         </li>
//         <li>
//           <strong>Placement Drive for IT Companies:</strong> 20th March, 2024
//         </li>
//       </ul>
//       <h2 className="stats-heading">Placement Statistics</h2>
//       <table className="stats-table">
//         <thead>
//           <tr>
//             <th>Year</th>
//             <th>Number of Students Placed</th>
//             <th>Average Salary Package</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td>2021</td>
//             <td>150</td>
//             <td>Rs. 5 lakhs per annum</td>
//           </tr>
//           <tr>
//             <td>2022</td>
//             <td>200</td>
//             <td>Rs. 6 lakhs per annum</td>
//           </tr>
//           <tr>
//             <td>2023 (up to Feb)</td>
//             <td>120</td>
//             <td>Rs. 7 lakhs per annum</td>
//           </tr>
//         </tbody>
//       </table>
//       <h2 className="contact-heading">Contact Us</h2>
//       <div className="contact-info">
//         <p>
//           For any queries or further information, please contact us at:
//           <br />
//           Email: <a href="mailto:placementcell@example.com">placementcell@example.com</a>
//           <br />
//           Phone: +91-1234567890
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Home;
import React from 'react';


function HomePage() {
  return (
    <div className="containerhome">
      <img className="background-image" src="/src/assets/home.png" alt="Background" />
      <div className="overlay">
        <h1 className="title">Placement Cell & Training </h1>
      </div>
    </div>
  );
}

export default HomePage;
