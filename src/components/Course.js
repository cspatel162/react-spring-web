import React from "react";

const Course= ({course})=> {
  const btnHendler = () => {
    alert("hello");
  };

  return (
    <>
      <div className="container">
        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">{course.title}</h5>
            <h3 className="card-title">{course.description}</h3>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <button
              type="button"
              className="btn btn-outline-warning"
              onClick={btnHendler}
            >
              update
            </button>
            <button
              type="button"
              className="btn btn-outline-danger"
              onClick={btnHendler}
            >
              delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Course;
