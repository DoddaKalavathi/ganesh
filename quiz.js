const transitionMessage = document.getElementById('transitionMessage');
const countdownEl = document.getElementById('countdown');
const quizContainer = document.getElementById('quizContainer');
const quizForm = document.getElementById('quizForm');
const resultMessage = document.getElementById('resultMessage');
const correctAnswersBox = document.getElementById('correctAnswers');

let count = 5;
let attempts = 0;

const correctAnswers = {
  q1: "kalamma",
  q2: "qualcumm",
  q3: "15-03-2024"
};

const answerMessages = {
  q1: `"Kalamma" — but now a days you're not calling me like that... why? 😔`,
  q2: `"Qualcumm" — I really love that place... Sitting there with you at night and talking gives me a beautiful feeling without even realizing it. Being with you in that weather just feels so perfect... 💞`,
  q3: `"15-03-2024" — What a day it was… I had been waiting for that day for so long. The moment I saw you, my feelings, my heartbeat… so many thoughts were running through my mind. I experienced a whole new set of emotions. Thank you so much for that.`
};

function startCountdown() {
  const interval = setInterval(() => {
    count--;
    countdownEl.textContent = count;
    countdownEl.style.animation = 'none';
    void countdownEl.offsetWidth; // reset animation
    countdownEl.style.animation = 'countdownFade 1s ease-in-out';

    if (count === 0) {
      clearInterval(interval);
      transitionMessage.style.display = 'none';
      quizContainer.style.display = 'block';
    }
  }, 1000);
}

startCountdown();

quizForm.addEventListener('submit', (e) => {
  e.preventDefault();
  attempts++;

  const userAnswers = {
    q1: quizForm.q1.value.trim().toLowerCase(),
    q2: quizForm.q2.value.trim().toLowerCase(),
    q3: quizForm.q3.value.trim().toLowerCase()
  };

  const allCorrect = Object.keys(correctAnswers).every(
    key => userAnswers[key] === correctAnswers[key]
  );

  if (allCorrect) {
   
    quizForm.style.display = 'none';
    resultMessage.innerHTML = "✅ You got everything right! I'm really impressed... but still... let's go over the answers together. 😊";
    showAnswers();
  } else if (attempts < 3) {
  
    resultMessage.innerHTML = `Hmm... that’s not quite right 😔 You have ${3 - attempts} attempt(s) left. Try again!`;
  } else {
   
    quizForm.style.display = 'none';
    resultMessage.innerHTML = `I thought you’d remember these... 😔 But it's your birthday... so I'm letting you see the surprise anyway.`;
    showAnswers();
  }
});

function showAnswers() {
  correctAnswersBox.classList.remove("hidden");
  correctAnswersBox.innerHTML = `
    <h3>Correct Answers:</h3>
    <p><strong>1.</strong> - ${answerMessages.q1}</p>
    <p><strong>2.</strong> - ${answerMessages.q2}</p>
    <p><strong>3.</strong> - ${answerMessages.q3}</p>
  `;

  const nextLink = document.createElement("a");
  nextLink.href = "memoryvault.html";
  nextLink.textContent = "Click here to see next 🎁";
  nextLink.classList.add("next-link");
  nextLink.style.display = "inline-block";
  nextLink.style.marginTop = "50px";

  resultMessage.appendChild(document.createElement("br"));
  resultMessage.appendChild(nextLink);
}

