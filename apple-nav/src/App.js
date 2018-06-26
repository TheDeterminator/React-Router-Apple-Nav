import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import Mac from './components/Mac';
import Iphone from './components/Iphone';
import Home from './components/Home';
import Ipad from './components/Ipad';
import Watch from './components/Watch';
import Tv from './components/Tv';
import Support from './components/Support';
import Music from './components/Music';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navigation />
        <Route exact path="/" component={Home} />
        <Route path="/mac" component={Mac} />
        <Route path="/iphone" component={Iphone} />
        <Route path="/ipad" component={Ipad} />
        <Route path="/watch" component={Watch} />
        <Route path="/support" component={Support} />
        <Route path="/tv" component={Tv} />
        <Route path="/music" component={Music} /> 
      </React.Fragment>
    );
  }
}

export default App;
