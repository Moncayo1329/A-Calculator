const calculator = document.querySelector('.calculator')
const keys = calculator.querySelector('.calculator__keys')

keys.addEventListener('click', e => {
  if (e.target.matches('button')) {
    // Do something
  }
}) 
const key = e.target
const action = key.dataset.action
if (!action) {
    console.log('number key!')
  }

  if (
    action === 'add' ||
    action === 'subtract' ||
    action === 'multiply' ||
    action === 'divide'
  ) {
    console.log('operator key!')
  }

  if (action === 'decimal') {
    console.log('decimal key!')
  }
  
  if (action === 'clear') {
    console.log('clear key!')
  }
  
  if (action === 'calculate') {
    console.log('equal key!')
  }

  const display = document.querySelector('.calculator__display')

keys.addEventListener('click', e => {
  if (e.target.matches('button')) {
    const key = e.target
    const action = key.dataset.action
    const keyContent = key.textContent
    const displayedNum = display.textContent
    // ...
  }
})

if (!action) {
    if (displayedNum === '0') {
      display.textContent = keyContent
    }
  }

  if (!action) {
    if (displayedNum === '0') {
      display.textContent = keyContent
    } else {
      display.textContent = displayedNum + keyContent
    }
  }

  if (action === 'decimal') {
    display.textContent = displayedNum + '.'
  }

  if (
    action === 'add' ||
    action === 'subtract' ||
    action === 'multiply' ||
    action === 'divide'
  ) {
    key.classList.add('is-depressed')
  }

  keys.addEventListener('click', e => {
    if (e.target.matches('button')) {
      const key = e.target
      // ...
  
      // Remove .is-depressed class from all keys
      Array.from(key.parentNode.children)
        .forEach(k => k.classList.remove('is-depressed'))
    }
  })

  const calculator = document.querySelector('.calculator')
// ...

keys.addEventListener('click', e => {
  if (e.target.matches('button')) {
    // ...

    if (
      action === 'add' ||
      action === 'subtract' ||
      action === 'multiply' ||
      action === 'divide'
    ) {
      key.classList.add('is-depressed')
      // Add custom attribute
      calculator.dataset.previousKeyType = 'operator'
    }
  }
})
const previousKeyType = calculator.dataset.previousKeyType

if (!action) {
  if (displayedNum === '0' || previousKeyType === 'operator') {
    display.textContent = keyContent
  } else {
    display.textContent = displayedNum + keyContent
  }
}if (action === 'calculate') {
    const secondValue = displayedNum
    // ...
  }
  if (
    action === 'add' ||
    action === 'subtract' ||
    action === 'multiply' ||
    action === 'divide'
  ) {
    // ...
    calculator.dataset.firstValue = displayedNum
    calculator.dataset.operator = action
  }
  if (action === 'calculate') {
    const firstValue = calculator.dataset.firstValue
    const operator = calculator.dataset.operator
    const secondValue = displayedNum
  
    display.textContent = calculate(firstValue, operator, secondValue)
  }
  const calculate = (n1, operator, n2) => {
    // Perform calculation and return calculated value
  }

  const calculate = (n1, operator, n2) => {
    let result = ''
  
    if (operator === 'add') {
      result = n1 + n2
    } else if (operator === 'subtract') {
      result = n1 - n2
    } else if (operator === 'multiply') {
      result = n1 * n2
    } else if (operator === 'divide') {
      result = n1 / n2
    }
  
    return result
  } 

  const calculate = (n1, operator, n2) => {
    let result = ''
  
    if (operator === 'add') {
      result = parseFloat(n1) + parseFloat(n2)
    } else if (operator === 'subtract') {
      result = parseFloat(n1) - parseFloat(n2)
    } else if (operator === 'multiply') {
      result = parseFloat(n1) * parseFloat(n2)
    } else if (operator === 'divide') {
      result = parseFloat(n1) / parseFloat(n2)
    }
  
    return result
  }

  // Example of how includes work.
const string = 'The hamburgers taste pretty good!'
const hasExclaimation = string.includes('!')
console.log(hasExclaimation) // true

