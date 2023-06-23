import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import '../Styles/App.css';


import { Route,Routes,BrowserRouter } from 'react-router-dom';
import Courses from "../Pages/Courses";
import CourseDetails from "../Pages/CourseDetails";
import Login from "../Pages/Login";
import Register from '../Pages/Register';
import LandingPage from './LandingPage';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Nav from '../Components/Nav';
import Footer from '../Components/Footer';

function App() {
  return (
    <>
    <Nav/>

    <Register/>
    {/* <Login/> */}

    {/* <BrowserRouter>
    <Routes>
      <Route path="/" Component={LandingPage}></Route>
      <Route path='/login' Component={Login}></Route>
      <Route path='/register' Component={Register}></Route>
      <Route path='/courses' Component={Courses}></Route>
      <Route path='/courses/:courseId' Component={CourseDetails}>
      </Route>
    </Routes>
    </BrowserRouter> */}
    <Footer />
    </>
  
  );
}

export default App;
