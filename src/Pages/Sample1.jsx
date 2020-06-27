import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import pavMenu from '../PavMenu.PNG'
import sample1 from '../Sample1.PNG'
import Navbar from '../Components/Navbar'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBackward} from '@fortawesome/free-solid-svg-icons'
import '../Sample1.css'; // Tell webpack that Button.js uses these styles


/*This is the home page and makes use of the Navbar, 
homeNavConatiner, homeStatsContainer and TitleContainer components */

class Sample1 extends Component {
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
          <div class ="row  menuu">
         
         <div class="col-xs-12 col-sm-12 col-lg-11">
            <br/>
            <h1 class ="text-center text-black">Cafe </h1>
            <br/><br/>
            <div class="row text-center">
               <div class = "col-xs-12 col-sm-12 col-lg-6 text-left menu-column1">
                  <h2  class ="text-center text-black">Sandwiches & Wraps</h2>
                  <br/>
                  <div class ="row menu-item text-black">
                     <div class = "col-8">
                        <h4> Steak Sandwich</h4>
                        <p className="text-black"> Steak sandwich, caramelized onions & BBQ sauce. Served with salad and fries.</p>
                     </div>
                     <div class = "col-4 text-right">
                        <h4>€9 </h4>
                     </div>
                  </div>
                  <div class ="row menu-item">
                     <div class = "col-8">
                        <h4>Club Sandwich</h4>
                        <p className="text-black">White or Brown bread with mature cheddar cheese, chicken, bacon and lettuce. Served with Fries and Salad.</p>
                     </div>
                     <div class = "col-4 text-right">
                        <h4>€11</h4>
                     </div>
                  </div>
                  <div class ="row menu-item">
                     <div class = "col-8">
                        <h4>BLT - Bacon Lettuce & Tomato</h4>
                        <p className="text-black">White or Brown bread with bacon, lettuce and tomato. Served with Fries and Salad. </p>
                     </div>
                     <div class = "col-4 text-right">
                        <h4>€9 </h4>
                     </div>
                  </div>
                  <div class ="row menu-item">
                     <div class = "col-8">
                        <h4>Chicken Caesar Wrap</h4>
                        <p className="text-black"> Chicken, lettuce, croutons with Caesar dressing. Served with salad and fries.</p>
                     </div>
                     <div class = "col-4 text-right">
                        <h4>€9 </h4>
                     </div>
                  </div>
                  <br/>
                  <h2  class ="text-center text-black">Platters</h2>
                  <br/>
                  <div class ="row menu-item">
                     <div class = "col-8">
                        <h4> 4 Person Platter</h4>
                        <p className="text-black"> Chicken wings, wedges, fries, cocktails sausages for four people</p>
                     </div>
                     <div class = "col-4 text-right">
                        <h4>€12 </h4>
                     </div>
                  </div>
                  <div class ="row menu-item">
                     <div class = "col-8">
                        <h4> 6 Person Platter</h4>
                        <p className="text-black"> Chicken wings, wedges, fries, cocktails sausages for six people</p>
                     </div>
                     <div class = "col-4 text-right">
                        <h4>€16 </h4>
                     </div>
                  </div>
                  <div class ="row menu-item">
                     <div class = "col-8">
                        <h4> 8 Person Platter</h4>
                        <p className="text-black"> Chicken wings, wedges, fries, cocktails sausages for eight people</p>
                     </div>
                     <div class = "col-4 text-right">
                        <h4>€18 </h4>
                     </div>
                  </div>
               </div>
               <div class = "col-xs-12 col-sm-12 col-lg-6  menu-column2 text-left">
                  <h2  class ="text-center text-black">Sides</h2>
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
                  <h2  class ="text-center text-black">Wines</h2>
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
                  <h2  class ="text-center text-black">Beers</h2>
                  <br/>
                  <h4 class="text-blackish">On Draught</h4>
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
                  <h4 class="text-blackish">Cans</h4>
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

export default Sample1
