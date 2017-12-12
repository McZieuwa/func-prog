const Box = x => ({
  map: f => Box(f(x)),
  fold: f => f(x),
  inspect: () => `Box(${x})`
})

const nextCharFromNumberString = str =>(
  Box(str)
  .map(s => s.trim())
  .map(r => Number.parseInt(r))
  .map(x => x + 1)
  .map(x => String.fromCharCode(x))
)

const result = nextCharFromNumberString(' 64 ')
console.log(result)
