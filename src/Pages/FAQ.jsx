import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import sample1 from '../Sample1.PNG'
import pavMenu from '../PavMenu.PNG'
import { Card, Accordion, Button } from 'react-bootstrap';
import Navbar from '../Components/Navbar'
import { Link } from 'react-router-dom'
/*This is the home page and makes use of the Navbar, 
homeNavConatiner, homeStatsContainer and TitleContainer components */
class FAQ extends Component {
constructor(props) {
super(props)
this.state = { history: this.props.history }
}
render() {
return (
<div className=" slide-in-fwd-center text-left">
   <Navbar history={this.state.history} />
   <div class="row contact">
      <div className="col-6">
          <h2 className="text-blue">Frequently Asked Questions</h2>
          <p>If you have any other questions please feel free to <Link className="link" to="contact-us">contact us</Link>.</p>
         <br/>
         <Accordion defaultActiveKey="">
            <Card>
               <Accordion.Toggle as={Card.Header} eventKey="0">
                  <b>What is e-menu?</b>
               </Accordion.Toggle>
               <Accordion.Collapse eventKey="0">
                  <Card.Body>e-menu is an online menu platform developed in light of the recent Covid-19 pandemic.<br/><br/>
                     e-menu provides businesses with an online menu along with a scan sheet that contains all info a customer needs to view the online menu such as a QR code, Tap Tag & URL.
                  </Card.Body>
               </Accordion.Collapse>
            </Card>
            <Card>
               <Accordion.Toggle as={Card.Header} eventKey="8">
                  <b>Why do I need e-menu?</b>
               </Accordion.Toggle>
               <Accordion.Collapse eventKey="8">
                  <Card.Body>e-menu's main goal is to help combat Covid-19 and allow busineeses to comply with the new regulations regarding food menu's.
                      <br/><br></br>
                      The government stated that "high touch self-service items requiring frequent hand contact removed from use, or appropriately washed, cleaned and sanitized, and changed after each customer". 
                      <br/><br></br>
                      e-menu allows businesses to avoid having to clean their menu after each use.
                      
                  </Card.Body>
               </Accordion.Collapse>
            </Card>
            <br/>
            <h4>What is...</h4>
            <Card>
               <Accordion.Toggle as={Card.Header} eventKey="9">
                  <b>What is an online menu?</b>
               </Accordion.Toggle>
               <Accordion.Collapse eventKey="9">
                  <Card.Body>   An online menu is simply a menu built using HTML which allows it to be displayed on the internet. Examples of our online menus can be found <Link className="link" to="menu-examples">here</Link>.
                  </Card.Body>
               </Accordion.Collapse>
            </Card>
            <Card>
               <Accordion.Toggle as={Card.Header} eventKey="4">
                  <b>What is a scan sheet?</b>
               </Accordion.Toggle>
               <Accordion.Collapse eventKey="4">
                  <Card.Body>
                      A scan sheet is a sheet we provide to you that will be placed on every table in your business. This scan sheet can be customised to fit your aesthetic and contains all necessary info necessary for customers to view the online menu.
                  </Card.Body>
               </Accordion.Collapse>
            </Card>
            <Card>
               <Accordion.Toggle as={Card.Header} eventKey="1">
                  <b>What is a QR code?</b>
               </Accordion.Toggle>
               <Accordion.Collapse eventKey="1">
                  <Card.Body>
                     A QR code is a type of bar code that is readable by smarthphone devices. This QR code can be scanned using the phones camera or a third-party app.
                     <br/><br/>
                     The QR code on our scan sheet directs the customer to the online menu as demonstarted in our "how it works" 
                     <Link className="link" to="/how-to-use">
                     Video</Link>.
                  </Card.Body>
               </Accordion.Collapse>
            </Card>
            <Card>
               <Accordion.Toggle as={Card.Header} eventKey="2">
                 <b>What is a Tap Tag?</b> 
               </Accordion.Toggle>
               <Accordion.Collapse eventKey="2">
                  <Card.Body>
                     A Tap Tag is an NFC enabled tag we attach to our scan sheets which enables any smartphone to view the online menu by simply tapping their phone off the scan sheet. 
                     It uses the same technology as contactless credit cards.
                     <br/><br/>
                     The Tap Tag on our scan sheet directs the customer to the online menu as demonstarted in our "how it works" 
                     <Link className="link" to="/how-to-use">
                     Video</Link>.
                  </Card.Body>
               </Accordion.Collapse>
            </Card>
            <br/>
            <h4>General</h4>
            <Card>
               <Accordion.Toggle as={Card.Header} eventKey="3">
                 <b>Do I need any technical knowledge to implement this?
               </b> </Accordion.Toggle>
               <Accordion.Collapse eventKey="3">
                  <Card.Body>
                     You need absolutely zero technological knowledge in order to implement e-menu in your business. All the tech stuff is handled by us, which allows you to focus on the more important parts of your business!
                  </Card.Body>
               </Accordion.Collapse>
            </Card>
            <Card>
               <Accordion.Toggle as={Card.Header} eventKey="5">
                 <b>Does e-menu work with any device?
               </b> </Accordion.Toggle>
               <Accordion.Collapse eventKey="5">
                  <Card.Body>
                     e-menu works with every device that has an internet connection. Including smartphones, laptops and tablets.
                  </Card.Body>
               </Accordion.Collapse>
            </Card>

            <Card>
               <Accordion.Toggle as={Card.Header} eventKey="6">
                 <b>Does the scan sheet need to be cleaned?
               </b> </Accordion.Toggle>
               <Accordion.Collapse eventKey="6">
                  <Card.Body>
                     e-menu is a completely contactless way to view menus, due to this our scan sheets do not necessarily have to be cleaned after every use. However, we do recommend cleaning them periodically in order to ensure safety.
                  </Card.Body>
               </Accordion.Collapse>
            </Card>

            <Card>
               <Accordion.Toggle as={Card.Header} eventKey="7">
                 <b>What do i do if I have an issue with e-menu?
               </b> </Accordion.Toggle>
               <Accordion.Collapse eventKey="7">
                  <Card.Body>
                     If you have an issue with our product please <Link className="link" to="contact-us">contact us</Link> immediately and we will resolve your issue as best as we can.
                  </Card.Body>
               </Accordion.Collapse>
            </Card>

         </Accordion>
      </div>
   </div>
</div>
)
}
}
export default FAQ