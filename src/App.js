import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './component/header/header';
import Home from'./component/header/home';
import About from './component/header/about';
import Portfolio from './component/header/portfolio';
import'./css/main.css';
import 'font-awesome/css/font-awesome.min.css';



class App extends Component {
  render() {
    return (
      <Router>
          <div className="App">
              <Header />
                  <Route exact path="/" component={Home} />
                  <Route exact path="/about" component={About} />
                  <Route exact  path="/portfolio" component={Portfolio} />
          </div>
      </Router>
    );
  }
}

export default App;
