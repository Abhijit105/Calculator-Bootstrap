"use strict"

let previousValue = 0
let currentValue = 0
let result
let switchedOn = false
let symbolPressed = false
let previousValueStored = false
let resultDisplayed = false
let previousOperation = ""
const btns = document.querySelectorAll(".btn")
const input = document.querySelector("input")

const evaluate = (currentOperation) => {
  if (symbolPressed && previousValueStored) {
    currentValue = Number(input.value)
    if (previousOperation === "+") {
      result = previousValue + currentValue
    } else if (previousOperation === "-") {
      result = previousValue - currentValue
    } else if (previousOperation === "*") {
      result = previousValue * currentValue
    } else if (previousOperation === "/") {
      result = previousValue / currentValue
    } else if (previousOperation === "=") {
      result = result
    }
    previousValue = result
    input.value = result
    resultDisplayed = true
  } else if (!symbolPressed) {
    if (!previousValueStored) {
      previousValue = Number(input.value)
    }
    previousValueStored = true
    console.log(previousValue)
    resultDisplayed = true
  }
}

window.onload = () => {
  input.value = ""
}

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    console.log(e.target.value)
    const pressed = e.target.value
    if (isNaN(pressed)) {
      switch (pressed) {
        case "O":
          input.value = "0"
          switchedOn = true
          resultDisplayed = true
          break
        case "C":
          if (switchedOn) {
            input.value = "0"
            previousValue = 0
            currentValue = 0
            resultDisplayed = true
          }
          break
        case "+":
        case "-":
        case "*":
        case "/":
        case "=":
          if (switchedOn) {
            evaluate(pressed)
            symbolPressed = true
            previousOperation = pressed
          }
          break
      }
    } else {
      if (switchedOn) {
        if (resultDisplayed) {
          input.value = pressed
          resultDisplayed = false
          !symbolPressed
        } else {
          input.value += pressed
        }
      }
    }
  })
})

/***********************************************
 * More buttons to add
 * 1. (.) dot
 */
