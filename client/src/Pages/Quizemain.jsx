import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Header from '../components/quize/Header/Header';

function HomeQuize() {
//   const navItemStyle = {
//     /* Your styles for nav items */
//   };

  return (
    <div className="app">
      <Header />
      
        <nav>
          <ul>
            <li>
              <NavLink to="/quiz/homepage" >Home</NavLink>
            </li>
            <li>
              <NavLink to="/quiz/quiz" >Quiz</NavLink>
            </li>
            <li>
              <NavLink to="/quiz/result" >Result</NavLink>
            </li>
          </ul>
        </nav>
        {/* <Routes>
          {/* Define your routes here */}
          
        {/* </Routes>
        </Routes> */}
    </div>
  );
}

export default HomeQuize;
