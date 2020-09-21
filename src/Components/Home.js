// React
import React from "react";
import { createBrowserHistory } from "history";
import { BrowserRouter as Router } from "react-router-dom";

import Routes from "./Routes";

const browserHistory = createBrowserHistory();

// Component
const Home = () => {
  // Render
  return (
    <div>
      <Router history={browserHistory}>
        <Routes />
      </Router>
    </div>
  );
};

export default Home;
