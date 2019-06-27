import React, { Component } from 'react';
import {BrowserRouter as Switch, Route, withRouter} from 'react-router-dom';
import Dashboard from './views/dashboard/dashboard';
import About from './views/about/about';
import CreateBlog from './views/createBlog/createBlog';
import Login from './views/login/login';
import axios from 'axios';

import './App.css';


class App extends Component {
  componentDidMount() {
    axios.get('/auth/user')
      .then(response => {
        if(!response.data.success){
          this.props.history.push('/dashboard')
        }
      });
  	}
  render() {
    return (
      <div className="app">
      <link href="https://fonts.googleapis.com/css?family=Montserrat|Rock+Salt&display=swap" rel="stylesheet"/>


          <Switch>
            <Route path="/dashboard" component={Dashboard}/>
            <Route path="/aboutme" component={About}/>
            <Route path="/createBlog" component={CreateBlog}/>
            <Route exact path="/" component={Login}/>
          </Switch>
      </div>
    )
  }
}


export default withRouter(App);
