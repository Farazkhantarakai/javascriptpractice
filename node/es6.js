// var and let var functionscope and let block scope
// let fName='Farazkhan';
// redeclaration is not possible in let 
// let fName=20;
// const faraz='I am a Student';
// console.log(faraz)

// let firstArray=[1,2,3,5,6,7]
// //spread operator
// let secondArray=[...firstArray];

// console.log(secondArray)


// loops 
// const array=[2,3435,65,23,76]

// for(let i in array){
//     console.log(i)
// }



// const h='Hello';
// for(let i of h){
//     console.log(i)
// }


// const n={
//     alpha:'Alpha',
//     beta:'Beta'
// }
// for(let i of n){
//     console.log(i)
// }


// const array=[1,2,3,4]
// const [a,,,d]=array;
// console.log(a)
// console.log(d)


// const person={
//     person1:'faraz',
//     person2:'fahad',
//     person3:'fahar'
// }

// const person=[1,2,4,5,6]

// for(let x in person){
//     console.log(person[x])   //faraz ,fahad ,fahar & for list 1,2,4,5,6
// }


//  const person={
//         person1:'faraz',
//         person2:'fahad',
//         person3:'fahar'
//     }
    
// for of is only applicable for arrays 
    // const person=[1,2,4,5,6]
    
    // for(let x of person){
    //     console.log(x)   // list 1,2,4,5,6
    // }
    

    // object destructuring
//     const person={
//         first:'farazkhan',
//         secondName:'AhmadFarazu',
//         fatherName:'Farman Ali' 
//     }
//   //you can do renaming it this way
//     const {secondName:hello}=person
    // console.log(hello)             //hello you need to print hello


// you can assign a function to a variable 
    // const name =  () => {
    // }

// async function click() {
//     var a=0;
//     for(let i =0 ;i<500;i++) {
//         console.log(i)
//           a=a+i;
//     }
// return a;
// }
// async function  giveMe()  {
//  await click().then((value)=> {
//     console.log(value)
// }).catch((value) => {
//     console.log(value)
// })
// }
// giveMe();
// javascript by default synchronous 