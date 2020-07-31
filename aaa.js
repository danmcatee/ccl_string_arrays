const capitalizeWord = (word) => word[0].toUpperCase() + word.substr(1)

const abbrevName = (name) =>
  name[0].toUpperCase() + '.' + name[name.indexOf(' ') + 1].toUpperCase()

const removeChar = (str) => str.substring(1, str.length - 1)
