
// --------------- Object Destructuring --------------------


// console.log('destructuring')

// const person = {
//     name: 'Frank',
//     age: 38,
//     location : {
//         city: 'San Diego',
//         temp: 73
//     }
// };

// const {name = 'Anonymous', age} = person;
// const {city, temp: temperature} = person.location
// // const name = person.name
// // const age = person.age

// console.log(`${name} is ${age} years old.`);
// if (city && temperature) {
//     console.log(`It's ${temperature} in ${city}`);
// };

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         // name: 'Penguin'
//     }
// };
// const { name: publisherName = "Self-Published"} = book.publisher
// console.log(publisherName); // Penguin, default -> self published


// ------------- Array Destructuring -----------------


// const address = ['1234 Main Street', 'San Diego', 'California', '90210'];

// const [, city, state = 'New York'] = address;

// console.log(`Your are in ${city} ${state}`)

// const item = ['Coffee (iced)', '$2.00', '$3.50', '$2.75'];
// const [coffee, , medium] = item;
// console.log(`A medium ${coffee} costs ${medium}`)