import * as firebase from 'firebase';


// Initialize Firebase
const config = {
    apiKey: "AIzaSyD9KrredeuiHZ-qzG1OwwNMXOq5wPfACg0",
    authDomain: "expensify-26d85.firebaseapp.com",
    databaseURL: "https://expensify-26d85.firebaseio.com",
    projectId: "expensify-26d85",
    storageBucket: "expensify-26d85.appspot.com",
    messagingSenderId: "349164922514"
};

firebase.initializeApp(config);

const database = firebase.database();

database.ref().set({
    name: 'Frank',
    age: 38,
    isCool: true,
    location: {
        city: 'San Diego',
        state: 'California'
    }
});

// database.ref().set('This is my data');

database.ref('age').set(39);
database.ref('location/city').set('Sacramento');

database.ref('attributes').set({
    height: 72,
    weight: 185
});