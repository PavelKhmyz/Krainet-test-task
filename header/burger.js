document.querySelector('.header__button').addEventListener('click', () => burgerMenuOpen());
document.querySelector('.burger-menu__close-button_img').addEventListener('click', (event) => burgerMenuClose(event));
document.querySelector('.header__menu-overlay').addEventListener('click', (event) => burgerMenuClose(event));

const burgerMenuOpen = () => {
  const overlay = document.querySelector('.header__menu-overlay');

  overlay.style.display = 'block';
}

const burgerMenuClose = (event) => {
  const overlay = document.querySelector('.header__menu-overlay');
  const closeButton = document.querySelector('.burger-menu__close-button_img');

  if (event.target === overlay || event.target === closeButton) {
    overlay.style.display = 'none';
  }
}
