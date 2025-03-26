// Copyright (c) 2025 Angelo Garcia All rights reserved
//
// Created by: Angelo Garcia
<<<<<<< HEAD
// Created on: march 2025
// This file contains the JS functions for index.html

function enterClicked () {
  // this function gets user's first name and age and displays it back to user

  // get first name from text field
  let firstName = document.getElementById("first-name").value
	// get age from text field and cast it to integer
  let userAge = parseInt(document.getElementById("age-entered").value)

  // display name and age back to user
  document.getElementById('user-info').innerHTML = "Your first name is " + firstName + " and you are " + userAge + " years old."
}
=======
// Created on: Mar 2025
// This file contains the JS functions for index.html

function doMathClicked () {
  // this function does basic math
  document.getElementById('multiply-math').innerHTML = '5 x 3 = ' + '(5 x 3)
  document.getElementById('subtract-math').innerHTML = '7 - 3 =  ' + (7 - 3)
  document.getElementById('multiply-math').innerHTML = '3 + 4 * 2 = ' + (3 + 4 * 2)
  document.getElementById('divide-math').innerHTML = '(4 / 2) + 3 = ' + ((4 / 2) + 3)
  document.getElementById('exponent-math').innerHTML = '5 + 2 ** 3 = ' + (5 + 2 ** 3)
	document.getElementById('square-root-math').innerHTML = '√(81) = ' + Math.sqrt(81)
}

     
>>>>>>> c3690c35e34d0f7f07ec5d443ca57d4cd9a82dc7
