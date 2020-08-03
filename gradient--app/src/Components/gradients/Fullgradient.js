import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeGradient } from "../../actions/gradientAction";
const Fullgradient = () => {
   const dispatch = useDispatch();
   const gradient = useSelector((state) => state.gradient.gradient);
   const { colors } = gradient;
   return (
      <div
         className="gradient-full animate__animated animate__zoomIn"
         style={{
            background: `linear-gradient(${colors.direction},${colors.start},${colors.end})`,
         }}
         onClick={() => dispatch(removeGradient())}
      ></div>
   );
};

export default Fullgradient;
