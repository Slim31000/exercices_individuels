const candidates = ['Le Filip','Ruby On The Nail','Leona Winter','Lula Strega','Misty Phoenix',
  'Perseo','Norma Bell','Edeha Noire','Magnetica','Afrodite Amour'];
  console.log(candidates[0])
  console.log(candidates[7])
  for(let candidate of candidates){
    console.log(candidate)
  }
  const list=document.getElementById('ul')
  for(let candidate of candidates){
   const li= document.createElement("li")
   li.textContent=candidate
   list.appendChild(li)
  }
  
