const Box = x => ({
  map: f => Box(f(x)),
  fold: f => f(x),
  inspect: () => `Box(${x})`
})
const moneyToFloat = str =>(
  Box(str)
  .map(str => str.replace(/\$/g,''))
  .map(str => Number.parseFloat(str))
)

const percentToFloat = str =>(
  Box(str)
  .map(str => str.replace(/\%/g,''))
  .map(str => Number.parseFloat(str))
  .map(str => str * 0.01)
)

const applyDiscount = (price, discount) =>
  moneyToFloat(price)
  .fold(cost => percentToFloat(discount)
    .fold(discount => cost - cost * discount))

const result = applyDiscount('$52', '56%')
console.log(result);
