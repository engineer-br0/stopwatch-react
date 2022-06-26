import { useState } from 'react';
import './Expenses.css'
import ExpensesTitle from './ExpensesTitle'
function Expenses(props){
    
    let [title, settitle] = useState(props.title);
  
    var func = () => {
        settitle(newTitle);
    }
    var [newTitle, setNew] = useState("");
    function changeFunc(event){
          setNew(event.target.value);
    }

     let classes = "todo" + props.className;
     
     
    return(
         
        <div className={classes}>
           <div>Expenses </div>
           {props.children}
           <div className='items'>
                <div className='date'>{props.date.toDateString()}</div>
                <ExpensesTitle title={title} />
                <div className='pro'>  {props.pro}</div>
           </div>
           <input type="text" placeholder='enter title..' value={newTitle} onChange={changeFunc}></input>
           <button onClick={func} >button</button>
        </div>
    );
}

export default Expenses;