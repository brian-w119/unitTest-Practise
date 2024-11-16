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

function shiftString(string) {
   let newString = string;
   string = string.split("");
   const converted = string.map((value) => string.charCodeAt(value));
}

export { capitalise, reversesString, calculate };
