// let see aboout promises and all of those stuff 
// function first()  {
//     console.log('first');
//   }

//   function second()  {
//     setTimeout(() => {
//         console.log('second');
//     },500);
//   }

//   function third()  {
//     console.log('third');
//   }

// first();
// second();
// third();



// function callBackExecution(last){
// setTimeout(() => {
//     console.log('1st step')
// })
// }

// callBackExecution(() => {
//     console.log('CallbackExecuted at the end')
// })


// function doSomething(callback) {
//     setTimeout(() => {
//       console.log("Step 1 is done.");
//       callback();
//     }, 1000);
//   }
  
//   function doSomethingElse(callback) {
//     setTimeout(() => {
//       console.log("Step 2 is done.");
//       callback();
//     }, 1000);
//   }
  
//   function doThirdThing(callback) {
//     setTimeout(() => {
//       console.log("Step 3 is done.");
//       callback();
//     }, 1000);
//   }
  
//   doSomething(() => {
//     doSomethingElse(() => {
//       doThirdThing(() => {
//         console.log("All done!");
//       });
//     });
//   });


// function doSomeThing(callback) {
//     setTimeout(() => {
//         console.log('step 1')
//         callback()
//     },1000)
// }


// function doSomeThingElse(callback) {
//     setTimeout(() => {
//         console.log('step 2')
//         callback()
//     },1000)
// }

// function doThirdThing(callback) {
//     setTimeout(() => {
//         console.log('step 3')
//         callback()
//     },1000)
// }

//  doSomeThing(() => {
//  doSomeThingElse(() => {
//     doThirdThing(() => {
//         console.log('All done!')
//     })
//  })
// })
