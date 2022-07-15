import './ExpenseDate.css';
function ExpenseDate(props){

    var yr = props.date.getFullYear();
    var day = props.date.toLocaleString('en-US', {day: '2-digit'});
    var month = props.date.toLocaleString('en-US', {month: 'long'});

    return(
      <div className="date">
      <div className='month'>{month}</div>
      <div className='yr'>{yr}</div>
      <div className='day'>{day}</div>
      </div>
    )
}

export default ExpenseDate;