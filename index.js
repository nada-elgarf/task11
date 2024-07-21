const array = [ 8, '55', [ 2, 'Hello World', {a: 2,b: 5}, false], {arr: [true , 1 , NaN , new Array(2, 33)],test: null,obj: {d: 'moha',last: [2, false, undefined]}}]

const [,,, { arr: [,,, [, value33]], obj: { d } }] = array

console.log(value33)
console.log(d)

// ===================================================

const arr = [2, 4, [22, 'test'], false, null, {a: 2}, [22, 'test'] , 'null']

const areDuplicates = (array) => {
  const elements = array.filter((item, index) => array.indexOf(item) === index)
  return elements.length !== array.length
}

console.log(areDuplicates(arr))
