/* // 6)  functioner
{ // scope
    let x = 0
    console.log(x);
}

for (let i = 0; i < 3; i++) {
    console.log(i);
}


let array = [ "hej", 123 ,true ]
let z 

 */
addition('hej') // hoistas

function addition(x, y) {
    // definera  i prarentess finns det parametrar
    console.log(x + y)
    return x + y
    console.log('SLUTAR')
}

function divition(x, y) {
    // definera  i prarentess finns det parametrar
    console.log(x / y)
}

addition(5, 5)
console.log()
Math.random()
Math.round()
document.title = 'ALRIK'
//alrik()  // anropa / kalla

// 7) Object

let x = 1000000
x = 2000000

// index      0          1       2           3     4
let array = [1000000, 'red', 'yxgatan 5b', true, 'David']
array[0] = 2000000
// key : value key
// egenskaper / properties
let bostad1 = {
    price: 1000000,
    color: 'red',
    adress: 'yxgatan 5b',
    sold: true,
    owner: 'David',
    queue: ['Ludwig', 'Reza'],
}



bostad1.price = 2000000
bostad1['price'] = 2000000 //js

//let user1 = { password:"monkey123" , username:"timearchitect", email:"alrik_he@hotmail.com"}

document.getElementsByTagName()

let AlrikConsole = {
    price: 1000000,
    color: 'red',
    log : function ( message ) {
        console.log(message)
    }
}

 function log ( message ) {
    console.log(message)
}







    



