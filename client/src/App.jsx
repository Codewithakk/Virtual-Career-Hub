import { useState } from 'react'
import './App.css'
import axios from "axios";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from  'D:/Placement cell/client/src/Home.jsx';
import About from  './About';
import Recruiter from './OurRecruiters'
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
import AdminDashboard from './components/Admin/AdminDashboardChart';

import Placement2019 from './statics/PlacementStats2019';
import  Placement2020 from './statics/PlacementStats2020';
import Placement2021 from './statics/PlacementStats2021';
import Placement2022 from './statics/PlacementStats2022';
import ParentComponent from './components/Admin/ParentComponent';
import TeamPage from './components/Team/TeamPage';
import CompanyStudentManagementPage from './components/company/CompanyStudentManagementPage';
import FeedbackForm from './components/student/feeback';
import ProfilePagePage from './components/student/Profile';
import Procedure from '../Processor';
// home section
import DirectorMessage from "./components/homeelements/DirectorMessage";
import TpoMessage from "./components/homeelements/TpoMessage";
import Statistics from "./Statistics"
import TrainingPage from './Placementdata';

// quize section
import QuizeHome from "./Pages/Home/HomeQuize";
import Quiz from "./Pages/Quiz/Quiz";
import Result from "./Pages/Result/Result";
// import Header from './components/quize/Header/Header';
import QuizPage from './Pages/Quizemain';


function App() {

  const [questions, setQuestions] = useState([]);
  const [name, setName] = useState("");
  const [score, setScore] = useState(0);

  const fetchQuestions = async (category = "", difficulty = "") => {
    try {
      const { data } = await axios.get(
        `https://opentdb.com/api.php?amount=10${
          category ? `&category=${category}` : ''
        }${difficulty ? `&difficulty=${difficulty}` : ''}&type=multiple`
      );
      setQuestions(data.results);
    } catch (error) {
      console.error("Error fetching questions:", error);
    }
  };
  return (
    <>
    <BrowserRouter>
    <Navbars/>
      <ModeToggle />
    <Routes>
    {/* home section */}
    <Route path="message/director" element={<DirectorMessage />} />
    <Route path="message/tpo" element={<TpoMessage />} />
     <Route path="/" element={<Home />}>
    {/* Routes for messages */}
  </Route>
      <Route path="/about" element={<About />} />
      <Route path="/recruiter" element={<Recruiter />} />
      
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
      {/* quize section */}
            {/* <div className="app" style={{ backgroundImage: 'url("/ques1.png")' }}>
        <Header /> */}
        {/* <Switch>
          <Route path="/homepage" exact>
          <QuizeHome
          name={name}
          setName={setName}
          fetchQuestions={fetchQuestions}
          />
          </Route>
          <Route path="/quiz">
          <Quiz
          name={name}
          questions={questions}
          score={score}
          setScore={setScore}
          setQuestions={setQuestions}
          />
          </Route>
          <Route path="/result">
          <Result name={name} score={score} />
          </Route>
        </Switch> */}
   <Route path='/quiz' element={<QuizPage />} />
        <Route
          path="/quiz/homepage"
          element={
            <QuizeHome
              name={name}
              setName={setName}
              fetchQuestions={fetchQuestions}
            />
          }
        />
        <Route
          path="/quiz/quiz"
          element={
            <Quiz
              name={name}
              questions={questions}
              score={score}
              setScore={setScore}
              setQuestions={setQuestions}
            />
          }
        />
        <Route
          path="/quiz/result"
          element={<Result name={name} score={score} />}
        />
  
      {/* </div> */}
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
      <Route path='/admin' element={<AdminDashboard/>}/>
          <Route path='/users' element={<AdminUsers  />}/>
          <Route path='/contacts' element={<AdminContacts />}/>
          <Route path='/users/:id/edit' element={<AdminUpdate/>}/>
      <Route path='/procedure' element={<Procedure />}/>
      <Route path='/placementdata' element={<TrainingPage />}></Route>
      <Route path='/statistics' element={<Statistics />}>
     <Route path="placement-stats-2022" exact element={<Placement2022></Placement2022>} />
      <Route path="placement-stats-2021" exact element={<Placement2021></Placement2021>} />
      <Route path="placement-stats-2020" exact element={<Placement2020></Placement2020>} />
      <Route path="placement-stats-2019" exact element={<Placement2019></Placement2019>} />
            </Route>


      </Routes>
    {/* company routing */}
      <Footer/>
    </BrowserRouter>
      
    </>
  );
};

export default App
