const questions = [
    {
        question: "What does HTML stand for?",
        choices: ["Hyper Text Markup Language", "High Tech Markup Language", "Hyperlink Text Markup Language", "Home Tool Markup Language"],
        correct: "Hyper Text Markup Language"
    },
]


let currentQuestionIndex = 0;
let score = 0;

const questionEl = document.getElementById("question");
const nextButton = document.getElementById("next-question");
const submitButton = document.getElementById("submit-quiz");
const resultMessageEl = document.getElementById("resultMessage");

function loadQuestion() {
  const currentQuestion = quizData[currentQuestionIndex];
  questionEl.innerHTML = `
    <h5>${currentQuestion.question}</h5>
    <ul class="list-group">
      ${currentQuestion.options
        .map(
          (option, index) => `
        <li class="list-group-item">
          <input type="radio" name="option" id="option${index}" value="${index}" />
          <label for="option${index}">${option}</label>
        </li>
      `
        )
        .join("")}
    </ul>
  `;
}

nextButton.addEventListener("click", () => {
  const selectedOption = document.querySelector('input[name="option"]:checked');
  if (!selectedOption) {
    alert("Please select an answer!");
    return;
  }

  const answer = parseInt(selectedOption.value);
  if (answer === quizData[currentQuestionIndex].correct) {
    score++;
  }

  currentQuestionIndex++;
  if (currentQuestionIndex < quizData.length - 1) {
    loadQuestion();
  } else {
    nextButton.classList.add("d-none");
    submitButton.classList.remove("d-none");
  }
});

submitButton.addEventListener("click", () => {
  const selectedOption = document.querySelector('input[name="option"]:checked');
  if (!selectedOption) {
    alert("Please select an answer!");
    return;
  }

  const answer = parseInt(selectedOption.value);
  if (answer === quizData[currentQuestionIndex].correct) {
    score++;
  }

  const resultMessage = `You scored ${score} out of ${quizData.length}`;
  resultMessageEl.textContent = resultMessage;
  $("#resultModal").modal("show");
});

loadQuestion();
