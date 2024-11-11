const express = require("express");
const app = express();
const port = 3000;
const { getQuestion, isCorrectAnswer } = require("./utils/mathUtilities");

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true })); // For parsing form data
app.use(express.static("public")); // To serve static files (e.g., CSS)


//Defaults

let lastQuestion = null;
let streak = 0;
let lastStreak = 0;
let leaderboard = [];


//Page routes

//Home
app.get("/", (req, res) => {
  res.render("index", { lastStreak });
});


//Quiz page
app.get("/quiz", (req, res) => {
  lastQuestion = getQuestion();
  res.render("quiz", { question: lastQuestion.question });
});


//Submits quiz
app.post("/quiz", (req, res) => {
  const { answer } = req.body;
  const correct = isCorrectAnswer(lastQuestion, answer);
  if (correct) {
    streak++;
    res.redirect("/quiz");
  } else {
    lastStreak = streak;
    leaderboard.push({ streak: streak, date: new Date() });
    streak = 0;
    res.redirect("/completion");
  }
});


//Completion
app.get("/completion", (req, res) => {
  res.render("completion", { lastStreak });
});


//Leaderboard
app.get("/leaderboards", (req, res) => {
  const getTopLeaderboard = (data, limit) => {
    return data
      .sort((a, b) => b.streak - a.streak)
      .slice(0, limit);
  };

  const topLeaderboard = getTopLeaderboard(leaderboard, 10);
  res.render("leaderboards", { topLeaderboard });
});


// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:3000`);
});