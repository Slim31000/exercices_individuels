const fs = require('fs');
const filepath = 'exercices_manipDonnees/exo3/data.json';

const content = fs.readFileSync(filepath, {encoding: 'utf8', flag: 'r'});
const data = JSON.parse(content);

console.log(typeof(data),"\n")
console.log(data[0],"\n")
console.log(data[0].ranking,"\n")

data.forEach(obj => {
    if(obj.ranking===4){
        console.log(obj,"\n")
    }
    
});
let agetotal=0
let ageMoyen
data.forEach(obj => {
    agetotal += obj.age
});

ageMoyen=agetotal/data.length
console.log(ageMoyen)