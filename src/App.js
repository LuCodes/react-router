import React, { Component } from 'react';
import { Route, BrowserRouter, Switch, NavLink } from 'react-router-dom';
import Home from './Component/Home';
import Contact from './Component/Contact';
import History from './Component/History';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
              <div>
                <NavLink exact to="/"> Accueil </NavLink>
                <NavLink to="/page-de-contact"> Contact </NavLink>
                <NavLink to="/notre-histoire" activeStyle={{color: 'red'}}> History </NavLink>

                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/page-de-contact" component={Contact} />
                  <Route path="/notre-histoire" component={History} />
                </Switch>
                
              </div>
            </BrowserRouter>
        );
    }
}

export default App;