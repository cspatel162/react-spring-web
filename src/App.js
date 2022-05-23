
import './App.css';
import AllCourse from './components/AllCourse';
// eslint-disable-next-line no-unused-vars
import Course from './components/Course';
import Home from './components/Home';
import AddCourse from './components/AddCourse';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,Route
} from "react-router-dom";

function App() {
  return (
  <>
    <Router>

    <Navbar />
    <div className='container'>
      <Route path='/'component={Home} exact />
      <Route path='/add-course'component={AddCourse} exact />
      
      

     
    {/* <AllCourse />
    <AddCourse /> */}

    </div> 
    </Router>
    </>
    );
}

export default App;
