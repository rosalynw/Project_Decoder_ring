// Write your tests here!
const expect = require("chai").expect;
const caesarModule = require("../src/caesar");

describe("caesar", () => {
    it("should return false if shift is 0", () => {
      const actual = caesarModule.caesar("thinkful", 0);
      const expected = false;
      expect(actual).to.equal(expected);
    })
    it("should return false if shift is less than -25", () => {
        const actual = caesarModule.caesar("thinkful", -26);
        const expected = false;
        expect(actual).to.equal(expected);
    })
    it("should return false if shift is more than 25", () => {
        const actual = caesarModule.caesar("thinkful", 26);
        const expected = false;
        expect(actual).to.equal(expected);
    })
    it("should return false if shift is not present", () => {
        const actual = caesarModule.caesar("thinkful");
        const expected = false;
        expect(actual).to.equal(expected);
    })
    it("should ignore capital letters", () => {
        const actual = (caesarModule.caesar("THINKFUL",3) === caesarModule.caesar("thinkful",3));
        const expected = true;
        expect(actual).to.eql(expected);
    }) 
    it("should maintain spaces between words", () => {
        const actual = caesarModule.caesar("This is a secret message!",8);
        const expected = 'bpqa qa i amkzmb umaaiom!';
        expect(actual).to.eql(expected);
    }) 
    it("should maintain non-alphabetic symbols", () => {
        const actual = caesarModule.caesar("@thinkful!",3);
        const expected = '@wklqnixo!';
        expect(actual).to.eql(expected);
    })
    it("should wrap around alphabet when shift goes beyond end of alphabet", () => {
        const actual = caesarModule.caesar("xyz",3);
        const expected = "abc";
        expect(actual).to.equal(expected);
    }) 
  })