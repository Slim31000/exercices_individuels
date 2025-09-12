
/* function afficherEtoiles(n){
    console.log('*'.repeat(n))
}

afficherEtoiles(2) */



function afficherEtoiles(hauter, largeur) {
    for (let i = 0; i < hauter; i++) {
        console.log('*'.repeat(largeur))
    }

}

afficherEtoiles(5,5)


function afficherTrangleDroite(n) {
  const lignes = [];
  for (let i = 0; i < n; i++) {
    lignes.push('*'.repeat(i ) + '\\');
  }
  return lignes;
}

function afficherTriangleGauche(n) {
  const lignes = [];
  for (let i = 0; i < n; i++) {
    lignes.push(' '.repeat(n - i- 1) + '/' + '*'.repeat(i ));
  }
  return lignes;
}

function affichageTraingle(n) {
  const gauche = afficherTriangleGauche(n);
  const droite = afficherTrangleDroite(n);


  for (let i = 0; i < n; i++) {
    console.log(gauche[i] + '|' + droite[i]);
  }
}

//affichageTraingle(5);

function afficherPointeSapin(hauteur) {
    console.log(' '.repeat(hauteur ) +'+')
    affichageTraingle(hauteur)

}

afficherPointeSapin(4)


function affichageEtage(hauteur, pointe_offset) {
    const total = hauteur + pointe_offset
    let gauche = afficherTriangleGauche(total)
    let droite = afficherTrangleDroite(total)
    for (let i = pointe_offset; i < total; i++) {
        console.log(gauche[i] + '|' + droite[i])
    }
}

console.log('offset')
affichageEtage(3, 0) // les 3 premières lignes
affichageEtage(3, 1) // affiche à partir de la deuxième ligne, et continue sur 3 lignes
affichageEtage(3, 2) // affiche à partie de la troisième lige, et continue sur 3 lignes

function afficherEtage(hauteur, pointe_offset, espacement) {


    const total = hauteur + pointe_offset
    let gauche = afficherTriangleGauche(total)
    let droite = afficherTrangleDroite(total)
    for (let i = pointe_offset; i < total; i++) {
        console.log(' '.repeat(espacement) + gauche[i] + '|' + droite[i])
    }
}
console.log('-----------------')
afficherEtage(3, 0, 3)
afficherEtage(3, 1, 2)
afficherEtage(3, 2, 1)
afficherEtage(3, 3, 0)

function afficherSapin(etages, hauteur_etage) {
    console.log(' '.repeat((hauteur_etage+etages) )+'+')
    for (let pointe_offset = 0; pointe_offset < etages; pointe_offset++) {
        const espacement = etages  - pointe_offset
        afficherEtage(hauteur_etage, pointe_offset, espacement)
    }
    for(let i =0;i<etages;i++){
        console.log(' '.repeat((hauteur_etage+(Math.floor(etages/2)))+1) + '#'.repeat(((hauteur_etage+etages))/2))
    }
    
    

}

console.log('---------------------')

afficherSapin(3, 3)


