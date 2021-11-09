import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./Home";
import Calendar from "./Calendar";
import Day from "./Day";

import generateRandomAppointments from "./utils";

class App extends React.Component {
  
  constructor() {
    super()
    this.state = {
      appointments: generateRandomAppointments(120)
    }
  }

  render() {
    console.log(this.state.appointments)  
    return(
      <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/calendar">Calendar view</Link>
            </li>
            <li>
              <Link to="/day">Day view</Link>
            </li>
          </ul>
        </nav>
        <main>
          <Switch>
            <Route path="/calendar">
              <Calendar appointments={this.state.appointments} />
            </Route>
            <Route path="/day">
              <Day appointments={this.state.appointments.filter(app => app.day === 10)} />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
    )
  }

}

export default App;
