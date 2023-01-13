
import {useState} from "react";
import FunctionComponent from './Component/FunctionComponent';
import ClassComponent from './Component/ClassComponent';

function App() {
  const [show,setshow]=useState(false);
  const [showclass,setclassshow]=useState(false);
  const buttonClick=()=>{
    setshow(!show)
  }
  const buttonClickClass=()=>{
    setclassshow(!showclass)
  }

  
  return (
    <div className="App" id="bodyBackground">
<p id="headerText">Styling using Functional and class component</p>
<br></br>

      <button className="btnElement" onClick={buttonClick}>To see styling in functional component</button>
      <button className="btnElement" onClick={buttonClickClass} style={{marginLeft:'100px'}}>To see styling in class component</button>
      {show?<FunctionComponent/>:" "}
      {showclass?<ClassComponent/>:" "}

     </div>
  );
}

export default App;
