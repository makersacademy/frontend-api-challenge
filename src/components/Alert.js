import React from "react";
import './Alert.css'

const Alert = ({alert}) => {

  console.log(alert)

  if (alert) {
    const flash = document.querySelector('.flashAlert')
    flash.style.display = 'block'
    flash.style.opacity = 1;

    setTimeout(() => {
      flash.style.opacity = 0;
    }, 2000)

    setTimeout(() => {
      flash.style.display = 'none';
    }, 4000)
  } 



    return (
      <div className="ui success message flashAlert">
        <i className="close icon"></i>
        <div className="header">
          Registration Successful!
        </div>
        <p>Log-in with the username and password</p>
      </div>
    )
 

 
}

export default Alert