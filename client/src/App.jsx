import { useState } from 'react'
import './App.css'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from  'D:/Placement cell/client/src/Home.jsx';
import About from  './About';
import Contact from './Contact';
import Job_Portal from './components/company/Job_Portal';
import  Login from './Login';
import Register from './Register';
import Navbars from "../src/components/Navbar";
import Error from './Error';
import './index.css';
import Button from './components/Button';
import Footer from  "./components/Footer/Footer";
import Logout from './Logout';
import { AdminLayout } from './components/Admin/Admin-Layout';
import{ AdminUsers} from './components/Admin/Admin-Users';
import {AdminContacts} from './components/Admin/Admin-Contacts';
import AdminUpdate from './components/Admin/Admin-Update';
import Calendar from './components/Admin/Calendar';
import Student_dashboard from './components/student/Student_dashboard';
import Notification from './components/student/Notification';
import Company_dashboard from './components/company/Company_dashboard'
import Body from './components/Body/Body';
import Events from './components/student/Events';
import ModeToggle from './components/dark_light_mode/ModeToggle';
import JobFetch from './components/student/jobFetch';
import Job_view from './components/company/Job_view';
import Placement_material from './components/student/Placement_material';
import StudentRegistrationPage from './components/student/StudentRegistration';
import JobsPage from '../store/Fetchjob';


import ParentComponent from './components/Admin/ParentComponent';
import TeamPage from './components/Team/TeamPage';
import CompanyStudentManagementPage from './components/company/CompanyStudentManagementPage';
import FeedbackForm from './components/student/feeback';
import ProfilePagePage from './components/student/Profile';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbars/>
      <ModeToggle />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      {/* <Route path="/admin_dashboard" element={<AdminDashboard />} /> */}
     
      <Route path='/jobspage' element={<JobsPage/>}/>

      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/logout" element={<Logout />} />
      <Route path='*' element={<Error/>} />
      <Route path='/team' element={<TeamPage/>} />
      {/* student routing */}
      <Route path='/notifications' element={<Notification/>}/>
      <Route path='/student' element={<Student_dashboard/>}/>
      <Route path='/placement_material' element={<Placement_material/>}/>
      <Route path='/resume_builder' element={<Body/>} />   
      <Route path='/job_portal' element={<JobFetch />} />
      <Route path='/profile' element={<ProfilePagePage />} />
      <Route path='/events' element = {<Events/>}/>
      <Route path='/feedback' element = {<FeedbackForm/>}/>

      <Route path='/registration' element={<StudentRegistrationPage/>}/>
      {/*Job routing*/}

      <Route path='/calendar' element={<Calendar />}/>
      <Route path='/company' element={<Company_dashboard/>}>
         <Route path='jobs' element={<Job_Portal />} />
         <Route path='jobs_view' element={<Job_view/>}/>
         <Route path='student_data' element={<CompanyStudentManagementPage/>}/>
      </Route>
      {/*admin routing*/}
      <Route path='/team_add' element={<ParentComponent />}/>
      <Route path='/admin' element={<AdminLayout />}>
          <Route path='users' element={<AdminUsers  />}/>
          <Route path='contacts' element={<AdminContacts />}/>
          <Route path='users/:id/edit' element={<AdminUpdate/>}/>
          </Route>
      </Routes>
    {/* company routing */}
      <Footer/>
    </BrowserRouter>
      
    </>
  );
};

export default App
