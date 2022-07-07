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
import './App.css'
//import Expenses from './components/Expenses.js'
//import ExpenseForm from './components/ExpenseForm';



function Expenses2(){
 
  

  
  return(
    
    <div className='app'>

   <h1> STOPWATCH </h1>
   <div id="items">
   <div id="num">
   <span id="sec"> 00</span>
   <span>:</span>
   <span id="ms">00</span>
   </div>
<div id="button">
   <input type="button" value="Start" id="start" class="bt"/>
   <input type="button" value="Stop" id="stop" class="bt"/>
   <input type="button" value="Reset" id="reset" class="bt"/>
</div>
</div>
<div id="footer"> @immridulsharma</div>


       </div>
  );
}

export default Expenses2;