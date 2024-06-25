document.querySelector('.header__button').addEventListener('click', () => burgerMenuOpen());
document.querySelector('.burger-menu__close-button').addEventListener('click', () => burgerMenuClose());
document.querySelector('.header__menu-overlay').addEventListener('click', () => burgerMenuClose());

const burgerMenuOpen = () => {
  const overlay = document.querySelector('.header__menu-overlay');

  overlay.style.display = 'block';
}

const burgerMenuClose = () => {
  const overlay = document.querySelector('.header__menu-overlay');

  overlay.style.display = 'none';
}
