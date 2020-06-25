import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from '../Components/Navbar'
import Pricing from '../Components/Pricing'
import ScanSheet from '../ScanSheetLabels.PNG'
import { Link } from 'react-router-dom'


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
                <h2 className="text-blue">Pricing</h2>
                
                <h4>We have 3 different pricing models to choose from: </h4>
                <p >Need help choosing a plan? Fell free to <Link className="link text-blue" to ="/contact-us">Contact Us</Link>.</p>
                <br></br>
                <div className="row justify-content-center">
                <Pricing></Pricing>
                </div>
                <div className = "row justify-content-center">
                <div className = "col-9 text-center">
                <h5 className="text-red">Clicking Order this plan currently directs to our contact page as our payment system is currently down. Please contact us stating which plan you are interested in and we will get back to you ASAP. Apologies for the inconvenience.</h5>
                </div>
                </div>
                </div>
                </div>
           
        )
    }
}

export default AboutMe
