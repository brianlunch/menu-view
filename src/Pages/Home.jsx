import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from '../Components/Navbar'
import Title from '../Components/Title'
import CardItems from '../Components/CardItems'
import { Link } from 'react-router-dom' 
import Video from '../e_menu.mp4'
import logo from '../emenu.png'; // with import
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faWheelchair, faClock, faSmileBeam} from '@fortawesome/free-solid-svg-icons'

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
        <br/>
        
           <div className="row align-items-end ">

   

         <div className="col-xs-12 col-sm-12 col-lg-7 what text-left bg-white">
         <h1 className="display-1 text-blue titleGradient">e-menu</h1>
         <br/>
   
         <p>e-menu stops Covid-19 spreading through menus by moving them to a webpage that is quickly & easily accessible without touching any surfaces</p>
 <br/>
 <p>e-menu provides businesess with scan sheets that link to an online menu using contactless means such as a QR code, Tag Tag or URL. </p>
   
   <p>For more in-depth info check out our <Link className="link text-blue" to="/faq">Frequently Asked Questions</Link> page.</p>
   </div>
   <div className="col-xs-12 col-sm-12 col-lg-5 how text-left">
   
   
   <br/><br/>
   <video loop muted autostart autoPlay src={Video} className="howVideo"type="video/mp4" />

      
   </div>
   </div>
  
   <br/><br/>
   <div className="row cardTings ">
      
      <div className="col-xs-12 col-sm-12 col-lg-12">
      <br/><br/>
        <h1 className="text-center text-black">Benefits of e-menu</h1><br/><br/></div>
            <br/>
            
         
            <div className="col-xs-6 col-sm-6 col-lg-3">
         <div className=" zoom text-center">
         <h1 className="text-blue"><FontAwesomeIcon icon={faCheck}/></h1>
            <h5 className="text-blmue">Abide by Guidelines</h5>
            items requiring hand contact must be removed from use, or appropriately washed. e-menu satisfies this guideline.
            <br/><br/>
         </div>
         </div>
         <div className="col-xs-6 col-sm-6 col-lg-3">
         <div className=" zoom text-center">
         <h1 className="text-blue"><FontAwesomeIcon icon={faWheelchair}/></h1>
            <h5 className="text-blmue">Improves accesibility</h5>
            Allows visually impaired customers to use their smartphones accessbility features eg. text to speech
         
            <br/><br/></div>
         </div>
         
         <br/> 
         
         <div className="col-xs-6 col-sm-6 col-lg-3">
         <div className="zoom text-center">
         <h1 className="text-blue"><FontAwesomeIcon icon={faClock}/></h1>
           <h5 className="text-blmue">Quick Lead time</h5>
           e-menu will be set up in your restaurant within 3 business days. Changes can also be made to the menu at any time.
           <br/><br/></div>
         </div>
         <br></br>
         <div className="col-xs-6 col-sm-6 col-lg-3">
         <div className=" zoom text-center">
         <h1 className="text-blue"><FontAwesomeIcon icon={faSmileBeam}/></h1>
            <h5 className="text-blume">Improves Image</h5>
            Improves a businesess image showing they care about customer & employee safety.
            <br></br><br></br>
            <br/><br/></div>
         </div>
         
         </div>

          

           
       </div></div>
        
      
    )
  }
}

export default Home
