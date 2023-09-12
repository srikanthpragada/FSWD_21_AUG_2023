
const ps = new Promise((resolve, reject) => {
    // some operation 
    //resolve("Done");   // fulfill promise
    reject("Error")  // reject promise 
}
);

// async function test() {
//     let result = await ps;
//     console.log(result)
// }

ps.then(v => console.log(v))
ps.catch(err => console.log(err))

// test() 
