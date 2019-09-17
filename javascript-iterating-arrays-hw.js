const drSeuss = ["Cat in the Hat", "Sam I am", "Grinch","Thing One", "Thing Two", "Cindy Loo Who", "JoJo McDodd"];

//console.log() all of the elements in the array.
for (let book of drSeuss) {
  console.log(book)
}

//console.log() the odd-numbered index items in the array.
for (let i = 1; i < drSeuss.length; i+=2) {
  console.log(drSeuss[i])
}

//console.log() the index number and the item of every o dd-numbered index item (on separate lines).
// If you meant the index and the item on separate lines
for (let i = 1; i < drSeuss.length; i+=2) {
  console.log(i)
  console.log(drSeuss[i])
}

// If you meant the index item combination on separate lines
for (let i = 1; i < drSeuss.length; i+=2) {
  console.log(i, drSeuss[i])
}

const looneyTunesChars = ["Bugs Bunny", "Daffy Duck", "Tweety", "Sylvester", "Elmer Fudd", "Porky Pig", "Taz"];

// console.log() the even-numbered items in the array using a conditional statement.
for (let i = 0; i < looneyTunesChars.length; i++) {
  if (i % 2 === 0) {
    console.log(looneyTunesChars[i])
  }
}

// console.log() the even-numbered items in the array and the item with the index of 3 using a conditional statement.
for (let i = 0; i < looneyTunesChars.length; i++) {
  if (i % 2 === 0 || i === 3) {
    console.log(looneyTunesChars[i])
  }
}

// console.log() the odd-numbered index items in the array using a conditional statement.
for (let i = 0; i < looneyTunesChars.length; i++) {
  if (i % 2 !== 0) {
    console.log(looneyTunesChars[i])
  }
}