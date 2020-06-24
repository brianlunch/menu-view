import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from '../Components/Navbar'
import Title from '../Components/Title'
import CardItems from '../Components/CardItems'

import logo from '../emenu.png'; // with import

/*This is the home page and makes use of the Navbar, 
homeNavConatiner, homeStatsContainer and TitleContainer components */

class Home extends Component {

  constructor(props) {
    super(props)

    this.state = {
      history: this.props.history
    }
  }

  render() {


    

    return (

      <div className="HomePage slide-in-top">


        <Navbar history={this.state.history} />

        <div className="HomePageContent text-center">
        <br/><br/><br/>
          <div className="row justify-content-center">
            <div className="col-xs-12 col-sm-12 col-lg-12 text-center">

            <img src={logo} /><br/><br/>
            <h4>An Online Contactless Menu Platform, keeping your customers & business safe.</h4>
              
           </div>

           </div>

           <br></br><br></br>
             <div class = "row justify-content-center">
             <div className="col-xs-12 col-sm-12 col-md-6 col-lg-2">
            <CardItems  title1="How it" title2="Works" link="how-to-use" style="card zoom Card-blue" icon="QR"></CardItems>
            </div>
            
            
            
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-2">
            <CardItems  title1="Menu" title2="Examples" link="menu-examples" style="card zoom Card-blue" icon="menu"></CardItems>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-2">
            <CardItems  title1="Monthly" title2="Pricing" link="pricing" style="card zoom Card-blue" icon="euro"></CardItems>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-2">
            <CardItems  title1="Contact" title2="Us" link="contact-us" style="card zoom Card-blue" icon="contact"></CardItems>
            </div>
            </div>
             </div>
        </div>
        
      
    )
  }
}

export default Home
