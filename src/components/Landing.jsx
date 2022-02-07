import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Mentors from "./Mentors";
import AddMentors from "./AddMentors";
import Main from "./Main";
import Aboutus from "./Aboutus";
import Contactus from "./Contactus";

const Landing = () => {
  return (
    <div className="abc">
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/onlinePlatform/allMent" component={Mentors} />
          <Route exact path="/onlinePlatform/addMent" component={AddMentors} />
          <Route exact path="/onlinePlatform/about" component={Aboutus} />
          <Route exact path="/onlinePlatform/contact" component={Contactus} />
        </Switch>
      </Router>
    </div>
  );
};

export default Landing;
