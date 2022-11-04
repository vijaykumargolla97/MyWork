// context are two types
// 1. execution  2. global

// Execution context
//  function declarations are scanned and made available
// variable declarations are scanned and made undefined


tipper("40");

function tipper(a){
    var bill = parseInt(a);
    console.log(bill + 10);
}

// function declarations are scanned and made available


var bigTipper = function (a){
    var bill = parseInt(a);
    console.log(bill + 20);
}

bigTipper("200");

//variable declarations are scanned and made undefined
 