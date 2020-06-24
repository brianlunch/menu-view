import React from 'react';
import Navbar from '../Components/Navbar'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faGlobe, faEnvelope} from '@fortawesome/free-solid-svg-icons'
 
class Contact extends React.Component{
   constructor(props) {
      super(props)
      this.state = {history: this.props.history}
   }


render() {

return (

   <div className="text-left slide-in-fwd-center">
      <Navbar history={this.state.history} />
       <div className={"howTo"}>
       <div className="row">
           <div className="col-xs-12 col-sm-12 col-lg-6">
               <h2 className="text-blue">Contact Us</h2>
               <p>
                   Please Contact Us:
               </p>
               <form role="form" method="post" id="reused_form">
                   <div className="row">

                   </div>
                   
                   <div className="row">
                       <div className="col-sm-12 form-group">
                           <label htmlFor="name">
                               Your Name:</label>
                           <input type="text" className="form-control" id="name" name="name" required>
                           </input>
                       </div>
                       <div className="col-sm-12 form-group">
                           <label htmlFor="email">
                               Email:</label>
                           <input type="email" className="form-control" id="email" name="email" required>
                           </input>
                       </div>
                   </div>

                   <div className="row">
                       <div className="col-xs-12 col-sm-12 col-lg-12 form-group">
                           <label htmlFor="comments">
                               Comments:</label>
                           <textarea className="form-control" type="textarea" name="comments" id="comments"
                                     placeholder="Your Comments" maxLength="6000" rows="7"></textarea>
                       </div>
                   </div>

                   <div className="row">
                       <div className="col-sm-12 text-center form-group">
                       <button type="submit" class="btn btn-outline-primary">Send →</button>
                       </div>
                   </div>

               </form>

           </div>

           <div className="col-xs-12 col-sm-12 col-lg-1 text-center">
              </div>
           <div className="col-xs-12 col-sm-12 col-lg-5 text-center">
<br/><br/><br/><br/><br/><br/>
<h1 className ="text-left"> Our Team</h1><br/>
              <h2>Brian Lynch</h2>
              <h5>4th Year Computer Science Student & Founder</h5>
           <div className="row text-center justify-content-center">
                            <div className="zoom col-2 text-center">
                  <a target="_blank" href="http://www.github.com/brianlunch">
                    <h1 className="text-blue"><FontAwesomeIcon icon={faGithub} /></h1>
                  </a>
                </div>
                <div className="zoom col-2 text-center">
                  <a target="_blank" href="mailto:blynch5@tcd.ie">
                    <h1 className="text-blue"><FontAwesomeIcon icon={faEnvelope} /></h1>
                  </a>
                </div>
                <div className="zoom col-2">
                  <a target="_blank" href="http://www.brianlunch.github.io/Personal">
                    <h1 className="text-blue"><FontAwesomeIcon icon={faGlobe} /></h1>
                  </a>
                </div>
                <div className="zoom col-2 text-center">
                  <a target="_blank" href="https://www.linkedin.com/in/brian-lynch-8a1095155/">

                <h1 className="text-blue"><FontAwesomeIcon icon={faLinkedin} /></h1>
                  </a>
                </div>
                
                </div>
<br/><br/>
<h2>Liam Egan</h2>
              <h5>4th Year Computer Science Student & Founder</h5>
           <div className="row text-center justify-content-center">
                            <div className="zoom col-2 text-center">
                  <a target="_blank" href="http://www.github.com/EazyEgan">
                    <h1 className="text-blue"><FontAwesomeIcon icon={faGithub} /></h1>
                  </a>
                </div>
                <div className="zoom col-2 text-center">
                  <a target="_blank" href="mailto:eganl7@tcd.ie">
                    <h1 className="text-blue"><FontAwesomeIcon icon={faEnvelope} /></h1>
                  </a>
                </div>
                <div className="zoom col-2">
                  <a target="_blank" href="http://www.github.com/EazyEgan">
                    <h1 className="text-blue"><FontAwesomeIcon icon={faGlobe} /></h1>
                  </a>
                </div>
                <div className="zoom col-2 text-center">
                  <a target="_blank" href="https://www.linkedin.com/in/brian-lynch-8a1095155/">

                <h1 className="text-blue"><FontAwesomeIcon icon={faLinkedin} /></h1>
                  </a>
                </div>
                
                </div>
           </div>
       </div>
   </div>
</div>
);
}
}
export default Contact;
