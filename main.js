function enterSite() {
  window.location.href = "quiz.html";
}

const container = document.getElementById('floating-emoji-container');
const emojis = ['💖'];

function createEmoji() {
  const emoji = document.createElement('div');
  emoji.classList.add('floating-emoji');
  emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];

  emoji.style.left = Math.random() * 100 + 'vw';
  emoji.style.fontSize = 16 + Math.random() * 30 + 'px';
  emoji.style.animationDuration = 5 + Math.random() * 5 + 's';

  container.appendChild(emoji);

  setTimeout(() => {
    emoji.remove();
  }, 10000);
}

setInterval(createEmoji, 500); // New emoji every 0.5s
