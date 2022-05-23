import React from "react";


const AddCourse=()=>{
    return(
<><div class="container">
<form>
  <div class="form-group">
    <label >course id</label>
    <input type="number" class="form-control" aria-describedby="emailHelp" placeholder="course id"/>
  </div>
  <div class="form-group">
    <label for="title">course title</label>
    <input type="" class="form-control" id="title" placeholder="Course Title"/>
  </div>
  <div class="form-group">
    <label for="title">course description</label>
    <input type="" class="form-control" id="title" placeholder="Course description" style={{height:'400px'}}/>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
<center>
<button class="btn btn-outline-success"style={{marginRight: "10px"}}>add course</button>

<button class="btn btn-outline-info">clear</button>
</center>
</form>
</div>
</>
    );
}
export default AddCourse;