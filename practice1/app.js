// let const var
// % modulus returns remainder
// && || !

function fizzBuzz(n) {
  //   console.log(n);

  for (var i = 1; i <= n; i++) {
    var multipleOf3 = i % 3 === 0;
    var multipleOf5 = i % 5 === 0;

    if (multipleOf3 && multipleOf5) {
      console.log("FizzBuzz");
    } else if (multipleOf3) {
      console.log("Fizz");
    } else if (multipleOf5) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

// image that 15 is the value of n
// fizzBuzz(15);

// Datatypes in JS
// var type = 90; Number
// var type = "hassan"; sytring
// var type = true; Boolean

// console.log(typeof type);

// Operators
// + Adition
// - Subraction
// * Multiplication
// / Division
// % Modulus

// var num = 9 + 9; Addition
// var num = "Muhammad " + "Hassan"; Concatination

// Concatination = merge 2 values

// var num = 9 + "9";

// 3 ways to convert string datatype to number

// var num = +"9";
// var num = Number("9");
// var num = parseInt("9");

// Increment
// Decrement

// var num = 9;
// num++; post increment
// ++num; pre increment

// num--; post decrement
// --num; pre decrement

// console.log(num);
