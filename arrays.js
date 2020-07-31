const companies = [
  { name: 'Company One', category: 'Finance', start: 1981, end: 2004 },
  { name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
  { name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
  { name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
  { name: 'Company Five', category: 'Technology', start: 2009, end: 2014 },
  { name: 'Company Six', category: 'Finance', start: 1987, end: 2010 },
  { name: 'Company Seven', category: 'Auto', start: 1986, end: 1996 },
  { name: 'Company Eight', category: 'Technology', start: 2011, end: 2016 },
  { name: 'Company Nine', category: 'Retail', start: 1981, end: 1989 },
]

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32]

// forEach

for (let i = 0; i < companies.length; i++) {
  console.log(companies[i].name)
}

companies.forEach(function (company, i, companies) {
  console.log(company.name)
})

companies.forEach((company) => console.log(company.name))

// filter

// Filter out all ages that are under drinking age

let canDrink = []
for (let i = 0; i < ages.length; i++) {
  if (ages[i] >= 18) {
    canDrink.push(ages[i])
  }
}

const canDrink = ages.filter(function (age) {
  if (age >= 18) {
    return true
  }
})

const canDrink = ages.filter((age) => age >= 18)

console.log(canDrink)

// Get all retail companies

const retailCompanies = companies.filter(
  (company) => company.category === 'Retail'
)

console.log(retailCompanies)

// Get all companies that started in the 80s

const eightiesCompanies = companies.filter(
  (company) => company.start >= 1980 && company.start < 1990
)

console.log(eightiesCompanies)

// Get all companies that lasted 10 years or more

const lastedTenYears = companies.filter(
  (company) => company.end - company.start >= 10
)

console.log(lastedTenYears)

// map

// Create array of company names

const companyNames = companies.map((company) => company.name)

console.log(companyNames)

const companyInformation = companies.map(
  (company) => `${company.name} [${company.start} - ${company.end}]`
)

console.log(companyInformation)

// Get Square

const agesSquare = ages.map((age) => Math.pow(age, 2))

// Chain maps
const agesTimesFour = ages.map((age) => age * 2).map((age) => age * 2)

console.log(agesTimesFour)

// reduce

// Sum up all ages

let ageSum = 0
for (let i = 0; i < ages.length; i++) {
  ageSum += ages[i]
}

const ageSum = ages.reduce((total, age) => total + age, 0)

console.log(ageSum)

// Get total years for all companies

const totalYears = companies.reduce(
  (total, company) => total + (company.end - company.start),
  0
)

console.log(totalYears)

// Combine Methods

const combined = ages
  .map((age) => age * 2)
  .filter((age) => age >= 40)
  .reduce((total, age) => total + age, 0)

console.log(combined)
