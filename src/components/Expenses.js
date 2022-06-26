import { useState } from 'react';
import './Expenses.css'
import ExpensesTitle from './ExpensesTitle'
function Expenses(props){
    var [newTitle, setNew] = useState("abc");
     function changeFunc(event){
           setNew(event.target.value);
     }

    let [title, settitle] = useState(props.title);
  
    var func = () => {
        settitle(newTitle);
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
           <input type="text" value={newTitle} onChange={changeFunc}></input>
           <button onClick={func} >button</button>
        </div>
    );
}

export default Expenses;