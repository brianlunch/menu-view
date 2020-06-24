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
<div className="text-left whatPage slide-in-fwd-center">
   <Navbar history={this.state.history} />

   <div className="howTo">
   <div className="row">

   <div className="col-xs-12 col-sm-12 col-lg-6 how">
   
   <div className="row text-center ">
         
         

      </div>
   </div>

         <div className="col-xs-12 col-sm-12 col-lg-6 what">
   <h2 className="text-blue">What is e-menu?</h2>
   <br/>
   <p><b>e-menu</b> provides businesses with contactless menus and a scan sheet. The scan sheet contains a QR code, Tap Tag and URL in order to view the menu.</p>

   <p><b>e-menu</b> was created by two irish students in light of the recent Covid-19 pandemic to ensure the safety of business employees and customers. </p>
   
   <p>For more in-depth info please visit our frequently asked questions page</p>
   </div>
   
   
   </div>

   
   
   <br/><br/>  
   <div className="row cardTings ">
      
<div className="col-xs-12 col-sm-12 col-lg-12"><h1 className="text-center">Benefits of e-menu</h1><br/></div>
      
      
   
      <div className="col-xs-6 col-sm-6 col-lg-3">
   <div className=" zoom text-center">
   <h1 className="text-blue"><FontAwesomeIcon icon={faVirus}/></h1>
      <h5>Avoids Infection</h5>
      Ensures safety of employees & customers by removing the need for potentially infectious menus.
      <br/><br/>
   </div>
   </div>
   <div className="col-xs-6 col-sm-6 col-lg-3">
   <div className=" zoom text-center">
   <h1 className="text-blue"><FontAwesomeIcon icon={faWheelchair}/></h1>
      <h5>Improves accesibility</h5>
      Allows visually impaired customers to use their smartphones accesbility features eg. text to speech
   
      <br/><br/></div>
   </div>
   
   <br/> 
   
   <div className="col-xs-6 col-sm-6 col-lg-3">
   <div className="zoom text-center">
   <h1 className="text-blue"><FontAwesomeIcon icon={faEuroSign}/></h1>
     <h5>Quick & Cheap Changes</h5>
     Changing menu design/content is faster & cheaper than printed menus. Small changes (eg. price) are <b>Free</b>.
     <br/><br/></div>
   </div>
   <br></br>
   <div className="col-xs-6 col-sm-6 col-lg-3">
   <div className=" zoom text-center">
   <h1 className="text-blue">www.</h1>
      <h5>Improves Visibility</h5>
      Improves a businesess online prescence. It also shows they care about customer & employee safety.
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