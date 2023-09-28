
// max:                 9
// min:                                1
let numbers = [3, 7, 4, 9, 8, 2, 6, 1]

function findMax(array) {
  let max = -Infinity

  for (let i = 0; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i]
    }
  }

  return max
}

function findMin(array) {
  let min = Infinity

  for (let i = 0; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i]
    }
  }

  return min
}

function findMaxIndex(array) {
  let max = -Infinity
  let maxIndex = 0

  for (let i = 0; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i]
      maxIndex = i
    }
  }

  return { max, maxIndex }
}

function findMinIndex(array) {
  let min = Infinity
  let minIndex = 0

  for (let i = 0; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i]
      minIndex = i
    }
  }

  return { min, minIndex }
}

// let maxValue = findMax(numbers)
// console.log('el maximo valor del arreglo es: ' + maxValue)

// let minValue = findMin(numbers)
// console.log('el maximo valor del arreglo es: ' + minValue)

// let { max, maxIndex } = findMaxIndex(numbers)
// console.log('maximo: ' + max + ', indice: ' + maxIndex)

// let { min, minIndex } = findMinIndex(numbers)
// console.log('minimo: ' + min + ', indice: ' + minIndex)

let persons = [
  { name: 'David', age: 35 },
  { name: 'Benito', age: 25 },
  { name: 'Erika', age: 40 },
  { name: 'Ana', age: 20 },
  { name: 'Carola', age: 30 },
]

let maxAge = -Infinity
let maxIndex = 0

for (let i = 0; i < persons.length; i++) {
  if (persons[i].age > maxAge) {
    maxAge = persons[i].age
    maxIndex = i
  }
}

console.log('mayor edad:')
console.log(persons[maxIndex])
