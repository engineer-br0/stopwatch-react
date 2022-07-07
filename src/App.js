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
 
  
  
  var temp = 0;
    var tens = 0;
    var s=0;
    var ss=0;
    var stop = document.getElementById("stop");
    var start = document.getElementById("start");
    var reset = document.getElementById("reset");
    var sec = document.getElementById("sec");
    var ms = document.getElementById("ms");
    var st;
    start.addEventListener("click", function(){
       if(start.onclick==true) return;
       st = setInterval(function(){
          temp++;
          
          if(temp>9){
            tens++;
            temp=0;
            if(tens>9 ){
              s++;
              tens=0;
              temp=0;
              
          }
          }
          sec.innerHTML= ss + "" + s;
          ms.innerHTML = tens  + "" + temp;
          start.disabled=true;
       } , 10); 
       
    });
    
    stop.addEventListener("click", function(){
       clearInterval(st);
       start.disabled=false;
    });
   
    reset.addEventListener("click", function(){
       clearInterval(st);
       tens=0;
              temp=0;
              s=0;
              ss=0;
       sec.innerHTML= "00";
          ms.innerHTML = "00";
          start.disabled=false;
    });
  
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