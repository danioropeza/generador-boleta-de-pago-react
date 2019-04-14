import firebase from "firebase";

var config = {
    apiKey: 'AIzaSyDWRZgCpFC4L_wf8CsbFolsN3LJavlSdHw',
    authDomain: 'generador-boleta-de-pago-bd.firebaseapp.com',
    databaseURL: 'https://generador-boleta-de-pago-bd.firebaseio.com',
    projectId: 'generador-boleta-de-pago-bd',
    storageBucket: 'generador-boleta-de-pago-bd.appspot.com',
    messagingSenderId: '793141424622'
};
firebase.initializeApp(config);
var firebaseConnection = firebase;
export default firebaseConnection;