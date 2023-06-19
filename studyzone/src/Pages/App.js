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
<<<<<<< HEAD
=======
  
>>>>>>> 4aa799a8942d961068ef773e718f1b7ae81c3ba2
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
