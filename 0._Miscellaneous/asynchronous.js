/*
Why: Javascript is single-threaded
If we didnt write asynchronous code we would have blocking code

Use cases of asynchronous code:
    Data traveling over a network (fetch)
    Reading and writing to files
    Import when asynchronously calling URLs.
    Interaction with a database.
    Heave calculaltions
    Encryption/Decryption
    Event listeners (DOM)

    basically anything that takes time (since we don't want to block and prevent other code form running).

    Without Async:
    Solution 1:
        Callback functions.
        problem: callback hell, pyramid of doom

    Solution 2:
    Promises
        Can have two different states:
            - Pending
            - Fulfilled
                - Resolved, Rejected

    Solution 3:
    introducing async/await
    again syntactic sugar
*/

new Promise((resolve,reject)=> {
    try {
        //throw Error;
        resolve("Yay!")
    } catch (stackTrace) {
        reject("Nay!");
    }
})
.then(succesMessaage => console.log(succesMessaage))
.catch(errorMessage => console.log(errorMessage));

/* Assignment implement a new Promise in a function  called somethingGoodSomethingBad
the function should return the Promise

bonus implement a 3 second delay in the promise to simulate asynchronous code

*/


function howAwesomeAmI(message){
    return new Promise((resolve,reject) => {
        try {
            resolve(`${message} is very awesome!`)
        } catch (error) {
            reject(`${message} is not awesome!`)
        }
    })
}

howAwesomeAmI("Anders")
.then(answer => console.log(answer));




function somethingGoodSomethingBad(){

    const succes = true

   return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                if(succes){
                    resolve("So good!")
                }else {
                    throw Error;
                }
            } catch (errorMessage) {
                console.log(errorMessage)
                reject("So Bad!")
            }
        },3000);
        });
}

/*
somethingGoodSomethingBad()
.then(data => console.log(data))
.catch(errorMessage => console.log(errorMessage));
*/

//const shouldBeGood = await somethingGoodSomethingBad();

async function asyncAwaitExample() {
    try {
        const shouldBeGood = await somethingGoodSomethingBad();
        console.log(shouldBeGood)
    } catch (errorMessage) {
        console.log(errorMessage)
    }
}

asyncAwaitExample();