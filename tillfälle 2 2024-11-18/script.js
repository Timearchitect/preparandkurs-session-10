// 2) datatyper

let x //deklarera

//  number
x = -100    // (int)integer/(16545L)long , heltal 
x = 0.1     // (0.5f) float/(16.544069855D)double , decmaltal

// string

x = '$'     //  char/character ,  karaktär/teecken
x = "bok sdfsdfsd df"   // (str)String , text/sträng
x = `bok dsf
sdf sfd`   // (str)String ,flera rader byter är ok

// boolean
x = true   //(bool) boolean , boolean

// undefined
x = undefined  // är inte bestämt värde

// null
x = null  // tomt   typeof funkar ej

// symbol

// BigInt

//console.log( typeof 5);

// String + String = String      // konkatination
// String + number = String      // konkatination
// String + boolean = String     // konkatination
// String + undefined = String   // konkatination

// number + number = number      // kalkylation 
// number + boolean = number     // kalkylation 
// number + undefined = number   // kalkylation 
// number + null = number        // kalkylation 

// boolean + boolean = number    // kalkylation 



// 3 )if satser


// condition koder , ger boolean
// 1 == 1  // jämnför
// 1 < 2   // mindre
// 2 > 1   // större
// 1 <= 2  // mindre eller likamed
// 2 >= 1  // större eller likamed
// 1 === 1 // jämnför & datatypen
// 1 != 1  // olika  (! är inte/not)
// !true -> false
// !false -> true

// && och/and   strikt
// || eller / or   generös 

let vip = true
let age = 18




if(  age >= 18 ){
    console.log("YES");
}else {
    console.log("NO");
}



console.log("vidare....");

let count = 0
while(count < 3){
	console.log(count)
	count++
}


while ( 1 + 1 == 2 ){  / /true
    console.log( "hej");
    break;   	//avbryter loopen
}


if (  ?  &&  ? ){  // fler  conditions går att använda vid
	console.log( "yes");
}else {
	console.log( "no");
}

//extra 

switch(age) {
    case 20:
	console.log("systemet")
    break;

    case 18:
	console.log("systemet")
    break;

default:
	console.log("else...")

}
 // kommentar
