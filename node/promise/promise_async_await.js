
const ps = new Promise((resolve, reject) => {
      // Fulfill promise 
      resolve("Done Waiting")
   }
);


async function test() {
    // Wait until promise is fulfilled 
    let result = await ps;
    console.log(result)
}


test() 
