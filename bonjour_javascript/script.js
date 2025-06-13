// Etape 2
// 
console.log("Etape 2 : ")
let message= "Bonjours !";


console.log(message)
///let firstName="Salem";
let firstName=prompt("entrez votre prenom")
message= `Bonjour ${firstName} !`

console.log("----------------")

// Etape 3
console.log("Etape 3 : ")
function sayHello(){
    let message= "Bonjours !";
    let firstName="Salem";
    message = `Bonjour ${firstName} !`;
    console.log(message);
    
}
sayHello()

console.log("------------------")

function sayHello1(firstName){
    let message= "Bonjours !";
    message= `Bonjour ${firstName} !`;
    console.log(message);
}
sayHello1("salem")
console.log("---------------------------")
// Etape 4
console.log("Etape 4 : ")
function sayHello2(firstName,hour){
    let message
if(hour>=18){
    console.log(`bonsoir ${firstName}!`)
}else{
console.log(`Bonjour ${firstName} !`)
}}
sayHello2("salem",14)

//Etape 6

document.querySelector('h1').innerText = message;