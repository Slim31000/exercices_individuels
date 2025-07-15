

async function fetchOffres() {
    try {
        const loader = document.getElementById('loader');
        loader.style.display='flex'
        const response = await fetch('https://api.allorigins.win/raw?url=https://codepassport.dev/api/offers');
        const result = await response.json()
        console.log(result)
        console.log(result[0].description)
        for (let i = 0; i < result.length; i++) {
            const titre = document.createElement('h2')
            titre.textContent = result[i].titre
            const descriptif = document.createElement('p')
            descriptif.textContent = result[i].description
            loader.style.display='none'
            document.body.appendChild(titre)
            document.body.appendChild(descriptif)

        }
    } catch (error) {
        console.log('api non trouve', error)
    }


}

fetchOffres()


