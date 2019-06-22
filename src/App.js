import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Dashboard from './views/dashboard/dashboard';
import About from './views/about/about';
import CreateBlog from './views/createBlog/createBlog';
import Login from './views/login/login';
import axios from 'axios';

import './App.css';


class App extends Component {
  componentDidMount(){
    axios.get('/api/test')
      .then((response)=>{
        console.log(response.data)
      })
    
  }
  render() {
    return (
      <div className="app">
        <Router>
          <Switch>
            <Route path="/dashboard" component={Dashboard}/>
            <Route path="/aboutme" component={About}/>
            <Route path="/createBlog" component={CreateBlog}/>
            <Route exact path="/" component={Login}/>
          </Switch>
        </Router>
      </div>
    )
  }
}


export default App;
