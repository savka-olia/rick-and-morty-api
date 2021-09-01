import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import CharList from "./CharList";
import EpList from "./EpList";
import LocList from "./LocList";
import WelcomePage from "./WelcomePage";
import ToWatch from "./ToWatch";

export default function AppRouter({ num }) {

  return (

    <div className="container py-4 font-monospace">
      <ul className="row">
        <li className="col list-group-item">
          <Link className=" text-decoration-none" to="/">Home</Link>
        </li>
        <li className="col list-group-item">
          <Link className="text-decoration-none" to="/character">Characters</Link>
        </li>
        <li className="col list-group-item">
          <Link className="text-decoration-none" to="/episode">Episodes</Link>
        </li>
        <li className="col list-group-item">
          <Link className="text-decoration-none" to="/location">Locations</Link>
        </li>
        <li className="col list-group-item">
          <Link className="text-decoration-none" to="/watch">Watch List</Link>
        </li>
      </ul>
      <hr />
      <Switch>
        <Route path="/character" component={CharList} />
        <Route path="/episode" component={EpList} />
        <Route path="/location" component={LocList} />
        <Route path="/watch" component={ToWatch} />
        <Route component={WelcomePage} />
      </Switch>
    </div>
  );
}