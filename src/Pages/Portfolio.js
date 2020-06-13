import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import pavMenu from '../PavMenu.PNG'
import Navbar from '../Components/Navbar'
import PortfolioItem from '../Components/PortfolioItem'

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
        <h2 className="text-blue text-left">Menu Examples</h2>
        <br></br>
        <div className="row text-center">

        <div className="col-3">
        <h4>The Pavillion Bar</h4>
        <br></br>
        <img className="menuPreview" src={pavMenu}/>
        <br></br><br></br>
        
        
        </div>
        <div className="col-3">
        <h4>Sample 1</h4>
        <br></br>
        <img className="menuPreview" src={pavMenu}/>
        <br></br><br></br>
        
        </div>
        <div className="col-3">
        <h4>Sample 2</h4>
        <br></br>
        <img className="menuPreview" src={pavMenu}/>
        <br></br><br></br>
        
        </div>
        <div className="col-3 textMenu">
        <h4>Custom Menu</h4>
        <br></br>
        <h6>
          We can also redesign or replicate any other menu design desired. <br></br><br></br>
          Please contact us in order to order custom menus!
        </h6>
        <br></br>
        
        </div>

        </div>

        <div className="row text-center">

        <div className="col-3">
        
        <button type="button" class="btn btn-outline-primary">View Menu</button>
        
        </div>
        <div className="col-3">
        
        <button type="button" class="btn btn-outline-primary">View Menu</button>
        </div>
        <div className="col-3">
        
        <button type="button" class="btn btn-outline-primary">View Menu</button>
        </div>
        <div className="col-3 textMenu">
        
        <button type="button" class="btn btn-outline-primary">Contact Us</button>
        </div>

        </div>
        
        </div>
        </div>
    )
  }
}

export default Portfolio
