const capitalizeWord = (word) => word[0].toUpperCase() + word.substr(1)

const abbrevName = (name) =>
  name[0].toUpperCase() + '.' + name[name.indexOf(' ') + 1].toUpperCase()

const removeChar = (str) => str.substring(1, str.length - 1)

function positiveSum(arr) {
  return arr.filter((x) => x >= 0).reduce((a, c) => a + c, 0)
}

const fakeBin = (x) =>
  x
    .split('')
    .map((e) => (e < 5 ? 0 : 1))
    .join('')
