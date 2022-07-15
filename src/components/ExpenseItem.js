import ExpenseDate from './ExpenseDate';
import Card from './Card';
import './ExpenseItem.css'

function ExpenseItem(props){
    return (
      <Card className='expense-item'>
      <ExpenseDate  date = {props.date}/>
      <div className='expense-des'>
        <h2>{props.title}</h2>
        <div className='price'>${props.price}</div>
      </div> 
    </Card>
    )
}

export default ExpenseItem;