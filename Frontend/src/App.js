import React from "react";
import {
  Route,
  Switch,
  Redirect,
  BrowserRouter as Router,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { StripePublicKey } from "./config.json";


import "react-toastify/dist/ReactToastify.css";
import "antd/dist/antd.css";
import "./scss/App.scss";

import Home from "./pages/Home";
import PageEdit from "./pages/PageEdit";




function App() {

  return (
    <div>

    
          <ToastContainer />
          <Router>
            <Switch>
              <Route path="/pagesummary" component={PageEdit} />
              <Route path="/" component={Home} />
            </Switch>
          </Router>
     
      {/* </Elements> */}
    </div>
  );
}



export default App;
