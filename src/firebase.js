import Vue from 'vue'
import VueFire from 'vuefire'
import firebase from 'firebase'


Vue.use(VueFire);

let firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBOnDML1mbioAB5gmsPgn7tz2klFAfaVAw",
    authDomain: "openrep-191019.firebaseapp.com",
    databaseURL: "https://openrep-191019.firebaseio.com",
    projectId: "openrep-191019",
    storageBucket: "openrep-191019.appspot.com",
    messagingSenderId: "336942191277"
});
export const db = firebaseApp.database();
