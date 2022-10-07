let str =`
010-1234-5678
thesecon@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
http://localhost:1234
동해물과 백두산이 마르고 닳도록
`

const regexp1 = new RegExp('the', 'gi')
const regexp = /the/gi
console.log(str.match(regexp))

const regexp2 = /fox/gi
console.log(regexp2.test(str))

const regexp3 = /HEROPY/gi
console.log(regexp3.test(str))
console.log(str.replace(regexp3,'AAA'))

// const regexp4 = /fox/gi
// str = str.replace(regexp4, 'AAA')
// console.log(str)

console.log(
  str.match(/\b\w{2,3}\b/g)
)

console.log(
  str.match(/[가-힣]{1,}/g)
)

console.log(
  str.match(/\bf\w{1,}\b/gi)
)

const h = `   the hello    world    !

`

console.log(
  h.replace(/\s/g, '')
)