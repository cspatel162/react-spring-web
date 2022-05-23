
import './App.css';
import AllCourse from './components/AllCourse';
// eslint-disable-next-line no-unused-vars
import Course from './components/Course';
import Home from './components/Home';
import AddCourse from './components/AddCourse';
import Navbar from './components/Navbar';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { useState } from 'react';

function App() {
  useState()
  return (
  <>
<BrowserRouter>
<Navbar />
    <Routes>
     
      <Route path="/" element={< Home/>} />
      <Route path="/all-course" element={<AllCourse />} />
      <Route path="add-course" element={<AddCourse />} />
    </Routes>
  </BrowserRouter>
    </>
    );
}

export default App;
