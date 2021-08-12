import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

// CSS Import
import './index.css';

// Components Import
import Home from './components/Home';
import NavigationBar from './components/NavigationBar';
import PortfolioSection from './components/PortfolioSection';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';

const Site = () => {
  return (
    <Router>
      <React.Fragment>
        <NavigationBar />
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/portfolio' component={PortfolioSection} />
          <Route path='/about-me' component={AboutMe} />
          <Route path='/contact' component={Contact} />
        </Switch>
      </React.Fragment>
    </Router>
  )
}

ReactDOM.render(<Site />, document.getElementById('root'))