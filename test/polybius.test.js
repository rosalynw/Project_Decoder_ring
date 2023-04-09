// Write your tests here!
const expect = require("chai").expect;
const polybiusModule = require("../src/polybius");

describe("polybius", () => {
    it("should translate i and j to 42 when encoding", () => {
        const actual = polybiusModule.polybius("i j");
        const expected = "42 42"
        expect(actual).to.equal(expected);
    })
    it("should translate 42 to both i/j when decoding", () => {
        const actual = polybiusModule.polybius("4432423352125413", false);
        const expected = "thijnkful"
        expect(actual).to.equal(expected);
    })
    it("should ignore capital letters", () => {
        const actual = (polybiusModule.polybius("THINKFUL") === polybiusModule.polybius("thinkful"));
        const expected = true;
        expect(actual).to.equal(expected);
    })
    it("should maintain spaces between words", () => {
        const actual = polybiusModule.polybius("3251131343 2543241341", false);
        const expected = "hello world";
        expect(actual).to.equal(expected);
    }) 
})