async function post(route) {
    const response = await fetch(`https://dummyjson.com/${route}`)
    const data= await response.json()
    return data[route]
}


async function display(){
    const produit = await post('posts')
    console.log(produit)
    
}
display()
