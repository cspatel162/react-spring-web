import React from "react";


const AddCourse=()=>{
    return(
<><div className="container">
<form>
  <div className="form-group">
    <label >course id</label>
    <input type="number" className="form-control" aria-describedby="emailHelp" placeholder="course id"/>
  </div>
  <div className="form-group">
    <label for="title">course title</label>
    <input type="" className="form-control" id="title" placeholder="Course Title"/>
  </div>
  <div className="form-group">
    <label for="title">course description</label>
    <input type="" className="form-control" id="title" placeholder="Course description" style={{height:'400px'}}/>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
<center>
<button className="btn btn-outline-success"style={{marginRight: "10px"}}>add course</button>

<button className="btn btn-outline-info">clear</button>
</center>
</form>
</div>
</>
    );
}
export default AddCourse;