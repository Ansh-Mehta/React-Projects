import React from 'react'

export default function Alert(props) {
  
    const capitalize = (word) => {
        if(word) {
            let lower = word.toLowerCase();
            return lower.charAt(0).toUpperCase() + lower.slice(1);
        }
        else {
            return null;
        }
    }
  return (
    <div style={{height: "50px"}}>
        <div id="myalert" style={{display: "none"}} className={`alert alert-${props.type} alert-dismissible fade show`} role="alert">
            <strong>{capitalize(props.type)}:&nbsp;</strong>{props.description}
        </div>
    </div>
  )
}
