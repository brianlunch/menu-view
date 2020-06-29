import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from '../Components/Navbar'
import TapImage from '../TapTagImage.PNG'
import Video from '../e_menu.mp4'
import ScanImage from '../ScanImage.PNG'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faWheelchair, faClock, faSmileBeam} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
/*This is the home page and makes use of the Navbar, 
homeNavConatiner, homeStatsContainer and TitleContainer components */
class CV extends Component {
constructor(props) {
super(props)
this.state = { history: this.props.history }
}
render() {
return (
<div className="text-left whatPage slide-in-fwd-center bg-white">
   <Navbar history={this.state.history} />

   <div className="howTo">
   <div className="row align-items-center">

   <div className="col-xs-12 col-sm-12 col-lg-5 how text-left">
   
   
         
   <video loop muted autostart autoPlay src={Video} className="howVideo"type="video/mp4" />

      
   </div>

         <div className="col-xs-12 col-sm-12 col-lg-6 what bg-white text-left">
          <br/>
   
         <h5 className="text-">e-menu stops Covid-19 spreading through menus by moving them to a webpage that is quickly & easily accessible without touching any surfaces</h5>
 <br/><br/>
 <p>e-menu provides businesess with scan sheets that link to an online menu using contactless means such as a QR code, Tag Tag or URL. </p>
   
   <p>For more in-depth info check out our <Link className="link" to="/faq">Frequently Asked Questions</Link> page.</p>
   </div>
   
   
   </div>

   
   
   <br/><br/>  
   <div className="row cardTings ">
      
<div className="col-xs-12 col-sm-12 col-lg-12"><h1 className="text-center">Benefits of e-menu</h1><br/></div>
      
      
   
      <div className="col-xs-6 col-sm-6 col-lg-3">
   <div className=" zoom text-center">
   <h1 className="text-blue"><FontAwesomeIcon icon={faCheck}/></h1>
      <h5>Abide by Guidelines</h5>
      items requiring hand contact must be removed from use, or appropriately washed. e-menu satisfies this guideline.
      <br/><br/>
   </div>
   </div>
   <div className="col-xs-6 col-sm-6 col-lg-3">
   <div className=" zoom text-center">
   <h1 className="text-blue"><FontAwesomeIcon icon={faWheelchair}/></h1>
      <h5>Improves accesibility</h5>
      Allows visually impaired customers to use their smartphones accessbility features eg. text to speech
   
      <br/><br/></div>
   </div>
   
   <br/> 
   
   <div className="col-xs-6 col-sm-6 col-lg-3">
   <div className="zoom text-center">
   <h1 className="text-blue"><FontAwesomeIcon icon={faClock}/></h1>
     <h5>Quick Lead time</h5>
     e-menu will be set up in your restaurant within 3 business days. Changes can also be made to the menu at any time.
     <br/><br/></div>
   </div>
   <br></br>
   <div className="col-xs-6 col-sm-6 col-lg-3">
   <div className=" zoom text-center">
   <h1 className="text-blue"><FontAwesomeIcon icon={faSmileBeam}/></h1>
      <h5>Improves Image</h5>
      Improves a businesess image showing they care about customer & employee safety.
      <br></br><br></br>
      <br/><br/></div>
   </div>
   
   </div>
 
   
   </div>
</div>
)
}
}
export default CV