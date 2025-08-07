const slides = {
  family: [
    { type: "image", src: "family1.png" },
    { type: "image", src: "family2.jpg" },
    { type: "image", src: "family3.jpg" },
    { type: "image", src: "family4.jpg" },
  ],
  education: [
    { type: "image", src: "education5.png" },
    { type: "image", src: "education6.jpg" },
    { type: "image", src: "education2.jpg" },
    { type: "video", src: "graduation.mp4" },
    { type: "image", src: "education3.jpg" },
    { type: "image", src: "education4.jpg" },
    { type: "image", src: "education1.jpg" },
  ],
  friends: [
    { type: "image", src: "friends5.png" },
    { type: "image", src: "friends1.jpg" },
    { type: "image", src: "friends2.jpg" },
    { type: "image", src: "friends3.jpg" },
    { type: "image", src: "friends4.jpg" },
  ],
  love: [
    { type: "image", src: "love1.png" },
    { type: "image", src: "love3.jpg" },
    { type: "image", src: "love1.jpg" },
    { type: "image", src: "love4.jpg" },
    { type: "image", src: "love2.jpg" },
    { type: "image", src: "love6.jpg" },
    { type: "image", src: "love5.jpg" },
  ],
  farming: [
    { type: "image", src: "f6.png" },
    { type: "image", src: "f1.jpg" },
    { type: "image", src: "f2.jpg" },
    { type: "image", src: "f3.jpg" },
    { type: "image", src: "f4.jpg" },
    { type: "image", src: "f5.jpg" },
  ],
  explore: [
    { type: "image", src: "explore1.png" },
    { type: "image", src: "explore1.jpg" },
    { type: "image", src: "explore2.jpg" },
    { type: "image", src: "explore3.jpg" },
    { type: "image", src: "explore4.jpg" },
    { type: "image", src: "explore5.jpg" },
    { type: "image", src: "explore6.jpg" },
    { type: "image", src: "explore7.jpg" },
    { type: "image", src: "explore8.jpg" },
    { type: "image", src: "explore9.jpg" },
    { type: "image", src: "explore10.jpg" },
    { type: "image", src: "explore11.jpg" },
    { type: "image", src: "explore12.jpg" },
    { type: "image", src: "explore13.jpg" },
  ]
};

const currentIndexes = {
  family: 0,
  education: 0,
  friends: 0,
  love: 0,
  farming: 0,
  explore: 0
};

const bgMusic = document.getElementById("bgMusic");

const musicTracks = {
  family: "family.mp3",
  education: "education.mp3",
  friends: "friends1.mp3",
  love: "love.mp3",
  farming: "farming.mp3",
  explore: "explore.mp3"
};

function playMusicFor(category) {
  const currentItem = slides[category][currentIndexes[category]];
  const track = musicTracks[category];

  if (currentItem.type === "video") {
    bgMusic.pause();
  } else {
    if (track && (bgMusic.src !== location.origin + '/' + track)) {
      bgMusic.src = track;
      bgMusic.play().catch(err => {
        console.warn("Autoplay blocked:", err);
      });
    } else if (bgMusic.paused) {
      bgMusic.play();
    }
  }
}

function renderSlide(category) {
  const container = document.getElementById(`${category}-slider`);
  if (!container) return;

  container.innerHTML = "";
  const item = slides[category][currentIndexes[category]];

  if (item.type === "image") {
    const img = document.createElement("img");
    img.src = item.src;
    img.alt = `${category} image`;
    img.classList.add("zoom-animation"); // Add animation class
    container.appendChild(img);
  } else if (item.type === "video") {
    const video = document.createElement("video");
    video.src = item.src;
    video.controls = true;
    video.autoplay = true;
    video.loop = false;
    video.addEventListener("play", () => bgMusic.pause());
    video.addEventListener("ended", () => bgMusic.play());
    container.appendChild(video);
  }
}

function changeSlide(category, direction) {
  const items = slides[category];
  currentIndexes[category] =
    (currentIndexes[category] + direction + items.length) % items.length;

  renderSlide(category);
  playMusicFor(category);
}

window.onload = () => {
  Object.keys(slides).forEach(category => renderSlide(category));
 
};

function isActiveContainer(category) {
  const container = document.getElementById(`${category}-slider`);
  if (!container) return false;

  const bounding = container.getBoundingClientRect();
  return (
    bounding.top >= 0 &&
    bounding.left >= 0 &&
    bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

