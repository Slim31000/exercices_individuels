const obj = {
  "candidate": "Le Filip",
  "age": 29,
  "city": "Paris",
  "region": "Île-de-France"
}

const data = [
	{
		"candidate": "Afrodite Amour",
		"age": 27,
		"city": "Lyon",
		"region": "Auvergne-Rhône-Alpes"
	},
	{
		"candidate": "Edeha Noire",
		"age": 34,
		"city": "Lyon",
		"region": "Auvergne-Rhône-Alpes"
	},
	{
		"candidate": "Le Filip",
		"age": 29,
		"city": "Paris",
		"region": "Île-de-France"
	}
]

console.log(obj.candidate)
console.log("----------------------------")

data.forEach( obj=> {
    console.log(obj.candidate)
});