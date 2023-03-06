import './App.css';
import Navbar from './Components/Navbar';
import About from './Components/About';
import TextForm from './Components/TextForm';
import { useState } from 'react';
import Alert from './Components/Alert';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";


function App() {
  
  const [mode, setMode] = useState("light");
  const [btnTxtCol, setBtnTxtCol] = useState("dark");
  const [txt, setTxt] = useState("Enable Dark Mode");
  
  const [type, setType] = useState(null);
  const [description, setDescription] = useState(null);
  
  const showAlert = (type, description) => {
    setType(type);
    setDescription(description);
    document.getElementById("myalert");
    document.getElementById("myalert").style.display = "block";
    setTimeout(()=>{
      document.getElementById("myalert").style.display = "none";
    }, 2000);
  }

  const toggleMode = () => {
    if(mode==="light") {
      setMode("dark");
      setBtnTxtCol("light");
      setTxt("Enable Light Mode");
      document.body.style.backgroundColor = "black";

      document.getElementById("myalert").style.display = "block";
      setType("success");
      setDescription("Dark Mode Enabled.");

      setTimeout(()=>{
        document.getElementById("myalert").style.display = "none";
      }, 2000);
    }
    else if(mode==="dark"){
      setMode("light");
      setBtnTxtCol("dark");
      setTxt("Enable Dark Mode");
      document.body.style.backgroundColor = "white";

      document.getElementById("myalert").style.display = "block";
      setType("success");
      setDescription("Light Mode Enabled.");
      setTimeout(()=>{
        document.getElementById("myalert").style.display = "none";
      }, 2000);
      
    }
  }

  

  return (
  <>
  <Router>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} txt={txt} btnTxtCol={btnTxtCol} about="About"/>
    <Alert type={type} description={description}/>
    <div className="container">
    <Routes>
      <Route exact path='/' element={<TextForm mode={mode} showAlert={showAlert}/>}/>
      <Route path='/about' element={<About mode={mode}/>}/>
    </Routes>
    </div>
    </Router>
  </>
  );
}

export default App;
