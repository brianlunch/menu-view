import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from '../Components/Navbar'
import Pricing from '../Components/Pricing'
import ScanSheet from '../ScanSheetLabels.PNG'



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
                <div className="howTo">
                <h2 className="text-blue">Pricing</h2>
              
                <h4>We have 3 different pricing models to choose from: </h4><br></br>
                <div className="row justify-content-center">
                <Pricing></Pricing>
                </div>
                </div>
                </div>
           
        )
    }
}

export default AboutMe
