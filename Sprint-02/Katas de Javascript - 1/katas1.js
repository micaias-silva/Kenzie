function oneThroughTwenty() {
  let throughTwenty = []
  for (let i = 1; i <= 20; i++) {
    throughTwenty.push(i)
  }
  return throughTwenty
}

oneThroughTwenty()

function evensToTwenty() {
  let evens = []
  for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
      evens.push(i)
    }
  }
  return evens
}

evensToTwenty()

function oddsToTwenty() {
    let odds = []
    for (let i = 1; i <= 20; i++) {
      if (i % 2 !== 0) {
        odds.push(i)
      }
    }
    return odds
}

oddsToTwenty()

function multiplesOfFive() {
  let multiples = []
  let i = 5
  while (i <= 100) {
    if (i % 5 === 0) {
      multiples.push(i)
    }
    i++
  }
  return multiples
}

multiplesOfFive()

function squareNumbers() {
  let squares = []
  let i = 1
  while (i ** 2 <= 100) {
    squares.push(i ** 2)
    i++
  }
  
  return squares
}

squareNumbers()

function countingBackwards() {
  let backCount = []
  let i = 20
  while (i >= 1) {
    backCount.push(i)
    i--
  }
  return backCount
}

countingBackwards()

function evenNumbersBackwards() {
  let backEven = []
  let i = 20
  do {
    if (i % 2 === 0) {
      backEven.push(i)
    }
    i--
  } while (i >= 1)
  return backEven
}

evenNumbersBackwards()

function oddNumbersBackwards() {
  let backOdds = []
  let i = 20
  do {
    if (i % 2 !== 0) {
      backOdds.push(i)
    }
    i--
  } while (i >= 1)
  return backOdds
}

oddNumbersBackwards()

function multiplesOfFiveBackwards() {
    let backMultiples = []
    let i = 100
    do {
      if (i % 5 === 0) {
        backMultiples.push(i)
      }
      i--
    } while (i >= 5)
    return backMultiples
}

multiplesOfFiveBackwards()

function squareNumbersBackwards() {
  let backSquares = []
  for (let i = 10; i >= 1; i--) {
    backSquares.push(i ** 2)    
  }
  return backSquares
}

squareNumbersBackwards()
