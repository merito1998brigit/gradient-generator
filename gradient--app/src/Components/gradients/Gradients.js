import React, { useEffect } from "react";
import Gradient from "./Gradient";
import { useDispatch, useSelector } from "react-redux";
import { getGradients } from "../../actions/gradientAction";
import Fullgradient from "./Fullgradient";
const Gradients = () => {
   const dispatch = useDispatch();
   const gradients = useSelector((state) => state.gradient.gradients);
   const gradient = useSelector((state) => state.gradient.gradient);
   console.log(gradients);
   useEffect(() => {
      dispatch(getGradients());
   }, []);
   return (
      <React.Fragment>
         {gradient && <Fullgradient />}
         <div className="columns is-multiline">
            {gradients.map((gradient) => (
               <Gradient key={gradient._id} gradient={gradient} />
            ))}
         </div>
      </React.Fragment>
   );
};
export default Gradients;
