import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader
import VueResource from 'vue-resource'
import firebase from "firebase"

// import { database } from "firebase";

Vue.use(VueResource);
Vue.use(Vuetify)


firebase.initializeApp({
  apiKey: "AIzaSyCYt9K7dswlTKabGLbz9BRBBg6k5AT06aE",
  authDomain: "gcd2019-submission-form.firebaseapp.com",
  databaseURL: "https://gcd2019-submission-form.firebaseio.com",
  projectId: "gcd2019-submission-form",
  storageBucket: "gcd2019-submission-form.appspot.com",
  messagingSenderId: "755442782163",
  appId: "1:755442782163:web:5c4a3c1171df63d8"
});

// const firestore = firebase.firestore();
// const settings = { /* your settings... */ timestampsInSnapshots: true };
// firestore.settings(settings);

// export const db = firebase.firestore();

// export const db = firebase.database();


new Vue({
  el: '#app',
  render: h => h(App)
})
