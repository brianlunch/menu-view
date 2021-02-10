import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from '../Components/Navbar'
import Pricing from '../Components/Pricing'
import ScanSheet from '../ScanSheetLabels.PNG'
import { Link } from 'react-router-dom'

import { Card, Accordion, Button } from 'react-bootstrap';

/*This is the home page and makes use of the Navbar, 
homeNavConatiner, homeStatsContainer and TitleContainer components */

class AboutMe extends Component {
    constructor(props) {
        super(props)

        this.state = { history: this.props.history }
    }

    render() {
        return (
            <div className="text-left slide-in-fwd-center">
                <Navbar history={this.state.history} />
                <div className="price">
                <h1 className="text-blue">Pricing</h1>
                
                <h4>We have 3 different pricing models to choose from: </h4>
                <p >Need help choosing a plan? Feel free to <Link className="link text-blue" to ="/contact-us">Contact Us</Link>.
                <br/><br/>
                <Accordion><Card>
               <Accordion.Toggle as={Card.Header} eventKey="10">
                 <b>How do I pay for an e-menu?
               </b> (Click here) </Accordion.Toggle>
               <Accordion.Collapse eventKey="10">
                  <Card.Body>
                     Payment is made through PayPal. A €5 deposit is paid through Paypal, then our designers will implement your menu and present you with it.
                     <br/><br/>
                     If you are happy with the design the remaining balance is then paid through PayPal.
                     
                  </Card.Body>
               </Accordion.Collapse>
            </Card></Accordion>
                </p>
                <br></br>
                <div className="row justify-content-center bg-white">
                <Pricing></Pricing>
                </div>
                <div className = "row justify-content-center">
                <div className = "col-9 text-center">
                <h5 className="text-red">Clicking Order this plan currently directs to our contact page as our online is currently down. Please contact us stating which plan you are interested in and we will get back to you ASAP. Payents are made through paypal at the moment,  Apologies for the inconvenience.</h5>
                </div>
                </div>
                </div>

                
                </div>
           
        )
    }
}

export default AboutMe
