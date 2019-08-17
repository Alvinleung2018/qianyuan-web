import React, {Component, Fragment} from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import About from '../pages/about'
// import Home from '../pages/home'
// import Product from '../pages/product'

function Foot() {
  return (
    <div>
    <ul>
      <li>
        <Link to="/tacos">Tacos</Link>
      </li>
      <li>
        <Link to="/home">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/product">product</Link>
      </li>
    </ul>
    </div>
  );
}

// function Aa() {
//   return (
//     <div>
//       <h2>Home</h2>
//     </div>
//   );
// }

// function Ba() {
//   return (
//     <div>
//       <h2>About</h2>
//     </div>
//   );
// }

// function Topics({ match }) {
//   return (
//     <div>
//       <h2>Topics</h2>
//       <ul>
//         <li>
//           <Link to={`${match.url}/rendering`}>Rendering with React</Link>
//         </li>
//         <li>
//           <Link to={`${match.url}/components`}>Components</Link>
//         </li>
//         <li>
//           <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
//         </li>
//       </ul>

//       <Route path={`${match.path}/:topicId`} component={Topic} />
//       <Route
//         exact
//         path={match.path}
//         render={() => <h3>Please select a topic.</h3>}
//       />
//     </div>
//   );
// }

// function Topic({ match }) {
//   return (
//     <div>
//       <h3>{match.params.topicId}</h3>
//     </div>
//   );
// }

export default Foot;
