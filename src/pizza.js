import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";

export default function PizzaApp() {
  return (
    <Router>
      <div>
        <ul>
          <li>Pizza Selection 1</li>
          <li>Pizza Selection 2</li>
          <li>Pizza Selection 3</li>
          <li>Pizza Selection 4</li>
          <li>Pizza Selection 5</li>
        </ul>
        <ul>
          <li>
            <Link to="/toppings">Toppings</Link>
          </li>
        </ul>

        <hr />

        {/* <Switch> */}

        <Route path="/toppings">
          <Toppings />
        </Route>
        {/* </Switch> */}
      </div>
    </Router>
  );
}

function Toppings() {
  // The `path` lets us build <Route> paths that are
  // relative to the parent route, while the `url` lets
  // us build relative links.
  let { path, url } = useRouteMatch();

  return (
    <div>
      <h2>Toppings and drinks</h2>
      <ul>
        <li>
          <Link to={`${url}/drinks`}>Select Drinks</Link>
        </li>
      </ul>

      {/* <Switch>
        <Route path={path}>
          <h3>Please select drinks</h3>
        </Route> */}
      <Route path={`${path}/:drinks`}>
        <Drinks testProp="prop123" />
      </Route>
      {/* </Switch> */}
    </div>
  );
}

function Drinks(props) {
  let prms = useRouteMatch();
  console.log("prms", prms);
  console.log(props);
  return (
    <div>
      <h3>Drinks</h3>
      <ul>
        <li>Drink Selection 1</li>
        <li>Drink Selection 2</li>
        <li>Drink Selection 3</li>
        <li>Drink Selection 4</li>
        <li>Drink Selection 5</li>
      </ul>
      <Link to={`${prms.url}/checkout`}>Continue to checkout</Link>
      <Route path={`${prms.path}/checkout`}>
        <Checkout testProp="TestPropFromCheckout" />
      </Route>
    </div>
  );
}

function Checkout(props) {
  console.log(props);
  return (
    <div>
      <h3>Checkout Component</h3>
    </div>
  );
}
