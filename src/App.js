import React from "react";
import { Router, Switch, Route } from 'react-router'
import { createBrowserHistory } from 'history'
import Employees from './Employees'
import Employee from './Employee'
import Home from './Home'
import Nav from './Nav'

const history = createBrowserHistory()

export default () => {
  return (
    <Router history={history}>
      <Nav />
      <Switch>
        <React.Suspense fallback={<div>...loading</div>}>
          <Route path="/" component={Home} />
          <Route path="/employees" component={Employees} exact={true}/>
          <Route path="/employee/:id" component={Employee} exact={true}/>
        </React.Suspense>
      </Switch>
    </Router>
  );
};
