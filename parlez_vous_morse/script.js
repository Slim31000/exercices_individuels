const latinToMorse = {
    'A': '.-',
    'B': '-...',
    'C': '-.-.',
    'D': '-..',
    'E': '.',
    'F': '..-.',
    'G': '--.',
    'H': '....',
    'I': '..',
    'J': '.---',
    'K': '-.-',
    'L': '.-..',
    'M': '--',
    'N': '-.',
    'O': '---',
    'P': '.--.',
    'Q': '--.-',
    'R': '.-.',
    'S': '...',
    'T': '-',
    'U': '..-',
    'V': '...-',
    'W': '.--',
    'X': '-..-',
    'Y': '-.--',
    'Z': '--..'
}


const morseToLatin = {
    '-': "T",
    '--': "M",
    '---': "O",
    '--.': "G",
    '--.-': "Q",
    '--..': "Z",
    '-.': "N",
    '-.-': "K",
    '-.--': "Y",
    '-.-.': "C",
    '-..': "D",
    '-..-': "X",
    '-...': "B",
    '.': "E",
    '.-': "A",
    '.--': "W",
    '.---': "J",
    '.--.': "P",
    '.-.': "R",
    '.-..': "L",
    '..': "I",
    '..-': "U",
    '..-.': "F",
    '...': "S",
    '...-': "V",
    '....': "H"
}




function getLatinCharacterList() {
    const input = document.getElementById("input")
    const tableau = document.createElement('p')
    let valuer = input.value
    tableau.innerText = valuer.split("")
    document.body.appendChild(tableau)
    input.value = ""
    return valuer.split("")
}
getLatinCharacterList()
function translateLatinCharacter(letter) {
    
    letter = letter.toUpperCase()

    let translate= latinToMorse[letter]
    return translate
    
}
//translateLatinCharacter('a')

function encode() {
    let encode=[]
    let variables = getLatinCharacterList()
    console.log(variables)
    for (let variable of variables) {
        encode.push(translateLatinCharacter(variable))
    }
    for(let i=0;i<encode.length;i++){
        if(encode[i]===undefined){
            encode[i]="/"
        }
    }
    const resultat=document.createElement('p')
    resultat.innerText=encode.join(" ")
    document.body.appendChild(resultat)
}

function translateMorseCharacter() {
    const morseCharacter = document.getElementById("inputmorse")
    const tableau = document.createElement('p')
    let valuer = morseCharacter.value
    tableau.innerText = valuer.split(" ")
    console.log(valuer.split(" "))
    document.body.appendChild(tableau)
    morseCharacter.value = ""
    return valuer.split(" ")
}

function getMorseCharacterList(caractere) {
    let translate = morseToLatin[caractere]

    return translate
}
getMorseCharacterList('/')
function decode() {
    let decode = []

    let caracteres = translateMorseCharacter()
    for (let caractere of caracteres) {
        decode.push(getMorseCharacterList(caractere))

    }
    console.log(decode)
    for (let i = 0; i < decode.length; i++) {
        if (decode[i] === undefined) {
            decode[i] = " "
        }
    }
    const resultat = document.createElement('p')
    resultat.innerText = decode.join("")
    document.body.appendChild(resultat)
}

