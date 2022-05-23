import React, { useState } from "react";
import Course from "./Course";

const AllCourse = () => {
  const [course, setCourse] = useState([
    { title: "java", description: "this is java spring boot" },
    { title: "react", description: "this is react " },
    { title: "spring boot", description: "this is  spring boot" },
    { title: "react", description: "this is react " },
    { title: "spring boot", description: "this is  spring boot" },
    { title: "java", description: "this is java spring boot" },
    { title: "java", description: "this is java spring boot" },
    { title: "spring boot", description: "this is  spring boot" },
    { title: "react", description: "this is react " },
    { title: "spring boot", description: "this is  spring boot" },
    { title: "java", description: "this is java spring boot" },
    { title: "java", description: "this is java spring boot" },
  ]);
  return (
    <>
      <div className="container mt-4">
        {" "}
        <div className="row">
          <div className="col-12">
            <h1>All Course</h1>
            <p>list of courses are as follows</p>
          </div>
        </div>
        <div className="row">
          
            {course.length > 0
              ? course.map((item) =><div className="col-3 m-2"> <Course course={item} /> </div>)
              : "No course"}
         
        </div>
      </div>
    </>
  );
};
export default AllCourse;
