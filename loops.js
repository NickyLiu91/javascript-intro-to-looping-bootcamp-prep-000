function forLoop(array) {
  var newArray = array
  for (var i = 0; i < 25; i++) {
    if(i === 1) {
      newArray.push("I am a strange loop.")
    } else {
      newArray.push( "I am ${i} strange loops.")
    }
  }
  return newArray
}

function whileLoop(n) {
  while (n > 0) {
    console.log(n)
    n--
  }
  return 'done'
}

function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(array) {
  do {
    array.length--
  } while (array.length > 0 && maybeTrue())
  return array
}

