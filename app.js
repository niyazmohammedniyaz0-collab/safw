const readline = require("readline");
const questions = require("./questions");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let score = 0;
let currentQuestion = 0;

function askQuestion() {
  if (currentQuestion >= questions.length) {
    console.log("\nQuiz Finished 🎉");
    console.log(`Your Score: ${score}/${questions.length}`);
    rl.close();
    return;
  }

  const q = questions[currentQuestion];
  console.log(`\nQ${currentQuestion + 1}: ${q.question}`);

  q.options.forEach((option, index) => {
    console.log(`${index + 1}. ${option}`);
  });

  rl.question("Your answer (1/2/3): ", (answer) => {
    if (parseInt(answer) === q.answer) {
      console.log("✅ Correct!");
      score++;
    } else {
      console.log("❌ Wrong!");
    }
    currentQuestion++;
    askQuestion();
  });
}

console.log("🧠 Welcome to the Node.js Quiz App");
askQuestion();
