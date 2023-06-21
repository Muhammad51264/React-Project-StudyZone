import '../Styles/App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { Route,Routes,BrowserRouter } from 'react-router-dom';
import Courses from "../Pages/Courses";
import CourseDetails from "../Pages/CourseDetails";
import Login from "../Pages/Login";
import Register from '../Pages/Register';
import LandingPage from './LandingPage'
function App() {
  return (
   
    <>
  

    <BrowserRouter> 
    <Routes>

      <Route path="/" Component={LandingPage}></Route>
      <Route path='/login' Component={Login}></Route>
      <Route path='/register' Component={Register}></Route>
      <Route path='/courses' Component={Courses}></Route>
      <Route path='/courses/courseId' Component={CourseDetails}></Route>
    
    </Routes>
    </BrowserRouter>
    
    
    
    
    </>

  );
}

export default App;
