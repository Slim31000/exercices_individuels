let number= Number(window.prompt("entrez un numero"));

if(isNaN(number) || number<0 || number>10){
    window.alert("tu dois entrez un numero valide entre 0 et 10")
}
else{
    for(let i=number;i>=0;i--){
        window.alert(`le numero sous le nombre ${number} sont: ${i}`)
    }
}