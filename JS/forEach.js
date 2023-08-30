const animals = ["cat" , "dog" , "bird", "horse"]
animals.forEach( animal => console.log( animal ) )

animals.forEach((product, index, array) => array[index] = product + "111"  )
console.log(animals)

animals.forEach((product, index, array) => array[index] = `${product.toUpperCase()}`  )
console.log(animals)
