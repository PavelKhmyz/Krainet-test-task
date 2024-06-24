document.querySelector('.header__burger-button').addEventListener('click', () => burgerMenuOpen());
document.querySelector('.burger-menu__close-button').addEventListener('click', () => burgerMenuClose());
document.querySelector('.overlay').addEventListener('click', () => burgerMenuClose());

const burgerMenuOpen = () => {
  const overlay = document.querySelector('.overlay');

  overlay.style.display = 'block';
}

const burgerMenuClose = () => {
  const overlay = document.querySelector('.overlay');

  overlay.style.display = 'none';
}
