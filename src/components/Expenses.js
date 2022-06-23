import './Expenses.css'

function Expenses(props){
    return(
        <div className='todo'>
        
           <div className='items'>
                <div className='date'>{props.date.toDateString()}</div>
                <div className='des'>  {props.title} </div>
                <div className='pro'>  {props.pro}</div>
           </div>
        </div>
    );
}

export default Expenses;