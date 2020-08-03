import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getGradients } from "../../actions/gradientAction";
function Dashboard() {
   const dispatch = useDispatch();
   const gradients = useSelector((state) => state.gradient.gradients);
   console.log(gradients);
   useEffect(() => {
      dispatch(getGradients());
   }, []);
   return (
      <div>
         <div className="dashboard">
            <div className="section">
               <div className="container">
                  <div className="columns  has-text-centered ">
                     <div className="column is-4">
                        <div className="box">
                           <div className="columns">
                              <div className="column is-6">
                                 <span class="material-icons dashboard-icon has">
                                    palette
                                 </span>
                              </div>
                              <div className="column is-6">
                                 <h2 className="title">{gradients.length}</h2>
                                 <h3 className="subtitle">Gradients</h3>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="column is-4">
                        <div className="box">
                           <div className="columns">
                              <div className="column is-6">
                                 <span class="material-icons dashboard-icon">
                                    cloud_download
                                 </span>
                              </div>
                              <div className="column is-6">
                                 <h2 className="title">
                                    {gradients
                                       .map((gradient) => gradient.downloads)
                                       .reduce((num, total) => num + total, 0)}
                                 </h2>
                                 <h3 className="subtitle">Downloads</h3>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="column is-4">
                        <div className="box">
                           <div className="columns">
                              <div className="column is-6">
                                 <span class="material-icons dashboard-icon">face</span>
                              </div>
                              <div className="column is-6">
                                 <h2 className="title">60</h2>
                                 <h3 className="subtitle">Visitors</h3>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="columns">
                     <div className="column is-6">
                        <div className="box">
                           <table className="table is-fullwidth">
                              <thead>
                                 <tr>
                                    <th>name</th>
                                    <th>downloads</th>
                                 </tr>
                              </thead>
                              <tbody>
                                 {gradients.map(({ name, downloads }) => (
                                    <tr>
                                       <td>{name}</td>
                                       <td>{downloads}</td>
                                    </tr>
                                 ))}
                              </tbody>
                           </table>
                        </div>
                     </div>
                     <div className="column is-6 is-centered has-text-centered">
                        <div className="container pt-5">
                           <Link to="/add_gradient">
                              <button className="button is-dark has-text-centered">
                                 Create or Edit Gradients
                              </button>
                           </Link>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Dashboard;
