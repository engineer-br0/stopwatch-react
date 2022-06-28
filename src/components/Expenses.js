import { useState } from 'react';
import './Expenses.css'
function Expenses(props){
    
    let [title, settitle] = useState(props.title);
  
    var func = () => {
        settitle(newTitle);
    }
    var [newTitle, setNew] = useState("");
    function changeFunc(event){
          console.log("1");
    }

     let classes = "todo" + props.className;
     
     
    return(
         
        <div className={classes}>
           <div>Expenses </div>
           {props.children}
           <div className='items'>
                <div className='date'>{props.date.toDateString()}</div>
               <div className='title'> {title} </div>
                <div className='pro'>  {props.pro}</div>
           </div>
           <input type="text" placeholder='enter title..' value={newTitle} onChange={changeFunc}></input>
           <button onClick={func} >button</button>
        </div>
    );
}

export default Expenses;