'use strict';
function strictFunction(){
    'use strict'
}



// never Ever do this! - its a global enviroment variable
// totalGLobalVariable = "mark"

// never EVER do this! - its a global variable - Use let
// var globalVariable

{
    var someValue = true
    { 
        var someValue = false
    }
    console.log(someValue)
}

const me = {
    name: "Anders"
}

// brug let og ikke var
for(let i = 0; i < 5; i++){
    setTimeout(() => 
    console.log(i), 1000)
}



