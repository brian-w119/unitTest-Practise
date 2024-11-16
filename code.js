function capitalise(text) {
   let newWord = text.split("");
   newWord[0] = text[0].toUpperCase();
   newWord = newWord.join("");
   return newWord;
}

function reversesString(text) {
   let word = text;
   word = word.split("");
   word = word.reverse();
   word = word.join("");
   return word;
}

function calculate(num1, num2, operation) {
   let result;
   if (operation === "+") {
      result = num1 + num2;
   } else if (operation === "-") {
      result = num1 - num2;
   } else if (operation === "*") {
      result = num1 * num2;
   } else if (operation === "/") {
      result = num1 / num2;
   }
   return result;
}

function shiftString(string, shift) {
   let newString = string;
   newString = newString.split("");
   //converts to ASCII
   let converted = newString.map((value) => value.charCodeAt(0));
   //cipher shift
   converted = converted.map((value) => value + shift);
   //converts to back to alpha numeric
   let convertToAlphaNum = converted.map((value) => String.fromCharCode(value));
   convertToAlphaNum = convertToAlphaNum.join("");
   return convertToAlphaNum;
}

export { capitalise, reversesString, calculate, shiftString };
