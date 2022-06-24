import './Expenses.css'
import ExpensesTitle from './ExpensesTitle'
function Expenses(props){
     let classes = "todo" + props.className;
    return(
         
        <div className={classes}>
           <div>Expenses </div>
           {props.children}
           <div className='items'>
                <div className='date'>{props.date.toDateString()}</div>
                <ExpensesTitle title={props.title} />
                <div className='pro'>  {props.pro}</div>
           </div>
        </div>
    );
}

export default Expenses;