import './Expenses.css'

function Expenses(props){
    return(
        <div className='todo'>
           <div className='head'> To DO List </div>
           <div className='items'>
                <div className='date'>June 23rd 2022</div>
                <div className='des'> Learning React {props.title}</div>
                <div className='pro'>  project-1</div>
           </div>
        </div>
    );
}

export default Expenses;