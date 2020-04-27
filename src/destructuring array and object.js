// Destructuring and spreading

//First start by destructuring arrays

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let [num1, num2, num3, ...rest] = nums

console.log(num1)
console.log(num2)
console.log(num3)
console.log(rest)

const countries = [
  'Germany',
  'France',
  'Belgium',
  'Finland',
  'Sweden',
  'Norway',
  'Denmark',
  'Iceland'
]
let [ger, fra, , ...nordic] = countries

console.log(ger)
console.log(fra)
console.log(nordic)

const fullStack = [
  ['HTML', 'CSS', 'JS', 'React'],
  ['Node', 'Express', 'MongoDB']
]

let [frontEnd, backEnd] = fullStack
console.log(frontEnd)

// Destructuring objects

const rectangle = {
  width: 20,
  height: 10
}

let { width, height, perimeter = 200 } = rectangle
console.log(width, height, perimeter)

// let { width: w, height: h, perimeter = 200 } = rectangle
// console.log('w:', w, 'h:', h, perimeter)

console.log(rectangle)

// fetch to fetch data

const url = 'https://restcountries.eu/rest/v2/all'
fetch(url)
  .then(response => response.json())
  .then(countries => {
    for (const country of countries) {
      let {
        name,
        capital,
        population,
        region,
        languages,
        topLevelDomain: domain
      } = country
      console.log(name, capital, population, region, languages, domain[0])
    }
  })
