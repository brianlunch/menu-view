import React from 'react';
import Navbar from '../Components/Navbar'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'



class Contact extends React.Component{
   constructor(props) {
      super(props)
      this.state = {history: this.props.history}
   }


render() {

return (

   <div className="text-left slide-in-fwd-center">
      <Navbar history={this.state.history} />
       <div className={"howTo"}>
       <div className="row">
           <div className="col-xs-12 col-sm-12 col-lg-6">
               <h2 className="text-blue">Contact Us</h2>
               <p>
                   Please fill in your request below:
               </p>
               <form role="form" method="post" id="reused_form">
                   <div className="row">

                   </div>
                   <div className="row">
                       <div className="col-xs-12 col-sm-12 col-lg-6 form-group">
                           <label htmlFor="comments">
                               Comments:</label>
                           <textarea className="form-control" type="textarea" name="comments" id="comments"
                                     placeholder="Your Comments" maxLength="6000" rows="7"></textarea>
                       </div>
                   </div>
                   <div className="row">
                       <div className="col-sm-6 form-group">
                           <label htmlFor="name">
                               Your Name:</label>
                           <input type="text" className="form-control" id="name" name="name" required>
                           </input>
                       </div>
                       <div className="col-sm-6 form-group">
                           <label htmlFor="email">
                               Email:</label>
                           <input type="email" className="form-control" id="email" name="email" required>
                           </input>
                       </div>
                   </div>

                   <div className="row">
                       <div className="col-sm-12 form-group">
                           <button type="submit" className="btn btn-lg btn-primary btn-block">Send →</button>
                       </div>
                   </div>

               </form>

           </div>
       </div>
   </div>
</div>
);
}
}
export default Contact;
