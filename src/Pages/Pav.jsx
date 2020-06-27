import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import pavMenu from '../PavMenu.PNG'
import sample1 from '../Sample1.PNG'
import Navbar from '../Components/Navbar'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBackward} from '@fortawesome/free-solid-svg-icons'
import '../Pav.css'; // Tell webpack that Button.js uses these styles


/*This is the home page and makes use of the Navbar, 
homeNavConatiner, homeStatsContainer and TitleContainer components */

class Pav extends Component {
  constructor(props) {
    super(props)
    
    this.state = { history: this.props.history }
  }

  render() {
    return (
      <div className=" slide-in-fwd-center text-left">
          <Navbar history={this.state.history}></Navbar>
          <div className="portfolioContent">
              <Link className="link" to={ "/menu-examples" }>
          <h4><FontAwesomeIcon icon={faBackward}/> &nbsp; Return to sample menus</h4>
          </Link>
          </div>
          <div class ="row Title menuu">
         
         <div class="col-xs-12 col-sm-12 col-lg-12">
            <br/>
            <h1 class ="text-center text-white">The Pavillion Bar</h1>
            <br/><br/>
            <div class="row text-center">
               <div class = "col-xs-12 col-sm-12 col-lg-6 text-left menu-column1">
                  <h2  class ="text-center text-yellow">Sandwiches & Wraps</h2>
                  <br/>
                  <div class ="row menu-item">
                     <div class = "col-8">
                        <h4> Steak Sandwich</h4>
                        <p className="text-white"> Steak sandwich, caramelized onions & BBQ sauce. Served with salad and fries.</p>
                     </div>
                     <div class = "col-4 text-right">
                        <h4>€9 </h4>
                     </div>
                  </div>
                  <div class ="row menu-item">
                     <div class = "col-8">
                        <h4>Club Sandwich</h4>
                        <p className="text-white">White or Brown bread with mature cheddar cheese, chicken, bacon and lettuce. Served with Fries and Salad.</p>
                     </div>
                     <div class = "col-4 text-right">
                        <h4>€11</h4>
                     </div>
                  </div>
                  <div class ="row menu-item">
                     <div class = "col-8">
                        <h4> Knuckle Sandwich</h4>
                        <p className="text-white"> For those who bring in can from centra. Served with salad and fries.</p>
                     </div>
                     <div class = "col-4 text-right">
                        <h4>Free </h4>
                     </div>
                  </div>
                  <div class ="row menu-item">
                     <div class = "col-8">
                        <h4>Chicken Caesar Wrap</h4>
                        <p className="text-white"> Chicken, lettuce, croutons with Caesar dressing. Served with salad and fries.</p>
                     </div>
                     <div class = "col-4 text-right">
                        <h4>€9 </h4>
                     </div>
                  </div>
                  <br/>
                  <h2  class ="text-center text-yellow">Platters</h2>
                  <br/>
                  <div class ="row menu-item">
                     <div class = "col-8">
                        <h4> 4 Person Platter</h4>
                        <p className="text-white"> Chicken wings, wedges, fries, cocktails sausages for four people</p>
                     </div>
                     <div class = "col-4 text-right">
                        <h4>€12 </h4>
                     </div>
                  </div>
                  <div class ="row menu-item">
                     <div class = "col-8">
                        <h4> 6 Person Platter</h4>
                        <p className="text-white"> Chicken wings, wedges, fries, cocktails sausages for six people</p>
                     </div>
                     <div class = "col-4 text-right">
                        <h4>€16 </h4>
                     </div>
                  </div>
                  <div class ="row menu-item">
                     <div class = "col-8">
                        <h4> 8 Person Platter</h4>
                        <p className="text-white"> Chicken wings, wedges, fries, cocktails sausages for eight people</p>
                     </div>
                     <div class = "col-4 text-right">
                        <h4>€18 </h4>
                     </div>
                  </div>
               </div>
               <div class = "col-xs-12 col-sm-12 col-lg-6  menu-column2 text-left">
                  <h2  class ="text-center text-yellow">Sides</h2>
                  <br/>
                  <div class ="row menu-item">
                     <div class = "col-8">
                        <h4>Chips</h4>
                     </div>
                     <div class = "col-4 text-right">
                        <h4>€4.50 </h4>
                     </div>
                  </div>
                  <div class ="row menu-item">
                     <div class = "col-8">
                        <h4>Curry Chips</h4>
                     </div>
                     <div class = "col-4 text-right">
                        <h4>€5</h4>
                     </div>
                  </div>
                  <div class ="row menu-item">
                     <div class = "col-8">
                        <h4>Taco Chips</h4>
                     </div>
                     <div class = "col-4 text-right">
                        <h4>€5</h4>
                     </div>
                  </div>
                  <div class ="row menu-item">
                     <div class = "col-8">
                        <h4>Beans</h4>
                     </div>
                     <div class = "col-4 text-right">
                        <h4>€5</h4>
                     </div>
                  </div>
                  <br/>
                  <h2  class ="text-center text-yellow">Wines</h2>
                  <br/>
                  <div class ="row menu-item">
                     <div class = "col-8">
                        <h4>House Red</h4>
                     </div>
                     <div class = "col-4 text-right">
                        <h4>€5 </h4>
                     </div>
                  </div>
                  <div class ="row menu-item">
                     <div class = "col-8">
                        <h4>House White</h4>
                     </div>
                     <div class = "col-4 text-right">
                        <h4>€5</h4>
                     </div>
                  </div>
                  <div class ="row menu-item">
                     <div class = "col-8">
                        <h4>House Rose</h4>
                     </div>
                     <div class = "col-4 text-right">
                        <h4>€5 </h4>
                     </div>
                  </div>
                  <div class ="row menu-item">
                     <div class = "col-8">
                        <h4>Merlot</h4>
                     </div>
                     <div class = "col-4 text-right">
                        <h4>€5.50 </h4>
                     </div>
                  </div>
                  <br/> 
                  <h2  class ="text-center text-yellow">Beers</h2>
                  <br/>
                  <h4 class="text-yellowish">On Draught</h4>
                  <br/>
                  <div class ="row menu-item">
                     <div class = "col-8">
                        <h4>Heineken</h4>
                     </div>
                     <div class = "col-4 text-right">
                        <h4>€5 </h4>
                     </div>
                  </div>
                  <div class ="row menu-item">
                     <div class = "col-8">
                        <h4>Hop House 13</h4>
                     </div>
                     <div class = "col-4 text-right">
                        <h4>€5</h4>
                     </div>
                  </div>
                  <div class ="row menu-item">
                     <div class = "col-8">
                        <h4>Guiness</h4>
                     </div>
                     <div class = "col-4 text-right">
                        <h4>€5 </h4>
                     </div>
                  </div>
                  <div class ="row menu-item">
                     <div class = "col-8">
                        <h4>Canadian</h4>
                     </div>
                     <div class = "col-4 text-right">
                        <h4>€5.50 </h4>
                     </div>
                  </div>
                  <br/>
                  <h4 class="text-yellowish">Cans</h4>
                  <br/>
                  <div class ="row menu-item">
                     <div class = "col-8">
                        <h4>Pratsky</h4>
                     </div>
                     <div class = "col-4 text-right">
                        <h4>€2.50 </h4>
                     </div>
                  </div>
                  <div class ="row menu-item">
                     <div class = "col-8">
                        <h4>Druids</h4>
                     </div>
                     <div class = "col-4 text-right">
                        <h4>€2.50</h4>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
        </div>
    )
  }
}

export default Pav
