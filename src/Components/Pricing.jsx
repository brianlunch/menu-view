import React, { Component } from "react";
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTimes} from '@fortawesome/free-solid-svg-icons'

//This class takes in a title and a description and displays them as shown on the homepage


class Pricing extends Component {
    render() {
        
        return (
            
            <div class ="row justify-content-center">
                  <div class ="col-12">
                <div class ="row no-gutters">
                  <div className="col-xs-12 col-sm-12 col-lg-4">
                  <div className="priceOption text-center">
                <h2 className="text-blue text-center">Basic</h2>
                <br></br>
                <div className="text-left features">
                    <h6 ><FontAwesomeIcon className="text-green" icon={faCheck}/>&nbsp;&nbsp;Menu From Samples</h6>
                    <h6 ><FontAwesomeIcon className="text-green" icon={faCheck}/>&nbsp;&nbsp;PDF of Scan Sheet</h6>
                    <h6 ><FontAwesomeIcon className="text-green" icon={faCheck}/>&nbsp;&nbsp;Scannable QR Code</h6>
                    <h6 ><FontAwesomeIcon className="text-green" icon={faCheck}/>&nbsp;&nbsp;24/7 Web Hosting</h6>
                    <h6 ><FontAwesomeIcon className="text-red" icon={faTimes}/>&nbsp;&nbsp;Custom Scan Sheet</h6>
                    <h6 ><FontAwesomeIcon className="text-red" icon={faTimes}/>&nbsp;&nbsp;Contactless Tap Tag</h6>
                    <h6 ><FontAwesomeIcon className="text-red" icon={faTimes}/>&nbsp;&nbsp;Printed Scan Sheet</h6>
                    <h6 ><FontAwesomeIcon className="text-red" icon={faTimes}/>&nbsp;&nbsp; <b>Free</b> Menu Changes for 1 month</h6>
                    </div>
                  <br></br>
                  
                  
                  <div className="row">
                  <div class="col-5 align-self-center">
                  <h3>€40</h3>
                  </div>
                  <div class="col-2 align-self-center">And</div>
                  <div class="col-5 align-self-center">
                  <h5>€5 per menu Change</h5>
                  </div>
                  </div>
                  
                  <br></br>
                  <Link to={"/contact-us"}>
                  <button type="button" class="btn btn-outline-primary">Order This Plan</button>
                  </Link>
                  <br></br><br></br>
                </div>
                  </div>



                  <div className="col-xs-12 col-sm-12 col-lg-4">
                  <div className="priceOption text-center">
                <h2 className="text-blue text-center">Intermediate</h2>
                <br></br>
                    <div className="text-left features">
                    <h6 ><FontAwesomeIcon className="text-green" icon={faCheck}/>&nbsp;&nbsp;Menu From Samples</h6>
                    <h6 ><FontAwesomeIcon className="text-green" icon={faCheck}/>&nbsp;&nbsp;PDF of Scan Sheet</h6>
                    <h6 ><FontAwesomeIcon className="text-green" icon={faCheck}/>&nbsp;&nbsp;Scannable QR Code</h6>
                    <h6 ><FontAwesomeIcon className="text-green" icon={faCheck}/>&nbsp;&nbsp;24/7 Web Hosting</h6>
                    <h6 ><FontAwesomeIcon className="text-green" icon={faCheck}/>&nbsp;&nbsp;Custom Scan Sheet</h6>
                    <h6 ><FontAwesomeIcon className="text-green" icon={faCheck}/>&nbsp;&nbsp;Contactless Tap Tag</h6>
                    <h6 ><FontAwesomeIcon className="text-green" icon={faCheck}/>&nbsp;&nbsp; 5x A5 Printed Scan Sheets</h6>
                    <h6 ><FontAwesomeIcon className="text-red" icon={faTimes}/>&nbsp;&nbsp; <b>Free</b> Menu Changes for 1 month</h6>
                    
                    
                    </div>
                  <br></br>
                  <div className="row">
                  <div class="col-5 align-self-center">
                  <h3>€60</h3>
                  </div>
                  <div class="col-2 align-self-center">And</div>
                  <div class="col-5 align-self-center">
                  <h5>€5 per menu Change</h5>
                  </div>
                  </div>
                  <br></br>
                  <Link to={"/contact-us"}>
                  <button type="button" class="btn btn-outline-primary">Order This Plan</button>
                  </Link>
                  <br></br><br></br>
                </div>
                  </div>




                  
                  <div className="col-xs-12 col-sm-12 col-lg-4">
                  <div className="priceOption text-center">
                <h2 className="text-blue text-center">Premium</h2>
                <br></br>
                <div className="text-left features">
                    <h6 ><FontAwesomeIcon className="text-green" icon={faCheck}/>&nbsp;&nbsp;Custom Menu</h6>
                    <h6 ><FontAwesomeIcon className="text-green" icon={faCheck}/>&nbsp;&nbsp;PDF of Scan Sheet</h6>
                    <h6 ><FontAwesomeIcon className="text-green" icon={faCheck}/>&nbsp;&nbsp;Scannable QR Code</h6>
                    <h6 ><FontAwesomeIcon className="text-green" icon={faCheck}/>&nbsp;&nbsp;24/7 Web Hosting</h6>
                    <h6 ><FontAwesomeIcon className="text-green" icon={faCheck}/>&nbsp;&nbsp;Custom Scan Sheet</h6>
                    <h6 ><FontAwesomeIcon className="text-green" icon={faCheck}/>&nbsp;&nbsp;Contactless Tap Tag</h6>
                    <h6 ><FontAwesomeIcon className="text-green" icon={faCheck}/>&nbsp;&nbsp;10x A5 Printed Scan Sheet</h6>
                    <h6 ><FontAwesomeIcon className="text-green" icon={faCheck}/>&nbsp;&nbsp; <b>Free</b> Menu Changes for 1 month</h6>
                    
                    
                    </div>
                  <br></br>
                  
                  <div className="row">
                  <div class="col-5 align-self-center">
                  <h3>€80</h3>
                  </div>
                  <div class="col-2 align-self-center">And</div>
                  <div class="col-5 align-self-center">
                  <h5>€5 per menu Change</h5>
                  </div>
                  </div>
                  <br></br>
                  <Link to={"/contact-us"}>
                  <button type="button" class="btn btn-outline-primary">Order This Plan</button>
                  </Link>
                  <br></br><br></br>
                </div>
                  </div>


                </div>
                </div>
                </div>
        
        );
    }
}

export default Pricing;
