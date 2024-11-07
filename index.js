
// const x = 40
// const ear = 2024
// console.log( ear-x );


// const name = "Вася"
// console.log(name,'Hello');

// let name = prompt("Как тебя зовут?")
// alert("здорова "+name) (Выводит сообщение с текстом)

//типы данных
//let num1 = 2345;   //number /integer(int)-2^
//let bNum = 4567898765;  //bigInt
//let userName = "Ivan";   // string (str)
//let canSwin = true;   //boolean (bool)

//let count = null;    // null-пустое значение
//let x = undefined;    //undefined
//let zz = Symbol("da");   //Symbol
//let obj = Object()  //object

//if-условие
// let age = 19
// if(age >=18){
//     console.log("Доступ разрешен")

// }



// &&-и
// == -или
//else if - иначе если


// let num1 = prompt("введи число1")
                                   // console.log = num1
// let num2 = prompt("Введи число 2")
// Num1 = parseInt(num1)
// Num2 = parseInt(num2)
// console.log(Num1 + Num2)
 
//parseInt - (превращение строки в число )
//while - цикл


//for - цикл счетчика 
// for(let i = 0;i < 10; i += 1){
//     console.log(i)
// }



    //          let people = 0
    //           while (people !== 5){
    // let x = prompt("подходит ли кондтдат")
    // if (x == "да") {
    //     console.error("артем")
    //     people =+ 1
    // }
    // else{
    //     console.log("артем рил ")
    // }
    //           }
    //            console.log("кондидаты набраны")


    //let-
//     const users =[    {
//         name : "vadim",
//         age: 30,
//         isMan: true,
//         favFood: ["apple"],
//         },
//         {
//             name : "John",
//             age: 37,
//             isMan: true,
//             favFood: ["borsh"],
//         },
//         {
//          name: "LOl",
//          age: 19,
//          isMan: false ,
//          favFood: ["Cake"],
//         },
//         {
//             name: "vi",
//             age: 15,
//             isMan: true,
//             favFood:[ "no"],
//         },
//         {
//             name: "Max",
//             age: 20,
//             isMan: true,
//             favFood: ["apple"],
//         }
//     ];
//  let usersCopy = [...users]
//  while(usersCopy.length > 0){
//     let = 0;
//     for (let i = 0; i < usersCopy.length;i++) {
//         if (usersCopy[i].age < usersCopy[youngestIndex].age){
//             youngestIndex = i;
//         }
//     }
//     console.log(usersCopy[youngestIndex].name);
//     usersCopy.splice(youngestIndex, 1);
//  }
let burger = document.querySelector("#burger");
let nav = document.querySelector("#nav");

burger.addEventListener("click", function () {
 nav.classList.toggle("active");
});



  