// Do nothing if string has a dot
if (!displayedNum.includes('.')) {
    display.textContent = displayedNum + '.'
  }

  f (!action) {
    // ...
    calculator.dataset.previousKey = 'number'
  }
  
  if (action === 'decimal') {
    // ...
    calculator.dataset.previousKey = 'decimal'
  }
  
  if (action === 'clear') {
    // ...
    calculator.dataset.previousKeyType = 'clear'
  }
  
  if (action === 'calculate') {
   // ...
    calculator.dataset.previousKeyType = 'calculate'
  }

  if (action === 'decimal') {
    if (!displayedNum.includes('.')) {
      display.textContent = displayedNum + '.'
    } else if (previousKeyType === 'operator') {
      display.textContent = '0.'
    }
    
  calculator.dataset.previousKeyType = 'decimal'
  }

  if (
    action === 'add' ||
    action === 'subtract' ||
    action === 'multiply' ||
    action === 'divide'
  ) {
    const firstValue = calculator.dataset.firstValue
    const operator = calculator.dataset.operator
    const secondValue = displayedNum
    
  // Note: It's sufficient to check for firstValue and operator because secondValue always exists
    if (firstValue && operator) {
      display.textContent = calculate(firstValue, operator, secondValue)
    }
    
  key.classList.add('is-depressed')
    calculator.dataset.previousKeyType = 'operator'
    calculator.dataset.firstValue = displayedNum
    calculator.dataset.operator = action
  }

  if (
    firstValue &&
    operator &&
    previousKeyType !== 'operator'
  ) {
    display.textContent = calculate(firstValue, operator, secondValue)
  }
  const firstValue = calculator.dataset.firstValue
const operator = calculator.dataset.operator
const secondValue = displayedNum

if (
  firstValue &&
  operator &&
  previousKeyType !== 'operator'
) {
  const calcValue = calculate(firstValue, operator, secondValue)
  display.textContent = calcValue
  
// Update calculated value as firstValue
  calculator.dataset.firstValue = calcValue
} else {
  // If there are no calculations, set displayedNum as the firstValue
  calculator.dataset.firstValue = displayedNum
}

key.classList.add('is-depressed')
calculator.dataset.previousKeyType = 'operator'
calculator.dataset.operator = action

