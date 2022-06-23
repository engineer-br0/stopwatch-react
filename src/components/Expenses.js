import './Expenses.css'

function Expenses(props){
    return(
        <div className='todo'>
           <div className='head'> To DO List </div>
           <div className='items'>
                <div className='date'>{props.date.toLocalString()}</div>
                <div className='des'>  {props.title} </div>
                <div className='pro'>  {props.pro}</div>
           </div>
        </div>
    );
}

export default Expenses;