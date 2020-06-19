import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from '../Components/Navbar'
import TapImage from '../TapTagImage.PNG'
import ScanImage from '../ScanImage.PNG'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQrcode, faWheelchair, faVirus, faEuroSign} from '@fortawesome/free-solid-svg-icons'

/*This is the home page and makes use of the Navbar, 
homeNavConatiner, homeStatsContainer and TitleContainer components */
class CV extends Component {
constructor(props) {
super(props)
this.state = { history: this.props.history }
}
render() {
return (
<div className="text-left slide-in-fwd-center">
   <Navbar history={this.state.history} />

   <div className="howTo">
   <div className="row">
         <div className="col-xs-12 col-sm-12 col-lg-7 what">
   <h2 className="text-blue">What is e-menu?</h2>
   <br></br>
   <b>e-menu</b> is an online menu platform, created in light of the recent Covid-19 pandemic. 
   <br></br><br></br>
   We provide businesses with their own online menu and a scan sheet. This scan sheet contains all the customer needs to view the online
   menu including a QR code, a Tap Tag and a URL. The benefts include:
   <br></br><br></br>
   <div className="row cardTings">
      <div className="col-6">
   <div className="card zoom text-center">
   <h3 className="text-blue"><FontAwesomeIcon icon={faVirus}/></h3>
      Avoids customers & employees touching potentially infectious menus.
      <br></br><br></br>
   </div>
   </div>
   <div className="col-6">
   <div className="card zoom text-center">
   <h3 className="text-blue"><FontAwesomeIcon icon={faWheelchair}/></h3>
      Improves menu acess for visually impaired customers, using smartphones accesbility features.
   </div>
   </div>
   </div>
   <br/> 
   <div className="row cardTings">
   <div className="col-6">
   <div className="card zoom text-center">
   <h3 className="text-blue"><FontAwesomeIcon icon={faEuroSign}/></h3>
      Changing menu design and content is faster and cheaper than printed menus.
      
   </div>
   </div>
   <br></br>
   <div className="col-6">
   <div className="card zoom text-center">
   <h3 className="text-blue">www.</h3>
      Improves a businesses online prescence and ethical image.<br></br><br></br>
   </div>
   </div>
   
   </div>
   
   
   
   </div>
   
   <div className="col-xs-12 col-sm-12 col-lg-5 how">
   <h2 className="text-blue">How do I use e-menu?</h2><br></br>
   <div className="row text-center ">
         
         <div className="col-xs-6 col-sm-6 col-lg-6 text-left">
            <h3>Tap Smarthphone on the Tap Tag</h3>
            Simply tap your smartphone off the Tap Tag which is on the Scan Sheet provided.
         </div>
         <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <img className ="TapImg" src={TapImage}/>
         </div>
         <div className="col-xs-12 col-sm-12 col-lg-12">
            <br></br><h1>OR</h1><br></br>
         </div>
         <div className="col-xs-6 col-sm-6 col-lg-6 text-left">
            <h3>Scan the QR Code using Phone</h3>
            Simply scan the QR code using any QR scanner on any smartphone device.
         </div>
         <div className="col-xs-6 col-sm-6 col-lg-6">
            <img className ="TapImg" src={ScanImage}/>
         </div>

      </div>
   </div>
   </div>
   
      
      
      
      <br></br><br></br>
      <h2 className="text-blue">Further Explanation</h2>
      <br></br>
      <div class ="row text-black">
         <div class = "col-xs-12 col-lg-6">
            <ul>
               <h5>
                  <li>An Online menu</li>
               </h5>
               <p>This is a fully customisable online menu that can 
                  be designed to replicate your current menu or a redisgned menu for a new look. Please see our example menus.
               </p>
               <h5>
                  <li>Contactless Scan Sheet.</li>
               </h5>
               <p>A A5 that will be displayed on every table in place of traditional menus. 
                  This will have a "Tap Tag" and a QR code in which customers can use to view the contactless menu.
               </p>
            </ul>
         </div>
         <div className="col-xs-12 col-lg-6 ">
            <ul>
               <h5>
                  <li>Contactless "Tap Tags".</li>
               </h5>
               <p>This is a sticker placed in the top right of the Scan Sheet which allows customers to view the coontactless menu simply by placing their phone near it. It uses NFC technology, the same tech used in contactless credit cards.</p>
            </ul>
         </div>
      </div>
      
   </div>
</div>
)
}
}
export default CV