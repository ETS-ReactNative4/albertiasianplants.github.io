import React, { Component } from 'react';
import Landing from './Landing.jsx';
import { Redirect, Route, Switch } from 'react-router-dom';
import Plants from './Plants';
import About from './About';
import { ContactPage } from './ContactPage';
import { darkBackground } from './Colors';
import Logo from './Logo';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/plants" component={Plants} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={ContactPage} />
          <Redirect from='*' to='/' />
        </Switch>
        <footer style={{
          marginTop: '3rem',
          padding: '3rem',
          backgroundColor: darkBackground,
        }}>
          <Logo color='white' noText style={{
            height: '6rem'
          }} />
        </footer>
      </div>
    );
  }
}

export default App;
