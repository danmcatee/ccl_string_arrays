let content = 'Today we talk about String methods.'
let search1 = 'string'
let search2 = 'number'
let searchA = 'a'

console.log(content.includes(search1))
console.log(content.includes(search2))

console.log(content.indexOf(search1))
console.log(content.indexOf(search2))

console.log(content.indexOf(searchA, content.indexOf(searchA) + 1))
console.log(content.lastIndexOf(searchA))

console.log(content.substring(6, 13))
console.log(content.substr(6, 7))

console.log(content.toUpperCase())
console.log(content.toLowerCase())

console.log(content.indexOf('string'))

let messedUp = '\n\n\nToday we talk about string methods.\n'
console.log(messedUp)
console.log(messedUp.trim())

let waiting = 'tick tock '
console.log(waiting.repeat(4000))

console.log(content.split(' '))
