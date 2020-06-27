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

class Sample2 extends Component {
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
          <div class ="row justify-content-center menuu">
         
         <div class="col-xs-12 col-sm-12 col-lg-11">
            <br/>
            <div className="bg-white">
            <h1 class ="text-center text-black">Restaurant </h1>
            <br/><br/>
            <h2 className="text-center">Starters</h2> <br/>
            <div class="row text-center">
                <div className="col-12">
               <h4>Soup of the day - €6</h4>
               <p>Please ask server for soup of the day.</p>
               </div>
            </div>
            <div class="row text-center">
            <div className="col-12">
               <h4>Prawn Cocktail - €9</h4>
               <p>Irish Bay prawns in a Marie Rose sauce on a bed of fresh lettuce.</p>
               </div>
            </div>
            <div class="row text-center">
            <div className="col-12">
               <h4>Buffalo Wings - €8</h4>
               <p>Chicken wings in a Buffalo sauce. Served with blue cheese dip.</p>
               </div>
            </div>
            <br/><br/>
            <h2 className="text-center">Main Courses</h2> <br/>
            <div class="row text-center">
                <div className="col-12">
               <h4>Indian Vegtable Curry - €10</h4>
               <p>An indian curry with fresh vegtables. Served with basmati rice.</p>
               </div>
            </div>
            <div class="row text-center">
            <div className="col-12">
               <h4>Carbonara - €11</h4>
               <p>Fresh pasta carbonara with bacon bits.</p>
               </div>
            </div>
            <div class="row text-center">
            <div className="col-12">
               <h4>Sirloin Steak - €15</h4>
               <p>12oz steak cooked to your taste served with chips and pepper sauce</p>
               </div>
            </div>

            <br/><br/>
            <h2 className="text-center">Deserts</h2> <br/>
            <div class="row text-center">
                <div className="col-12">
               <h4>Chocolate fudge cake - €7</h4>
               <p>Chocolate fudge cake served with vanilla ice-cream.</p>
               </div>
            </div>
            <div class="row text-center">
            <div className="col-12">
               <h4>Strawberry cheesecake - €11</h4>
               <p>Wexford strawberry cheesecake baked fresh today.</p>
               </div>
            </div>
            <div class="row text-center">
            <div className="col-12">
               <h4>Apple pie - €8</h4>
               <p>Homemade appl pie served with vanilla ice-cream</p>
               </div>
            </div>
            </div>
         </div>
      </div>
        </div>
    )
  }
}

export default Sample2
