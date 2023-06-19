// document.addEventListener('DOMContentLoaded', function () {
//     let user = {};
//     user.name = "john";
//     user.surname = "Smith";
//     user.name = "Pete";
//     delete user.name;
//     alert(user.name);
// })


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


