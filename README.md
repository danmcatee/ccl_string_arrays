## String methods

### Character selection

You can select a single character in a string by using the bracket notation. To select the last character provide -1

```js
let content = 'Today we talk about string methods.'
console.log(content[1]) // o
console.log(content[-1]) // .
```

### includes

The includes method takes a string and optionally a index to start at. It return a boolean, depending on if the passed in string was found in the string the method was called on

```js
//string.includes(searchString, startIndex)

let content = 'Today we talk about string methods.'
let search1 = 'string'
let search2 = 'number'

console.log(content.includes(search1)) // true
console.log(content.includes(search2)) // false
```

### indexOf

The indexOf method takes a string and optionally a index to start at. It return a number, the index of where the searchString was found or -1 if the searchString was not found

```js
//string.indexOf(searchString, startIndex)

let content = 'Today we talk about string methods.'
let search1 = 'string'
let search2 = 'number'

console.log(content.indexOf(search1)) // 20
console.log(content.indexOf(search2)) // -1

// find the second occurence

let searchA = 'a'
console.log(content.indexOf(searchA, content.indexOf(searchA) + 1)) // 10

// find the last occurence

console.log(content.lastIndexOf(searchA)) // 14
```

### substring

substring gives you a specified part of a string. The startIndex is inclusive, the endIndex exclusive. The substr method works similar, but instead of providing the endIndex, you specify how many characters the substring should include. If you don't provide a second argument substring and substr will output the rest of the string starting from the given startIndex

```js
//string.substring(startIndex, endIndex)
//string.substr(startIndex, charactersToGo)

let content = 'Today we talk about string methods.'

console.log(content.substring(6, 13)) // we talk
console.log(content.substr(6, 7)) // we talk
```

### String modification

```js
let content = 'Today we talk about string methods.'

console.log(content.toUpperCase())
console.log(content.toLowerCase())

console.log(content.indexOf('string')) // -1
console.log(content.toLowerCase().indexOf('string')) // 20

let messedUp = '\n\n\nToday we talk about string methods.\n\n'
console.log(messedUp.trim())

let waiting = 'tick tock '
console.log(waiting.repeat(4000))
```

### split

split takes in a string (usually a character) to split on, it will return an array with the seperated substrings

```js
// //string.split(chracterToSplitOn)
let content = 'Today we talk about string methods.'

console.log(content.split(' '))
```

### String katas

[Convert a string to an array](https://www.codewars.com/kata/57e76bc428d6fbc2d500036d)
[Capitalization and Mutability](https://www.codewars.com/kata/595970246c9b8fa0a8000086/javascript)
[Abbreviate a Two Word Name](https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3)
[Remove First and Last Character](https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0)

## Array methods

### Dataset

```js
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
```

### forEach

forEach executes a provided function once for each array element.

```js
array.forEach((element, index, array) => /* do something */)

// log out all company names
```

### filter

filter creates a new array with all elements that pass the test implemented by the provided function.

```js
array.filter((element, index, array) => /* do something */)

// Filter out all ages that are under drinking age

// Get all retail companies

// Get all companies that started in the 80s

// Get all companies that lasted 10 years or more
```

### map

map creates a new array populated with the results of calling a provided function on every element in the calling array.

```js
array.map((element, index, array) => /* do something */)

// Create array of company names

// Get Square

// Chain maps
```

### reduce

reduce executes a reducer function (that you provide) on each element of the array, resulting in a single output value.

```js
array.reduce((accumulator, currentValue, index, array) => /* do something */, initialValue)

// Sum up all ages

// Get total years for all companies

// Combine Methods
```
