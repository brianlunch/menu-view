import React from 'react'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import Home from './Pages/Home'
import AboutMe from './Pages/AboutMe'
import CV from './Pages/CV'
import Portfolio from './Pages/Portfolio'
import Contact from './Pages/Contact'
import Pav from './Pages/Pav'
import Sample1 from './Pages/Sample1'
import Sample2 from './Pages/Sample2'
import FAQ from './Pages/FAQ'
import 'bootstrap/dist/css/bootstrap.min.css'
import ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'
import history from './Utils/History.jsx'
import './style.css'
import './App.css'
import ReactGA from 'react-ga';


  ReactGA.initialize('UA-171059896-1');
  ReactGA.pageview('/#/');
  ReactGA.pageview('/#/pricing');
  ReactGA.pageview('/#/how-to-use');


function App() {

    ReactGA.initialize('UA-123791717-1');
    ReactGA.pageview('/#/');
    ReactGA.pageview('/#/pricing');
    ReactGA.pageview('/#/how-to-use');
    ReactGA.pageview('/#/menu-examples');
    ReactGA.pageview('/#/contact-us');
    ReactGA.pageview('/#/pavMenu');
    ReactGA.pageview('/#/sample1');
    ReactGA.pageview('/#/sample2');
    ReactGA.pageview('/#/faq');
  return (
    <div className="App">
      <HashRouter basename={process.env.PUBLIC_URL} history={history}>
        <Switch>
          <Route exact path={'/'}component={Home}/>
          <Route exact path={'/pricing'}component={AboutMe}/>
          <Route exact path={'/how-to-use'}component={  Home}/>
          <Route exact path={'/menu-examples'}component={Portfolio}/>
          <Route exact path={'/contact-us'}component={Contact}/>
          <Route exact path={'/pavMenu'}component={Pav}/>
          <Route exact path={'/sample1'}component={Sample1}/>
          <Route exact path={'/sample2'}component={Sample2}/>
          <Route exact path={'/faq'}component={FAQ}/>
        </Switch>
      </HashRouter>
      
    </div>
  )
}

export default App
