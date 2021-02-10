import React from 'react';
import Navbar from '../Components/Navbar'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faGlobe, faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {Helmet} from "react-helmet";
class Contact extends React.Component{
constructor(props) {
super(props)
this.submitForm = this.submitForm.bind(this);
this.state = {
status: "",
history: this.props.history
};
}
render() {
const { status } = this.state;
return (
<div className="text-left slide-in-fwd-center">
   <Navbar history={this.state.history} />
   <div className={"contact"}>
      <div className="row">
         <div className="col-xs-12 col-sm-12 col-lg-5">
            
            <h1 className="text-blue">Contact Us</h1>
            <p>
               To order a plan please state which plan you are interested in and our team will be in touch with further details! </p>
           
            
            <form
               onSubmit={this.submitForm}
               action="https://formspree.io/mbjzadpj"
               method="POST"
               >
               <div class="form-group">
                  <label>Name:</label>
                  <input className="form-control" type="text" name="name" required/>
                  
                  <label>Email:</label>
                  <input className="form-control" type="email" name="email" required />
               </div>
               <label>Message:</label>
               <textarea className="form-control" type="text" name="message" required/>
               <br/>
               <div className="text-center">
               {status === "SUCCESS" ? 
               <h5>Thank you for Contacting us!</h5>
               : <button class="btn btn-outline-primary">Submit</button>}
               {status === "ERROR" && 
               <p>Ooops! There was an error.</p>
               }
               </div>
            </form>

            
         </div>
         <div className="col-xs-12 col-sm-12 col-lg-1 text-center">
         </div>
         <div className="col-xs-12 col-sm-12 col-lg-5 text-center">
            <br/><br/><br/>
            <h1 className ="text-left"> Our Team</h1>
            <br/>
            <h2>Brian Lynch</h2>
            <h5>4th Year Computer Science Student & Founder</h5>
            <div className="row text-center justify-content-center">
               <div className="zoom col-2 text-center">
                  <a target="_blank" href="http://www.github.com/brianlunch">
                     <h1 className="text-blue">
                        <FontAwesomeIcon icon={faGithub} />
                     </h1>
                  </a>
               </div>
               <div className="zoom col-2 text-center">
                  <a target="_blank" href="mailto:blynch5@tcd.ie">
                     <h1 className="text-blue">
                        <FontAwesomeIcon icon={faEnvelope} />
                     </h1>
                  </a>
               </div>
               <div className="zoom col-2">
                  <a target="_blank" href="http://brianlunch.github.io/Personal">
                     <h1 className="text-blue">
                        <FontAwesomeIcon icon={faGlobe} />
                     </h1>
                  </a>
               </div>
               <div className="zoom col-2 text-center">
                  <a target="_blank" href="https://www.linkedin.com/in/brian-lynch-8a1095155/">
                     <h1 className="text-blue">
                        <FontAwesomeIcon icon={faLinkedin} />
                     </h1>
                  </a>
               </div>
            </div>
            <br/><br/>
            <h2>Liam Egan</h2>
            <h5>4th Year Computer Science Student & Founder</h5>
            <div className="row text-center justify-content-center">
               <div className="zoom col-2 text-center">
                  <a target="_blank" href="http://www.github.com/EazyEgan">
                     <h1 className="text-blue">
                        <FontAwesomeIcon icon={faGithub} />
                     </h1>
                  </a>
               </div>
               <div className="zoom col-2 text-center">
                  <a target="_blank" href="mailto:eganl7@tcd.ie">
                     <h1 className="text-blue">
                        <FontAwesomeIcon icon={faEnvelope} />
                     </h1>
                  </a>
               </div>
               <div className="zoom col-2">
                  <a target="_blank" href="http://www.github.com/EazyEgan">
                     <h1 className="text-blue">
                        <FontAwesomeIcon icon={faGlobe} />
                     </h1>
                  </a>
               </div>
               <div className="zoom col-2 text-center">
                  <a target="_blank" href="https://www.linkedin.com/in/brian-lynch-8a1095155/">
                     <h1 className="text-blue">
                        <FontAwesomeIcon icon={faLinkedin} />
                     </h1>
                  </a>
               </div>
            </div>
         </div>
      </div>
   </div>
</div>
);
}
submitForm(ev) {
ev.preventDefault();
const form = ev.target;
const data = new FormData(form);
const xhr = new XMLHttpRequest();
xhr.open(form.method, form.action);
xhr.setRequestHeader("Accept", "application/json");
xhr.onreadystatechange = () => {
if (xhr.readyState !== XMLHttpRequest.DONE) return;
if (xhr.status === 200) {
form.reset();
this.setState({ status: "SUCCESS" });
} else {
this.setState({ status: "ERROR" });
}
};
xhr.send(data);
}
}
export default Contact;