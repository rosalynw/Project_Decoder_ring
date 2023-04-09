// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  const standardAlphabet = "abcdefghijklmnopqrstuvwxyz"
  function substitution(input, alphabet, encode = true) {
    //search for unique characters
    const characters = new Set(alphabet);
    if (!alphabet || alphabet.length !== 26 || alphabet.length !== characters.size) {
      return false;
    } else {
      if (encode) {
        input = input.toLowerCase();
        let newInput = input.split(" ");
        const code = [];
        newInput.forEach((word) => {
          let encodedMessage = ``;
          for (let i = 0; i < word.length; i++) {
            let inputIndex = standardAlphabet.indexOf(word[i]);
            encodedMessage += alphabet[inputIndex];
          }
          code.push(encodedMessage);
        })
        return code.join(" ");  
      } else {
        input = input.toLowerCase();
        let newInput = input.split(" ");
        const code = [];
        newInput.forEach((word) => {
          let decodedMessage = ``;
         // const code = [];
          for (let i = 0; i < word.length; i++) {
            let inputIndex = alphabet.indexOf(word[i]);
            decodedMessage += standardAlphabet[inputIndex];
          }
          code.push(decodedMessage);
        })
        return code.join(" ");
      }
    }
  }
  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };