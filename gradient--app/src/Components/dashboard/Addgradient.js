import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
   getGradients,
   CreateGradient,
   deleteGradient,
   updateGradient,
} from "../../actions/gradientAction";
import styled from "styled-components";
const GradientBox = styled.div`
   background-image: linear-gradient(
      ${(props) => props.direction},
      ${(props) => props.start},
      ${(props) => props.end}
   );
`;
const GradientChips = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   width: 100%;
   height: 100%;
   background-image: linear-gradient(
      ${(props) => props.direction},
      ${(props) => props.start},
      ${(props) => props.end}
   );
   & div {
      display: none;
   }
   &:hover div {
      display: block;
   }
`;
const Addgradient = () => {
   const dispatch = useDispatch();
   const gradients = useSelector((state) => state.gradient.gradients);
   const [name, setName] = useState("");
   const [startColor, setStartColor] = useState("");
   const [currentGradient, setCurrentGradient] = useState(null);
   const [endColor, setEndColor] = useState("");
   const [direction, setDirection] = useState("");
   const [positions, setPosition] = useState([
      "to bottom",
      "to top",
      "to left",
      "to right",
      "to top left",
      "to top right",
      "to bottom left",
      "to bottom right",
   ]);

   useEffect(() => {
      dispatch(getGradients());
   }, []);
   const onSubmit = (e) => {
      e.preventDefault();
      const gradient = {
         name: name,
         colors: {
            direction: direction,
            start: startColor,
            end: endColor,
         },
      };
      if (currentGradient == null) {
         dispatch(CreateGradient(gradient));
         setName("");
         setDirection("");
         setStartColor("");
         setEndColor("");
      } else {
         dispatch(updateGradient(Object.assign(currentGradient, gradient)));
      }
      setCurrentGradient(null);
   };

   const editGradient = (gradient) => {
      setCurrentGradient(gradient);
   };

   useEffect(() => {
      if (currentGradient != null) {
         setName(currentGradient.name);
         setDirection(currentGradient.colors.direction);
         setStartColor(currentGradient.colors.start);
         setEndColor(currentGradient.colors.end);
      } else {
         setName("");
         setDirection("");
         setStartColor("");
         setEndColor("");
      }
   }, [currentGradient]);
   return (
      <div className="container py-4">
         <div className="columns">
            <div className="column is-7">
               <div className="columns is-multiline">
                  {gradients.map((gradient) => (
                     <div
                        className="column is-4"
                        key={gradient._id}
                        style={{ height: 100, width: 200 }}
                     >
                        <GradientChips
                           direction={gradient.colors.direction}
                           start={gradient.colors.start}
                           end={gradient.colors.end}
                           className="box"
                        >
                           <div className="buttons">
                              <button
                                 className="button is-rounded is-light is-small"
                                 onClick={() => editGradient(gradient)}
                              >
                                 edit
                              </button>
                              <button
                                 className="button is-rounded is-light is-small"
                                 onClick={() => dispatch(deleteGradient(gradient._id))}
                              >
                                 delete
                              </button>
                           </div>
                        </GradientChips>
                     </div>
                  ))}
               </div>
            </div>
            <div className="column is-5">
               <div className="box">
                  <form onSubmit={onSubmit}>
                     <div className="field">
                        <label className="label"> Gradient Name</label>
                        <div className="control">
                           <input
                              className="input"
                              type="text"
                              placeholder="enter your gradient name"
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                           />
                        </div>
                     </div>
                     <div className="field">
                        <label className="label">First color</label>
                        <div className="control">
                           <input
                              className="input"
                              type="text"
                              placeholder="enter your First color"
                              value={startColor}
                              onChange={(e) => setStartColor(e.target.value)}
                           />
                        </div>
                     </div>
                     <div className="field">
                        <label className="label">last color</label>
                        <div className="control">
                           <input
                              className="input"
                              type="text"
                              placeholder="enter your last color"
                              value={endColor}
                              onChange={(e) => setEndColor(e.target.value)}
                           />
                        </div>
                     </div>
                     <div className="field">
                        <div className="columns is-multiline">
                           {startColor &&
                              endColor &&
                              positions.map((position) => (
                                 <div className="column is-6">
                                    <GradientBox
                                       direction={position}
                                       start={startColor}
                                       end={endColor}
                                       className="box has-text-grey has-text-centered"
                                       onClick={() => setDirection(position)}
                                    >
                                       {position}
                                    </GradientBox>
                                 </div>
                              ))}
                        </div>
                     </div>
                     <div className="field py-2">
                        <div className="control">
                           {currentGradient ? (
                              <React.Fragment>
                                 <button className="button is-warning is-fullwidth mb-2">
                                    Update Gradient
                                 </button>
                                 <button
                                    className="button is-dark is-fullwidth "
                                    onClick={() => setCurrentGradient(null)}
                                 >
                                    Cancel
                                 </button>
                              </React.Fragment>
                           ) : (
                              <button className="button is-primary is-fullwidth">
                                 Create Gradient
                              </button>
                           )}
                        </div>
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Addgradient;
