import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers";
import thunk from "redux-thunk";
import firebase from "firebase/app";
import "firebase/auth";

const fbConfig = {
   apiKey: "AIzaSyA5a4rUjnA7h3f7b26zjFnImN0Yhlt9mmU",
   authDomain: "gradient-app-fa9d7.firebaseapp.com",
   databaseURL: "https://gradient-app-fa9d7.firebaseio.com",
   projectId: "gradient-app-fa9d7",
   storageBucket: "gradient-app-fa9d7.appspot.com",
   messagingSenderId: "84414580051",
   appId: "1:84414580051:web:e877d26fcd5246f5b7cda6",
};
firebase.initializeApp(fbConfig);
// react-redux-firebase config
const rrfConfig = {
   userProfile: "users",
   // useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
};

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
export const rrfProps = {
   firebase,
   config: rrfConfig,
   dispatch: store.dispatch,
   // createFirestoreInstance // <- needed if using firestore
};
export default store;
