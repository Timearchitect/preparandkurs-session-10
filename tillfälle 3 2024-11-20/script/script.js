// 4 arrayer fler behållare i en rad , hylla med lådor

//   index         0       1       2        3       4      5
let array = ['Emelina', 123, 'hejsan', false, true, 'alrik']
// element
array[0] = 'Ludwig' // ref skåp -> låda
//array = "Ludwig" // ref hela skåp

array[10] = 'Alex'

array[1] = array[5]

// swap
let temp = array[0]
array[0] = array[1]
array[1] = temp

array.push('David') // lägg in på slutet av arrayen
array.pop() // tabort på slutet av arrayen

array.unshift(123) // lägg in på början av arrayen
array.shift() // tabort  på början av arrayen

let queue = ['Anna2', 'Anna2', 'Anna2', 'Anna2', 'Anna2', 'Anna', 'Benny', 'Emelina', 'Alrik', 'Filip', 'Alex', 'Hanna', 'Ludwig']
queue.sort() //alfabetisk ordning fast som text

queue.indexOf('Alex')

console.log(array)

console.log(array[8]) // hittar ej  endefined
console.log(array.length) // hittar ej  endefined

document.getElementById('test')

/* document.body.innerHTML += "<br>" + queue[0]  
document.body.innerHTML += "<br>" + queue[1]
document.body.innerHTML += "<br>" + queue[2]
document.body.innerHTML += "<br>" + queue[3]
document.body.innerHTML += "<br>" + queue[4]
document.body.innerHTML += "<br>" + queue[5] */

// 5) loopar

if (true) {
    console.log('yes')
}

function addName() {
    queue.push(document.getElementById("name").value)
    document.getElementById("display").innerText=""
        let count = 0
    while (count < queue.length) {
        // om det är (true) helatiden
        console.log('loopar ' + count)
        //document.body.innerHTML += "<br>" + queue[count]
        document.getElementById("display").innerHTML +=  '<br>' + queue[count]
        count = count + 1
    }
}
function next() {
    queue.shift()
    document.getElementById("display").innerText=""
    // while loop
    let count = 0
    while (count < queue.length) {
        // om det är (true) helatiden
        console.log('loopar ' + count)
        //document.body.innerHTML += "<br>" + queue[count]
        document.getElementById("display").innerHTML +=  '<br>' + queue[count] +" har köplats:"+ (count+1)
        count = count + 1
    }
}

let i = 0
while (i < 10) {
    // om det är (true) helatiden
    i += 1
    console.log('while loop: ' + i)
    //i = i + 1
    //i ++  // bara öka med 1
}

/* for ( let i = 0;   i < 100;  i += 1  ) {  // om det är (true) helatiden
    console.log("for loop: " + i);   
    document.body.innerHTML += '<img width="100" src="chrome:\/\/branding\/content\/about-logo@2x.png" alt="">'
}

 */

// alt + ctrl + <  :   |
// altGr  + < : |

//0123456789ABCDEF

//0123456789

//01
