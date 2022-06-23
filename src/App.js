/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/

import Expenses from './components/Expenses.js'

function Expenses2(){
  let arr = [
    {
      date : new Date(2022, 6, 23),
      title : "learning react",
      pro : "project1"
    },
    {
      date : new Date(2022, 6, 25),
      title : "using react",
      pro : "project2"
    },
    {
      date : new Date(2022, 6, 27),
      title : "expert in react",
      pro : "project3"
    }
    
  ];
  return(
    
    <div>
      <div className='todo'> TO DO LIST</div>
       <Expenses
        title = {arr[0].title} date ={arr[0].date} pro={arr[0].pro}>
        </Expenses>

        <Expenses
        title = {arr[1].title} date ={arr[1].date} pro={arr[1].pro}>
        </Expenses>

        <Expenses
        title = {arr[2].title} date ={arr[2].date} pro={arr[2].pro}>
        </Expenses>

       </div>
  );
}

export default Expenses2;