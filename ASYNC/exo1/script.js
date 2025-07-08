

async function fetchOffres() {
    const response = await fetch('./data.json')
    const result= await response.json()
    console.log(result)
    const list= document.createElement('div')
   
    result.forEach(obj => {
        const titre=document.createElement('h2')
        const descriptif=document.createElement('p')
        titre.innerHTML=obj.titre
        list.appendChild(titre)
        descriptif.innerHTML=obj.description
        list.appendChild(descriptif)
    });
    document.body.appendChild(list)
}

fetchOffres()


