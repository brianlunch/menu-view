import React, { Component } from "react";
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub} from '@fortawesome/free-brands-svg-icons'
import { faQrcode, faAt, faUtensils, faEuroSign} from '@fortawesome/free-solid-svg-icons'

//This class takes in a title and a description and displays them as shown on the homepage


class CardItems extends Component {
    render() {
        const a =this.props.icon;
        return (
            
            <div className={this.props.style}>
            <Link to={this.props.link}>
                        <div class="card-body text-center" >
                            <br></br>
                            {a=="euro"? <h3><FontAwesomeIcon icon={faEuroSign}/></h3> : null}
                            {a=="QR"? <h3><FontAwesomeIcon icon={faQrcode}/></h3> : null}
                                {a=="menu"? <h3><FontAwesomeIcon icon={faUtensils}/></h3> : null}
                                {a=="contact"? <h3><FontAwesomeIcon icon={faAt}/></h3> : null}
                            <h3 class="card-title">{this.props.title1}</h3>
                            <h3 class="card-title">{this.props.title2}</h3>
                                
                                
                        </div>
                        
                </Link>
            </div>
        
        );
    }
}

export default CardItems;
