/* let prenom=window.prompt("entrez votre prenom :")
let age= Number(window.prompt("entrez votre age :")) */


function ifMajeur(prenom,age){
    if(age>=17){
        console.log(`${prenom} peut conduire`)
    }else{
        console.log(`${prenom} ne peut pas conduire`)
    }

}

ifMajeur('Mathieu',22)
console.log("---------------------------------")
ifMajeur('Lea',15)
console.log("---------------------------------")
ifMajeur('Jean',17)