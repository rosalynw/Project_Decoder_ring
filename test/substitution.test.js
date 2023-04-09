// Write your tests here!
const expect = require("chai").expect;
const substitutionModule = require("../src/substitution");

describe("substitution", () => {
    it("should return false if alphabet isn't 26 characters long", () => {
        const actual = substitutionModule.substitution("thinkful", "short");
        const expected = false;
        expect(actual).to.equal(expected);
    })
    it("should return false if alphabet has duplicate characters", () => {
        const actual = substitutionModule.substitution("thinkful", "abcabcabcabcabcabcabcabcyz");
        const expected = false;
        expect(actual).to.equal(expected);
    })
    it("should translate input phrase based on alphabet given to function", () => {
        const actual = substitutionModule.substitution("message", "$wae&zrdxtfcygvuhbijnokmpl");
        const expected = "y&ii$r&"
        expect(actual).to.equal(expected);
    })
    it("should ignore capital letters", () => {
        const actual = (substitutionModule.substitution("THINKFUL","xoyqmcgrukswaflnthdjpzibev") === substitutionModule.substitution("thinkful","xoyqmcgrukswaflnthdjpzibev"));
        const expected = true;
        expect(actual).to.equal(expected);
    })
    it("should maintain spaces between words", () => {
        const actual = substitutionModule.substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev");
        const expected = 'elp xhm xf mbymwwmfj dne';
        expect(actual).to.equal(expected);
    }) 
})