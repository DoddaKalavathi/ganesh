const videoPlayer = document.getElementById('friendVideo');
const countdownEl = document.getElementById('countdown');
const contentEl = document.getElementById('content');
const transitionMessage = document.getElementById('transitionMessage');

let count = 5;

// Show countdown right away
countdownEl.textContent = count;
countdownEl.style.display = 'block';

const countdownInterval = setInterval(() => {
  count--;
  if (count > 0) {
    countdownEl.textContent = count;
    countdownEl.style.animation = 'countdownFade 1s ease-in-out';
  } else {
    clearInterval(countdownInterval);

    // Hide transition message
    transitionMessage.style.display = 'none';

    // Show video content
    contentEl.style.display = 'block';

    // Load and play the first video
    videoPlayer.src = videoSources[currentIndex];
    videoPlayer.load();
    videoPlayer.play();
  }
}, 1000);

// List of video file paths
const videoSources = [
  'manasa.mp4',
  'pavan.mp4',
  'muni.mp4',
  'kala.mp4',

];

let currentIndex = 0;

function changeVideo(direction) {
  currentIndex += direction;

  // Loop around
  if (currentIndex < 0) {
    currentIndex = videoSources.length - 1; // Go to last video
  } else if (currentIndex >= videoSources.length) {
    currentIndex = 0; // Go back to first video
  }

  videoPlayer.pause();
  videoPlayer.src = videoSources[currentIndex];
  videoPlayer.load();
  videoPlayer.play();
}
