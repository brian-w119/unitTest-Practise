function capitalise(text) {
   let newWord = text.split("");
   newWord[0] = text[0].toUpperCase();
   newWord = newWord.join("");
   return newWord;
}
export { capitalise };
