//State constants
const { isCorrectAnswer, getQuestion } = require("../../utils/mathUtilities");


//Begin testing functions as stated in utils
describe("Tests for getQuestion", () => {
    test("Attribute should be string", () => {
        const { question } = getQuestion();
        expect(typeof question).toBe("string");
      });
      test("Attribute should be number", () => {
        const { answer } = getQuestion();
        expect(typeof answer).toBe("number");
      });
    
});

describe("Tests for isCorrectAnswer", () => {
    test("If answer is correct, boolean is true", () => {
        const question = "9 * 9";
        const answer = 81;
        expect(isCorrectAnswer(question, answer)).toBe(true);
      });
      test("If answer is correct, boolean is false", () => {
        const question = "9 * 9";
        const answer = 71;
        expect(isCorrectAnswer(question, answer)).toBe(false);
      });
      test("Parse correct user answer, boolean is true", () => {
        const question = { question: "9 * 9", answer: 81 };
        const userAnswer = "81";
        expect(isCorrectAnswer(question, userAnswer)).toBe(true);
      });
      test("Parse correct user answer, boolean is false", () => {
        const question = { question: "9 * 9", answer: 81 };
        const userAnswer = "71";
        expect(isCorrectAnswer(question, userAnswer)).toBe(false);
      });
});