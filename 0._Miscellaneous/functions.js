console.log(add(5,28))

function add(a,b){
    return a + b
}





function genericActionExecutor(anyCallbackFunction, name){
    // execute some code
    return anyCallbackFunction(name);
}

const spitting = (name) => `${name} is spitting.`;


console.log(genericActionExecutor(spitting,"Amanda"));



// task create a function that allows malthe to shoot and call it
// task result should be: Malte is shooting

const shooting = (name) => `${name} is shooting.`;

console.log(genericActionExecutor(shooting,"Malthe"));

// create a SINGLE statement below that console logs "Murat" is running away

console.log(genericActionExecutor((name) => `${name} is running away.`,"Murat"));