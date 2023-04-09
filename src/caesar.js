// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const regex = /[a-z]/;

  function caesar(input, shift, encode = true) {
    //Create shift restrictions first
    if (!shift || shift < -25 || shift > 25) {
      return false;
    }
    //creating a new alphabet with shift variablen
    //Letter shift should occur outside of encoding to create ciphered alphabet
    function letterShift(shift) {
      let cipheredAlphabet = ``;
      for (let i = 0; i < alphabet.length; i++) {
        let index = (i + shift) % alphabet.length;
        if (index < 0) {
          index += 26;
        }
        cipheredAlphabet += alphabet[index];
      }
      return cipheredAlphabet;
    }
    //when encode is true: use alphabet string
    if (encode) {
      input = input.toLowerCase();
      let newInput = input.split(" ");
      //Loop through input string
      const code = [];
      newInput.forEach((word) => {
        let encodedMessage = ``;
       // const code = [];
        for (let i = 0; i < word.length; i++) {
          if (regex.test(word[i]) === false) {
            encodedMessage += word[i];
          } else {
            let inputIndex = alphabet.indexOf(word[i]);
          // update encoded message variable with letters based on 
            encodedMessage += letterShift(shift)[inputIndex];
          }
        }
        code.push(encodedMessage);
      })
      return code.join(" ");  
    } else {
      //when !encode: use ciphered alphabet
      //ignore capital letters
      input = input.toLowerCase();
      //Loop through input string
      let newInput = input.split(" ");
      //Loop through input string
      const code = [];
      newInput.forEach((word) => {
        let decodedMessage = ``;
       // const code = [];
        for (let i = 0; i < word.length; i++) {
           if (regex.test(word[i]) === false) {
             decodedMessage += word[i];
           } else {
             //grab index of input from ciphered alphabet
             let inputIndex = letterShift(shift).indexOf(word[i]);
             // update decoded message with aplphabet 
             decodedMessage += alphabet[inputIndex];
           }
        }
        code.push(decodedMessage);
      })
      return code.join(" "); 
    }
  }
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };

