import firebase from 'firebase/app';
import 'firebase/database'



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


export { firebase, database as default };




// child_removed 
// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });
// database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         const expenses = [];

//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });

//         console.log(expenses)
//     });

// database.ref('expenses')
//     .on('value',
//         (snapshot) => {
//             const expenses = [];

//             snapshot.forEach((childSnapshot) => {
//                 expenses.push({
//                     id: childSnapshot.key,
//                     ...childSnapshot.val()
//                 });
//             });

//             console.log(expenses)
//         });

// database.ref('expenses').push({
//     description: 'Rent',
//     note: '',
//     amount: 109500,
//     createdAt: 976123498763
// });

// database.ref('expenses').push({
//     description: 'Phone Bill',
//     note: '',
//     amount: 5900,
//     createdAt: 976123498763
// });


// database.ref('expenses').push({
//     description: 'Coffee',
//     note: '',
//     amount: 350,
//     createdAt: 976123498763
// });

       // }); {
    //     description: 'Gum',
    //     note: 'pack of gum',
    //     amount: 150,
    //     createdAt: 1000,
    // }, {
    //     description: 'Food',
    //     note: 'Cheese Burger',
    //     amount: 850,
    //     createdAt: 2000,
    // });
