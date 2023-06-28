import React from 'react';
import "../Css/Appointment_page.css";
import seoscore1 from "../Images/seoscore1.png";
import seoscore2 from "../Images/seoscore2.png";
import seoscore3 from "../Images/seoscore3.png";
export default function Appointment_page() {
  return (
    <div className='Appointment_section'>
        <div id='form_su'>
        <h1>Confused How to Acquire  <br />Business Online?</h1>
        <span style={{color:"#797676",fontSize:"25px"}}>Get Free Analysis, and Strategic Demonstration from Experts<br/> today!</span>
        </div>
        <div className='contact-form'>
<div className="field">
<form>
  <input type="email" name="Email" id="mail_input" placeholder='Email' />
  <button id='sub_button'> Subscribe</button>
</form>

</div>
        </div>
    </div>
  )
}
