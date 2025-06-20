function askNumber(){
    const givenNumber=document.getElementById("inputNumberGuessed")
    let value= Number(givenNumber.value)
    if(isNaN(value)){
        alert("tu dois rentrez un numero")
        
    }
    if(value<0 || value>50){
        alert("tu dois rentrez un chiffre entre 0 et 50")  
        document.getElementById("inputNumberGuessed").value = ""
        
    }
    return value
}
function numberGuess(){
    const numberToGuess=document.getElementById("inputNumberToGuess")
    let value2 = Number(numberToGuess.value)
    if(isNaN(value2)){
        alert("tu dois rentrez un numero")
        document.getElementById("inputNumberToGuess").value=""
        
    }
    if(value2<0 || value2>50){
        alert("tu dois rentrez un chiffre entre 0 et 50")  
        
    }
    return value2

}

function didIWin(numberToGuess,givenNumber){
    if(givenNumber>numberToGuess){
        return false
    } else if (givenNumber<numberToGuess){
        return false
    } return true
}

/* function gameplay(){
       let a
    do{
        a =askNumber()
        if(didIWin(a)===false){
            alert(didIWin(a))
        }
    }while(didIWin(a)!==true)
    
    
}
gameplay() */

function gameplay(){
       let a
       let b
       b=numberGuess()
       

        
    do{
        a =askNumber()
        

        if(didIWin(a,b)==false){
            alert("essaye un autre numero")
        
            document.getElementById("inputNumberGuessed").value = ""
            break
            
        }else{
            alert("tu as gagne")}
        
            document.getElementById("inputNumberGuessed").value = ""
            document.getElementById("inputNumberToGuess").value = ""
        


        
    }while(didIWin(a,b) !==true)
    
    
}
