window.onload = () => {
  const flyingKiss = document.getElementById('flyingKiss');
  const photo = document.querySelector('.photo');

  photo.addEventListener('animationend', () => {
    flyingKiss.classList.remove('hidden');
  });
};
