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
   const outputArr = [];
   let newString = string;
   newString = newString.split("");

   for (let i = 0; i < newString.length; i++) {
      if (regexTest(newString[i])) {
         let converted = newString[i].charCodeAt(0);
         converted += shift;
         converted = String.fromCharCode(converted);
         outputArr.push(converted);
      } else {
         outputArr.push(newString[i]);
      }
   }
   const output = outputArr.join("");
   return output;
}

function regexTest(string) {
   const regex = /^[a-zA-Z]*$/;
   return regex.test(string);
}

export { capitalise, reversesString, calculate, shiftString };
