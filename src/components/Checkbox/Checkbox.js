import React from 'react'
import './Checkbox.css'
function Checkbox() {
  return (
    <div >
      <form  className='check'>
      <p>Remember Me
      <input id='check1' type={'checkbox'} ></input></p>
      <p>Forgot Password?</p>
      </form>
    </div>
  )
}

export default Checkbox
