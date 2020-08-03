import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { useFirebase } from "react-redux-firebase";
import { useSelector } from "react-redux";
const UserNavbar = () => {
   return (
      <Fragment>
         <div className="navbar-start"></div>
         <div className="navbar-end">
            <div className="navbar-item">
               <div className="buttons">
                  <Link to="/explore" className="button is-warning">
                     <strong>explore</strong>
                  </Link>
                  <Link to="/dashboard" className="button is-dark">
                     <strong>dashboard</strong>
                  </Link>
               </div>
            </div>
         </div>
      </Fragment>
   );
};
const AdminNavbar = ({ email }) => {
   const firebase = useFirebase();
   return (
      <Fragment>
         <div className="navbar-start">
            <h3 className="navbar-item ">
               Welcome
               <i class="material-icons">favorite</i>{" "}
               <span className="pl-3">{email}</span>
            </h3>
         </div>
         <div className="navbar-end">
            <div className="navbar-item">
               <div className="buttons">
                  <Link to="/explore" className="button is-warning">
                     <strong>explore</strong>
                  </Link>
                  <button className="button is-warning" onClick={() => firebase.logout()}>
                     <strong>SignOut</strong>
                  </button>
               </div>
            </div>
         </div>
      </Fragment>
   );
};
const Navbar = () => {
   const firebaseReducer = useSelector((state) => state.firebase);
   const { auth } = firebaseReducer;
   return (
      <nav className="navbar has-shadow" role="navigation" aria-label="main navigation">
         <div className="container">
            <div className="navbar-brand">
               <Link to="/" className="navbar-item">
                  <img
                     src="https://res.cloudinary.com/dxrbrkfvv/image/upload/v1592307492/react-original_gjlpfv.png"
                     alt=""
                  />
               </Link>
               <span className="navbar-item">Gradient App</span>

               <a
                  role="button"
                  className="navbar-burger burger"
                  aria-label="menu"
                  aria-expanded="false"
                  data-target="navbarMenu"
               >
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
               </a>
            </div>

            <div id="navbarBasicExample" className="navbar-menu">
               {!auth.isEmpty ? <AdminNavbar email={auth.email} /> : <UserNavbar />}
            </div>
         </div>
      </nav>
   );
};

export default Navbar;
