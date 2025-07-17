const key = 'Bearer 92hJ4YO3v0EX2jPXAlvg'

fetch('https://the-one-api.dev/v2/movie', {
    headers: { Authorization: key }
})
    .then(response => response.json())
    .then(data => {
        const film = document.getElementById('coutfilms')
        for (let i = 0; i < data.docs.length; i++) {

            const list = document.createElement('li')
            list.innerHTML = ` <strong>${data.docs[i].name}</strong> a coute ${data.docs[i].budgetInMillions} millions de Dollars`
            film.appendChild(list)


        }
    })


fetch('https://the-one-api.dev/v2/movie', {
    headers: { Authorization: key }
})
    .then(response => response.json())
    .then(data => {
        const rentabilite = document.getElementById('rentabilite')
        let rentMovies = []
        for (let i = 0; i < data.docs.length; i++) {

            let rent = {
                name: data.docs[i].name,
                value: data.docs[i].boxOfficeRevenueInMillions - data.docs[i].budgetInMillions
            }
            rentMovies.push(rent)
        }

        const film = rentMovies.sort((a, b) => b.value - a.value);
        console.log(film)
        for (let i = 0; i < film.length; i++) {
            const filmlist = document.createElement('li')
            filmlist.innerHTML = ` <strong>${film[i].name}</strong> avec une rentabilite de ${film[i].value} Millions dollars`
            rentabilite.appendChild(filmlist)
        }
    })