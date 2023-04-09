// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  //no special characters
  //output will be string
  //I and J share space 42
  //maintain spaces = input.split(" ")
  //ignore capital letters = input.toLowerCase();
  //return false if number of characters uneven when decoding
  // you can add any code you want within this function scope

  const alphabet = {
    a:11, b:21, c:31, d:41, e:51,
    f:12, g:22, h:32, i:42, j:42, k:52,
    l:13, m:23, n:33, o:43, p:53,
    q:14, r:24, s:34, t:44, u:54,
    v:15, w:25, x:35, y:45, z:55
  }

  function polybius(input, encode = true) {
    //When decoding
    if(!encode) {
      //check if number of input characters is even excluding spaces
      if(input.split(" ").join("").length % 2 !== 0) {
        return false;
      } else {
        //seperate encoded words by space
        let newInput = input.split(" ");
        const decode = [];
        //for each encoded word
        newInput.map((number) => {
          //split encoded word string by every 2 numbers to create number pairs
          number = number.match(/.{1,2}/g);
          let decodedMessage = ``;
          //for each number pair
          for (let i = 0; i < number.length; i ++) {
            //loop through polybius square
            for (let letter in alphabet) {
              const code = alphabet[letter];
              //check if number pair("a string") equals the polybius square letter code
              if(number[i] == code) {
                //if true, add letter to decodedMessage string
                decodedMessage += letter;
              }
            }
          }
          //push fully decoded word to decode array
          decode.push(decodedMessage);
        })
        //return string with original spaces
        return decode.join(" ");
      }
    } else {
      //ignore capital letters
      input = input.toLowerCase();
      //seperate words by space 
      let newInput = input.split(" ");
      const code = [];
      //Loop through input letters
      newInput.forEach((word) => {
        let codedMessage = ``;
        for(i = 0; i < word.length; i ++) {
          //loop through code square
          for (let letter in alphabet) {
            const code = alphabet[letter];
            //check if input letter matches polybius square letter key
            if(word[i] === letter) {
              //update string with coded input
              codedMessage += code;
            }
          }
        }
        code.push(codedMessage);
      })
      return code.join(" ");
    }
  }
  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };