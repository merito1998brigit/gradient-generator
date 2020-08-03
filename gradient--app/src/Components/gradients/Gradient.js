import React from "react";
import { downloadGradient, setGradient } from "../../actions/gradientAction";
import { useDispatch } from "react-redux";
const Gradient = ({ gradient }) => {
   const dispatch = useDispatch();
   return (
      <div className="column is-4">
         <div className="box">
            <div className="columns">
               <div className="column is-6">{gradient.name}</div>
               <div className="column is-6 has-text-right">
                  <button
                     className="button is-small is-warning"
                     onClick={() => dispatch(downloadGradient(gradient.name))}
                  >
                     Download
                  </button>
               </div>
            </div>
            <div
               className="gradient mb-3"
               onClick={() => dispatch(setGradient(gradient))}
               style={{
                  backgroundImage: `linear-gradient(${gradient.colors.direction},${gradient.colors.start},${gradient.colors.end})`,
               }}
            >
               {" "}
            </div>
            <div className="columns">
               <div className="column is-6">
                  <span className="tag is-dark mr-2">{gradient.colors.start}</span>
                  <span className="tag is-dark mr-2">{gradient.colors.end}</span>
               </div>
               <div className="column is-6 has-text-right">
                  <span>{gradient.downloads} Downloads</span>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Gradient;
