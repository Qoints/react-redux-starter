import React from "react";
import Router from "react-router/BrowserRouter";
import Match from "react-router/Match";
import Link from "react-router/Link";
import Counter from "./Counter";
import Hello from "./Hello";

const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/counter">Counter</Link></li>
      </ul>

      <Match exactly pattern="/" component={Hello}/>
      <Match pattern="/counter" component={Counter}/>
    </div>
  </Router>
);

export default BasicExample;
