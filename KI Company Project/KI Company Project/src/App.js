import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Customers from './components/Customers';
import WhyUs from './components/WhyUs';
import Team from './components/Team';
import Footer from './components/Footer';
import {useState} from 'react';

function App() {

  const [mode, setMode] = useState("light");
  const [txt, setTxt] = useState("Enable Dark Mode");
  const [btnTxtCol, setBtnTxtCol] = useState("dark");
  const changeMode = () => {
    if(mode==="light") {
      setMode("dark");
      setTxt("Enable Light Mode");
      setBtnTxtCol("light");
      document.body.style.backgroundColor = "black";
    }
    else {
      setMode("light");
      setTxt("Enable Dark Mode");
      setBtnTxtCol("dark");
      document.body.style.backgroundColor = "white";
    }
  }


  return (
    <>
      <Navbar txt={txt} mode={mode} changeMode={changeMode} btnTxtCol={btnTxtCol} about="About" tab1="Customers" tab2="Products" tab3="Why Us?" tab4="Our Team" tab5="FMEA" tab6="Success Stories"/>
      <About mode={mode}/>
      <Customers mode={mode}/>
      <WhyUs mode={mode}/>
      <Team mode={mode}/>
      <Footer/>
    </>
  );
}

export default App;
