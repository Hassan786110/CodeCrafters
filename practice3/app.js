// Changing Case

// 1.Lower Case Syntax: toLowerCase()
// 2.Upper Case Syntax: toUpperCase()

// var name = "MUHAMMAD HASSAN";
// console.log(name.toLowerCase());

// var name = "muhammad hassan";
// console.log(name.toUpperCase());

// 1.slice (Used to make a copy of array or string)

// var fruitNames = ["apple", "banana", "grapes"];
// var copy = fruitNames.slice(1, 2);
// console.log(fruitNames, copy);

// var sentence = "This is an apple";
// var fruitName = sentence.slice(11, sentence.length);
// console.log(sentence, fruitName);

// 2.indexOf (finds the index of first character of any first word from any paragraph or sentence)

// var names = "Muhammad Hassan, Muhammad Saqlain, Hassan, Muhammad Abbas";
// var index = names.indexOf("Hassan");
// console.log(index, names[index]);

// 3.lastIndexOf (finds the index of first character of any last word from any paragraph or sentence)

// var names = "Muhammad Hassan, Muhammad Saqlain, Hassan, Muhammad Abbas";
// var index = names.lastIndexOf("Hassan");
// console.log(index, names[index]);

// 4. charAt (finds the location of any character on a specific index#)

// var name = "Muhammad Hassan";
// console.log(name.charAt(9));

// 5. replace (replace only the first word or character found in the paragraph or sentence)

// var sentence =
//   "Lorem ipsum dolor sit amet consectetur adipisicing elit. consectetur Molestias, architecto!";
// var replacedSentence = sentence.replace("consectetur", "!Hello World!");
// console.log(sentence);
// console.log(replacedSentence);

// 6. replace (replace All the first word or character found in the paragraph or sentence)

// var sentence =
//   "Lorem ipsum dolor sit amet consectetur adipisicing elit. consectetur Molestias, architecto!";
// var replacedSentence = sentence.replace(/consectetur/g, "!Hello World!");
// console.log(sentence);
// console.log(replacedSentence);

// 7. replace (replace All the first word or character found in the paragraph or sentence)

// var sentence =
//   "Lorem ipsum dolor sit amet consectetur adipisicing elit. consectetur Molestias, architecto!";
// var replacedSentence = sentence.replaceAll("consectetur", "!Hello World!");
// console.log(sentence);
// console.log(replacedSentence);

// Rounding Numbers
// 1. round (roundof decimal numbers)
// 2. ceil (add one number in digit before decimal)
// 3. floor (remove numbers after decimal)
// 4. random (return random numbers)

// var num = 56.462;
// var num = 56.562;
// console.log(Math.round(num));

// var num = 56.462;
// console.log(Math.ceil(num));

// var num = 56.562;
// console.log(Math.floor(num));

// console.log(Math.random());
