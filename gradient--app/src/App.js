import React from "react";
import Navbar from "./Components/layouts/Navbar";
import { Provider } from "react-redux";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import store, { rrfProps } from "./store";
import "./styles/App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "./Components/layouts/Homepage";
import Explore from "./Components/gradients/Explore";
import Dashboard from "./Components/dashboard/Dashboard";
import Addgradient from "./Components/dashboard/Addgradient";
import Login from "./Components/dashboard/Login";
import PrivateRoute from "./Components/dashboard/PrivateRoute";
function App() {
   return (
      <Provider store={store}>
         <ReactReduxFirebaseProvider {...rrfProps}>
            <Router>
               <div className="App">
                  <Navbar />
                  <Switch>
                     <Route exact path="/" component={Homepage} />
                     <Route exact path="/explore" component={Explore} />
                     <Route exact path="/dashboard" component={Dashboard} />
                     <Route exact path="/add_gradient" component={Addgradient} />
                     <Route exact path="/login" component={Login} />
                  </Switch>
               </div>
            </Router>
         </ReactReduxFirebaseProvider>
      </Provider>
   );
}

export default App;
