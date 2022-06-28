import { useState } from "react";
import "./ExpenseForm.css"
import Expenses from "./Expenses";

function ExpenseForm(props){
      var [date, setDate] = useState("");
      var [title, setTitle] = useState("");
      var [project, setProject] = useState("");

      function datechange(event){
         setDate(event.target.value);
      }
      function titlechange(event){
        setTitle(event.target.value);
     }
     function projectchange(event){
        setProject(event.target.value);
     }

     var obj = {
        title : title,
        date : new Date (date),
        pro : project
       
    }

     function submitfunc(event){
        console.log(title);
        <Expenses
        title = {title} date ={date} pro={project}>
        </Expenses>
     }

    return <div>
        <form className="form" >
        <div >
            <label>date</label>
            <input type="date" onChange={datechange} ></input>
        </div>
        <div className="form">
            <label>title</label>
            <input type="text" placeholder="enter title.." onChange={titlechange} ></input>
        </div>
        <div className="form">
            <label>project name</label>
            <input type="text" onChange={projectchange} ></input>
        </div>
        <button type="submit" onClick={submitfunc} >submit</button>
     
     </form>
        props.appfunc(obj);
        console.log("1");
     </div>
}

export default ExpenseForm;