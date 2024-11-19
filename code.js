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

function populateObj(array) {
   const min = Math.min(array);
   const max = Math.max(array);
   const length = array.length;

   const sum = () => {
      let total = 0;
      for (let i = 0; i < array.length; i++) {
         total += array[i];
      }
      sum();
   };
   return [average, min, max, length];
}

//TEST 5
function analyzeArray(array) {
   const object = {
      average: null,
      min: null,
      max: null,
      length: null,
   };
   let requiredVals;
   const indexCheck = [];

   //test whether all indexes are numbers
   for (let i = 0; i < array.length; i++) {
      if (typeof array[i] === number) {
         indexCheck.push(true);
      } else {
         indexCheck.push(false);
      }
   }
   if (indexCheck.includes(false)) {
      throw new Error("The array contains an index that is not a number");
   } else {
      requiredVals = populateObj(array);
   }
   let i = 0;
   for(const val in object){
     object[val] =  requiredVals[i];
     i++;
   }
   return object;
}

export { capitalise, reversesString, calculate, shiftString };