if (action === 'calculate') {
    const firstValue = calculator.dataset.firstValue
    const operator = calculator.dataset.operator
    const secondValue = displayedNum
    
  if (firstValue) {
      display.textContent = calculate(firstValue, operator, secondValue)
    }
    
  calculator.dataset.previousKeyType = 'calculate'
  } 

  if (action === 'calculate') {
    let firstValue = calculator.dataset.firstValue
    const operator = calculator.dataset.operator
    const secondValue = displayedNum
    
  if (firstValue) {
      if (previousKeyType === 'calculate') {
        firstValue = displayedNum
      }
      
  display.textContent = calculate(firstValue, operator, secondValue)
    }
    
  calculator.dataset.previousKeyType = 'calculate'
  } 

  if (action === 'calculate') {
    let firstValue = calculator.dataset.firstValue
    const operator = calculator.dataset.operator
    const secondValue = displayedNum
    
  if (firstValue) {
      if (previousKeyType === 'calculate') {
        firstValue = displayedNum
      }
      
  display.textContent = calculate(firstValue, operator, secondValue)
    }
    
  // Set modValue attribute
    calculator.dataset.modValue = secondValue
    calculator.dataset.previousKeyType = 'calculate'
  }

  if (firstValue) {
    if (previousKeyType === 'calculate') {
      firstValue = displayedNum
      secondValue = calculator.dataset.modValue
    }
    
  display.textContent = calculate(firstValue, operator, secondValue)
  } 

  if (!action) {
    if (
      displayedNum === '0' ||
      previousKeyType === 'operator' ||
      previousKeyType === 'calculate'
    ) {
      display.textContent = keyContent
    } else {
      display.textContent = displayedNum + keyContent
    }
    calculator.dataset.previousKeyType = 'number'
  }
  
  if (action === 'decimal') {
    if (!displayedNum.includes('.')) {
      display.textContent = displayedNum + '.'
    } else if (
      previousKeyType === 'operator' ||
      previousKeyType === 'calculate'
    ) {
      display.textContent = '0.'
    }
    
  calculator.dataset.previousKeyType = 'decimal'
  }

  if (
    action === 'add' ||
    action === 'subtract' ||
    action === 'multiply' ||
    action === 'divide'
  ) {
    // ...
    
  if (
      firstValue &&
      operator &&
      previousKeyType !== 'operator' &&
      previousKeyType !== 'calculate'
    ) {
      const calcValue = calculate(firstValue, operator, secondValue)
      display.textContent = calcValue
      calculator.dataset.firstValue = calcValue
    } else {
      calculator.dataset.firstValue = displayedNum
    }
    
  // ...
  }

  if (action !== 'clear') {
    const clearButton = calculator.querySelector('[data-action=clear]')
    clearButton.textContent = 'CE'
  }

  if (action === 'clear') {
    display.textContent = 0
    key.textContent = 'AC'
    calculator.dataset.previousKeyType = 'clear'
  } 

  if (action === 'clear') {
    if (key.textContent === 'AC') {
      calculator.dataset.firstValue = ''
      calculator.dataset.modValue = ''
      calculator.dataset.operator = ''
      calculator.dataset.previousKeyType = ''
    } else {
      key.textContent = 'AC'
    }
    
  display.textContent = 0
    calculator.dataset.previousKeyType = 'clear'
  }

  const calculate = (n1, operator, n2) => {
    let result = ''
    if (operator === 'add') {
      result = parseFloat(n1) + parseFloat(n2)
    } else if (operator === 'subtract') {
      result = parseFloat(n1) - parseFloat(n2)
    } else if (operator === 'multiply') {
      result = parseFloat(n1) * parseFloat(n2)
    } else if (operator === 'divide') {
      result = parseFloat(n1) / parseFloat(n2)
    }
    
    return result
  }

  const calculate = (n1, operator, n2) => {
    if (operator === 'add') {
      return firstNum + parseFloat(n2)
    } else if (operator === 'subtract') {
      return parseFloat(n1) - parseFloat(n2)
    } else if (operator === 'multiply') {
      return parseFloat(n1) * parseFloat(n2)
    } else if (operator === 'divide') {
      return parseFloat(n1) / parseFloat(n2)
    }
  }

  const calculate = (n1, operator, n2) => {
    if (operator === 'add') {
      return firstNum + parseFloat(n2)
    }
    
    if (operator === 'subtract') {
      return parseFloat(n1) - parseFloat(n2)
    }
    
    if (operator === 'multiply') {
      return parseFloat(n1) * parseFloat(n2)
    }
    
    if (operator === 'divide') {
      return parseFloat(n1) / parseFloat(n2)
    }
  }

  const calculate = (n1, operator, n2) => {
    if (operator === 'add') return parseFloat(n1) + parseFloat(n2)
    if (operator === 'subtract') return parseFloat(n1) - parseFloat(n2)
    if (operator === 'multiply') return parseFloat(n1) * parseFloat(n2)
    if (operator === 'divide') return parseFloat(n1) / parseFloat(n2)
  }

  const calculate = (n1, operator, n2) => {
    const firstNum = parseFloat(n1)
    const secondNum = parseFloat(n2)
    if (operator === 'add') return firstNum + secondNum
    if (operator === 'subtract') return firstNum - secondNum
    if (operator === 'multiply') return firstNum * secondNum
    if (operator === 'divide') return firstNum / secondNum
  }

  keys.addEventListener('click', e => {
    if (e.target.matches('button')) {
    
      if (!action) { /* ... */ }
      
      if (action === 'add' ||
        action === 'subtract' ||
        action === 'multiply' ||
        action === 'divide') {
        /* ... */
      }
      
      if (action === 'clear') { /* ... */ }
      if (action !== 'clear') { /* ... */ }
      if (action === 'calculate') { /* ... */ }
    }
  }) 
  // Don't do this!
const handleNumberKeys = (/* ... */) => {/* ... */}
const handleOperatorKeys = (/* ... */) => {/* ... */}
const handleDecimalKey = (/* ... */) => {/* ... */}
const handleClearKey = (/* ... */) => {/* ... */}
const handleCalculateKey = (/* ... */) => {/* ... */}
keys.addEventListener('click', e => {
    // Pure function
    const resultString = createResultString(/* ... */)
    
    // Impure stuff
    display.textContent = resultString
    updateCalculatorState(/* ... */)
  })
  
