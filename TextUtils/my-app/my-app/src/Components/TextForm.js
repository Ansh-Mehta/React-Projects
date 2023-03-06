import React from 'react'
import PropTypes from 'prop-types'
import {useState} from 'react'

export default function TextForm(props) {

  const [text, setText] = useState(" "); 
  //useState is a hook which lets us create a variable and its corresponding function to update the value of that variable while providing a default value to the variable.
  const handleClickUp = () => {
    // console.log("Converting To Uppercase...");
    let upper = text.toUpperCase();
    setText(upper);
    props.showAlert("success","Converted To Uppercase.");
  }

  const handleClickLow = () => {
    let lower = text.toLowerCase();
    setText(lower);
    props.showAlert("success","Converted To Lowercase.");
  }

  const handleClickClear = () => {
    setText(" ");
    props.showAlert("success","Text Cleared.");
  }

  const handleChangeUp = (input) => {
    // console.log("Handling User Input...");
    setText(input.target.value); //jo "text" ki value hai usme "input" ki value append ya update kar de.
  }

  const handleCopy = () => {
    var text = document.getElementById("my_form")
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert("success","Text Copied.");
  }

  return (
    <>
    <div className="container" style={{color: props.mode === "dark"?"white":"black"}}>
        <h3 className="my-2">{props.heading}</h3>
        <div className="mb-3">
            {/* <label htmlhtmlFor="my_form" className="form-label"></label> */}
            <textarea className="form-control" placeholder="Enter Your Text Here..." value={text} onChange={handleChangeUp} id="my_form" rows="8"></textarea>
        </div>
        <button disabled={text.length===1 || text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClickUp}>Convert To Uppercase</button>
        <button disabled={text.length===1 || text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClickLow}>Convert To Lowercase</button>
        <button disabled={text.length===1 || text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClickClear}>Clear Text</button>
        <button disabled={text.length===1 || text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
    </div>
    <div className="container my-3" style={{color: props.mode === "dark"?"white":"black"}}> {/*this means if mode is dark then color should be white else black*/}
      <h3>Text Meta Data: </h3>
      <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words {text.length} characters</p>
      <h2>Preview: </h2>
      <p>{text.length>0?text:"Nothing To Preview."}</p>
    </div>
    </>
  )
}


TextForm.propTypes = {
    heading: PropTypes.string
}

TextForm.defaultProps = {
    heading: "Enter Your Text"
}