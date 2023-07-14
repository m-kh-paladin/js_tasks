// TASK NUMBER 1
// Write the code, one line for each action:
//     Create an empty object user.
//     Add the property name with the value John.
//     Add the property surname with the value Smith.
//     Change the value of the name to Pete.
//     Remove the property name from the object.

// document.addEventListener('DOMContentLoaded', function () {
//     let user = {};
//     user.name = "john";
//     user.surname = "Smith";
//     user.name = "Pete";
//     delete user.name;
//     alert(user.name);
// })

// -----------------------------------------------------------------

// TASK NUMBER 2
// Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.

// document.addEventListener('DOMContentLoaded', function () {
//     let user = {};
//     user.name = "john";
//     user.surname = "Smith";
//     function isEmpty() {
//         let x = Object.keys(user)
//         if (x.length) {
//             alert("false")
//         } else {
//             alert("true")
//         }
//     }
//     isEmpty(user);
// });

// -----------------------------------------------------------------

// TASK NUMBER 3
// Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.
// If salaries is empty, then the result must be 0.

// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// }

// let sum = 0

// for (let key in salaries){
// sum += salaries[key];
// }
// alert(sum)

// -----------------------------------------------------------------

// TASK NUMBER 4
// Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.

// // before the call
// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
// };

// function multiplyNumeric() {
//     for (let key in menu) {
//         if (typeof menu[key] == 'number') {
//             menu[key] *= 2;
//         }
//         console.log(menu[key]);
//     }
// }

// multiplyNumeric(menu);
