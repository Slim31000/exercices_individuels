

async function fetchOffres() {
    const response = await fetch('https://api.allorigins.win/raw?url=https://codepassport.dev/api/offers');
    const result= await response.json()
    console.log(result)
    console.log(result[0].description)
   for(let i=0; i<result.length;i++){
    const titre= document.createElement('h2')
    titre.innerHTML = `<h2>${result[i].titre}</h2>`
    const descriptif=document.createElement('p')
    descriptif.innerHTML = `<p>${result[i].description}</p>`
    document.body.appendChild(titre)
    document.body.appendChild(descriptif)
   }
    
    
}

fetchOffres()


