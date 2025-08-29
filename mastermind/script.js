import promptSync from "prompt-sync";
const prompt = promptSync();


let colorOfGame=["blue","red","yellow","green","purple","orange","pink","brown"]

function genererSecret() {
  let combinaison = [];
  for (let i = 0; i < 4; i++) {
    const index = Math.floor(Math.random() * colorOfGame.length)
    combinaison.push(colorOfGame[index])
  }
  return combinaison;
}

let color = genererSecret()

function proposition(propositionColor){
    if(!Array.isArray(propositionColor)) return false
    if(propositionColor.length!==4)return false
    const lower=propositionColor.map(c=>String(c).toLowerCase().trim())
    for (const c of lower){
        if(!colorOfGame.includes(c)) return false
    }
    
    
    return true
}



function siBonneCombinaison(propositionColor,bonnecombaison=color){
    if(!Array.isArray(propositionColor)) return false
    if(propositionColor.length!==bonnecombaison.length)return false
    let p =propositionColor.map(c=>String(c).toLowerCase().trim())
    let s= bonnecombaison.map(c=>String(c).toLowerCase().trim())
    if (p[0]===s[0] && p[1]===s[1] && p[2]===s[2] && p[3]===s[3])
        return true
    else return false
}

function jouerPartie(propositionColor,bonnecombaison=color){
    let n=12
    while(n>0){
        const saisie = prompt("Entre 4 couleurs séparées par un espace: "); 
        propositionColor = saisie.split(" ").map(c => c.trim().toLowerCase());
        if(!proposition(propositionColor)){
            console.log('proposition invalide')
            continue
        }
        if(siBonneCombinaison(propositionColor,bonnecombaison)){
            return ('tu as gagne')
            
        }
        else{
            console.log('rate')
            n--
        }
    }

    return ('tu as perdu')

}

jouerPartie()