import {
   CREATE_GRADIENT,
   UPDATE_GRADIENT,
   GET_GRADIENTS,
   DELETE_GRADIENT,
   DOWNLOAD_GRADIENT,
   SET_GRADIENT,
   REMOVE_GRADIENT,
} from "../constants/types";
import axios from "axios";
const url = "http://localhost:8080/gradients";
//get all gradients
export const getGradients = () => async (dispatch) => {
   const result = await axios.get(url);
   console.log(result);
   dispatch({
      type: GET_GRADIENTS,
      payload: result.data,
   });
};

//create gradients
export const CreateGradient = (gradient) => async (dispatch) => {
   const result = await axios.post(url, gradient);

   dispatch({
      type: CREATE_GRADIENT,
      payload: result.data,
   });
};

//update gradients
export const updateGradient = (gradient) => async (dispatch) => {
   const result = await axios.put(
      `http://localhost:8080/gradients/${gradient._id}`,
      gradient
   );
   dispatch({
      type: UPDATE_GRADIENT,
      payload: result.data,
   });
};

//delete gradients
export const deleteGradient = (id) => async (dispatch) => {
   await axios.delete(`http://localhost:8080/gradients/${id}`);
   dispatch({
      type: DELETE_GRADIENT,
      payload: id,
   });
};

//download gradient
export const downloadGradient = (gradientName) => async (dispatch) => {
   window.open(`http://localhost:8080/gradients/downloads/${gradientName}`);
   dispatch({
      type: DOWNLOAD_GRADIENT,
      payload: gradientName,
   });
};

//set gradient
export const setGradient = (gradient) => ({
   type: SET_GRADIENT,
   payload: gradient,
});

//remove gradient
export const removeGradient = () => ({
   type: REMOVE_GRADIENT,
});
