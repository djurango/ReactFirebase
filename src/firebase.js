import firebase from "firebase/app";
import "firebase/auth";

import config from "./config";

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

export const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: "popup",
  signInSuccessUrl: "/",
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID
  ]
};

export const auth = firebase.auth();
