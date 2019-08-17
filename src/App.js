import React, {Component, Fragment} from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Foot from './components/foot'
import Head from './components/head'
import routes from './route.config'


// const routes = [
//   {
//     path: "/",
//     exact: true,
 
//     component: () => <h2>Home</h2>
//   },
//   {
//     path: "/bubblegum",
   
//     component: () => <h2>Bubblegum</h2>
//   },
//   {
//     path: "/shoelaces",
   
//     component: () => <h2>Shoelaces</h2>
//   }
// ];


// class App extends Component {
//   constructor (props) {
//     super(props)
//   }
//   render() {
//     console.log(this.props)
//     return (
      
//         <Router>
//           <Head />
//           <Foot />
//           {routes.map((route, index) => (
//            <Route
//            key={index}
//            exact={route.exact}
//            component={route.component}
//             />
//           ))}
//         </Router>
      
//     )
//   }
// }

// function App() {
//   return (
//     <Router>
//       <div>
//         <ul>
//           <li>
//             <Link to="/home">Home</Link>
//           </li>
//           <li>
//             <Link to="/about">About</Link>
//           </li>
//           <li>
//             <Link to="/product">product</Link>
//           </li>
//         </ul>

//         {routes.map((route, i) => (
//           <RouteWithSubRoutes key={i} {...route} />
//         ))}
//       </div>
//     </Router>
//   );
// }


function App() {
  return (
    <Router>
      <div>
        {/* <div
          style={{
            padding: "10px",
            width: "40%",
            background: "#f0f0f0"
          }}
        >
          <ul style={{ listStyleType: "none", padding: 0 }}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">about</Link>
            </li>
            <li>
              <Link to="/product">product</Link>
            </li>
          </ul>

          
        </div> */}
        <Head />

        {/* <div style={{ flex: 1, padding: "10px" }}> */}
          {routes.map((route, index) => (
            // Render more <Route>s with the same paths as
            // above, but different components this time.
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.component}
            />
          ))}
        {/* </div> */}
      </div>
    </Router>
  );
}

export default App;
