import React, { useEffect } from "react";
import './Alert.css'

const Alert = ({ alert, setAlert }) => {
  
  useEffect(() => {

    if (alert) {
      const flash = document.querySelector('.flashAlert')
      if (flash) {
        flash.style.display = 'block'
        flash.style.opacity = 1;
      }
  
      let fadeTimeout = setTimeout(() => {
        if (flash) {
          flash.style.opacity = 0;
        }
      }, 2000)
  
      let showTimeout = setTimeout(() => {
        if (flash) {
          flash.style.display = 'none';
        }
      }, 4000)
  
      return () => {
        setAlert(false)
        const flash = document.querySelector('.flashAlert')
        clearTimeout(fadeTimeout)
        clearTimeout(showTimeout)
        if (flash) {
          flash.style.display = 'none'
        }
      }
    }

  }, [alert, setAlert])

    return (
      <div className={`ui ${alert.type} message flashAlert`} >
        <div className="header">
          {alert.message}
        </div>
      </div>
    )
 
}

export default Alert