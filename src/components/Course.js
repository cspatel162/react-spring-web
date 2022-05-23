import React from "react";

const Course= ({course})=> {
  const btnHendler = () => {
    alert("hello");
  };

  return (
    <>
      <div class="container">
        <div class="card" style={{ width: "18rem" }}>
          <div class="card-body">
            <h5 class="card-title">{course.title}</h5>
            <h3 class="card-title">{course.description}</h3>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <button
              type="button"
              class="btn btn-outline-warning"
              onClick={btnHendler}
            >
              update
            </button>
            <button
              type="button"
              class="btn btn-outline-danger"
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
