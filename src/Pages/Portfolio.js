import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import sample1 from '../Sample1.PNG'
import sample2 from '../sample2.PNG'
import pavMenu from '../PavMenu.PNG'

import Navbar from '../Components/Navbar'
import { Link } from 'react-router-dom'


/*This is the home page and makes use of the Navbar, 
homeNavConatiner, homeStatsContainer and TitleContainer components */

class Portfolio extends Component {
  constructor(props) {
    super(props)
    
    this.state = { history: this.props.history }
  }

  render() {
    return (
      <div className="portfolio slide-in-fwd-center text-left">
          <Navbar history={this.state.history}></Navbar>
          <div className=" howTo ">
        <h1 className="text-blue text-left">Menu Examples</h1>
        <br></br><br></br>
        <div className="row text-center">

        <div className="col-xs-12 col-sm-12 col-lg-3">
        <h4>The Pavillion Bar</h4>
        <br></br>
        <img className="menuPreview" src={pavMenu}/>
        <br></br><br></br>
        <Link to={ "/pavMenu" }>
        <button type="button" class="btn btn-outline-primary">View Menu</button>
        </Link>
        </div>
        <div className="col-xs-12 col-sm-12 col-lg-3">
        <h4>Sample 1</h4>
        <br></br>
        <img className="menuPreview" src={sample1}/>
        <br></br><br></br>
        <Link to={ "/sample1" }>
        <button type="button" class="btn btn-outline-primary">View Menu</button>
        </Link>
        </div>
        <div className="col-xs-12 col-sm-12 col-lg-3">
        <h4>Sample 2</h4>
        <br></br>
        <img className="menuPreview" src={sample2}/>
        <br></br><br></br>
        <Link to={ "/sample2" }>
        <button type="button" class="btn btn-outline-primary">View Menu</button>
        </Link>
        </div>
        <div className="col-xs-12 col-sm-12 col-lg-3 textMenu">
        <h4>Custom Menu</h4>
        <br></br>
        <h6>
          We can also redesign or replicate any other menu design desired. <br></br><br></br>
          Please contact us in order to order custom menus!
        </h6>
        <br></br>
        <Link to={"/contact-us"}>
        <button type="button" class="btn btn-outline-primary">Contact Us</button>
        </Link>
        </div>

        </div>

        
        
        </div>
        </div>
    )
  }
}

export default Portfolio
