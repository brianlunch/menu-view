import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from '../Components/Navbar'
import Title from '../Components/Title'
import CardItems from '../Components/CardItems'
import TapImage from '../TapTagImage.PNG'
import ScanImage from '../ScanImage.PNG'
import CVBrianLynch from '../CVBrianLynch.pdf'
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
         <div className="col-6">
   <h2 className="text-blue">What is MenuView?</h2>
   <br></br>
   MenuView is an online menu platform, created in order to protect businesses and their customers in light of the recent Covid19 pandemic. 
   <br></br><br></br>It avoids the need for customers to touch potentially infectious menus and allow them to view
   the menu from their smartphone or any other device.
   <br></br><br></br>
   MenuView provides businesses with their own online menu and a scan sheet. This scan sheet contains all the customer needs to view the online
   menu including a QR code, a Tap Tag and a URL. 
   <br></br><br></br><br></br>
   </div>
   </div>
   
      
      <div className="row">
         <div className="col-2">
            <img className ="TapImg" src={TapImage}/>
         </div>
         <div className="col-3">
            <h3>Tap Smarthphone on the Tap Tag</h3>
            Simply tap your smartphone off the Tap Tag which is on the Scan Sheet provided.
         </div>
         <div className="col-1">
            <h1>OR</h1>
         </div>
         <div className="col-3">
            <h3>Scan the QR Code using Phone</h3>
            Simply scan the QR code using any QR scanner on any smartphone device.
         </div>
         <div className="col-2">
            <img className ="TapImg" src={ScanImage}/>
         </div>

      </div>
      
      <br></br><br></br>
      <h2 className="text-blue">Further Explanation</h2>
      <br></br>
      <div class ="row">
         <div class = "col-6">
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
         <div className="col-6">
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