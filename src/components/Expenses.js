import './Expenses.css'
import ExpensesTitle from './ExpensesTitle'
function Expenses(props){
    return(
        <div className='todo'>
           <div>Expenses</div>
           <div className='items'>
                <div className='date'>{props.date.toDateString()}</div>
                <ExpensesTitle title={props.title} />
                <div className='pro'>  {props.pro}</div>
           </div>
        </div>
    );
}

export default Expenses;