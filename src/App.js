//App.js
import React, { Component } from 'react';
import './index.css';
import Logreg from './components/Logreg';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";//this is for routing
import Home from './components/Home';
import Deletepost from './components/Deletepost';
import Postlist from './components/Newlisting'
import Singlepost from './components/Singlepost';
import Logout from './components/Logout';
import SingleUserposts from "./components/SingleUserposts";

class App extends Component {
  render() {
    return <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/articles/join" component={Logreg} />
            <Route path="/articles/new" component={Postlist} />
            <Route exact path="/articles/:_id" component={Singlepost} />
            <Route path="/articles/author/:_id" component={SingleUserposts} />
            <Route path='/deletepost/:id' component={Deletepost} />
            <Route path="/Logout" component={Logout} />
            <Route render={function() {
                return <p>
                    {" "}
                    Not Found
                    <br />
                    <Link className="btn nav-link btn-success" to="/articles/join">
                      Back to log and Reg
                    </Link>
                  </p>;
              }} />
          </Switch>
        </Router>
      </div>;
  }
}

export default App;
