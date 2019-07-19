import firebase from 'firebase';

const config = { /* COPY THE ACTUAL CONFIG FROM FIREBASE CONSOLE */
    apiKey: "AIzaSyBltPbSxNQN2AhhFWL9_rydmzyxr4dYEiQ",
    authDomain: "login-react-material-ui.firebaseapp.com",
    databaseURL: "https://login-react-material-ui.firebaseio.com",
    projectId: "login-react-material-ui",
    storageBucket: "login-react-material-ui.appspot.com",
    messagingSenderId: "334367605836"
};
const fire = firebase.initializeApp(config);
export default fire;
