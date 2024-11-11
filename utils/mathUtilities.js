/**
 * Gets a random multiplication, division, subtraction or addition question
 *
 * @returns {} The randomly generated math question
 */
function getQuestion() {
    const operators = ['+', '-', '*', '/'];
    const operator = operators[Math.floor(Math.random() * operators.length)];
    const num1 = Math.floor(Math.random() * 999) + 1; 
    const num2 = Math.floor(Math.random() * 999) + 1; 
  
    let question;
    let answer;
    
      switch (operator) {
          case '+':
              question = `What is ${num1} + ${num2}?`;
              answer = num1 + num2;
              break;
          case '-':
              question = `What is ${num1} - ${num2}?`;
              answer = num1 - num2;
              break;
          case '*':
              question = `What is ${num1} * ${num2}?`;
              answer = num1 * num2;
              break;
          case "/":
              question = `What is ${num1} / ${num2}?`; 
              answer = num1 / num2;
              break;
      }
    
      return { question, answer };
  }
    
    /**
     * Parses the provided question and gets whether or not the provided answer is correct
     *
     * @param {*} question The question being answered
     * @param {*} answer The potential answer
     * @returns {boolean} True if the answer was correct, false otherwise.
     */
    function isCorrectAnswer(question, userAnswer) {
      const correctAnswer = question.answer;
      return parseFloat(userAnswer) === correctAnswer;
    }
    
    //Exports data
    module.exports = {
      getQuestion,
      isCorrectAnswer,
    };