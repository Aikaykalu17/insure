'use strict';
const hamburger = document.getElementById('hamburger__svg');
const descriptionLink = document.querySelector('.description__link');
const footer = document.querySelector('.footer');

// Hamburger Menu
const hamburgerHTML = `
<nav class="hamburger__menu" id="hamburger__menu">
          <div class="hamburger__header">
            <div class="hamburger__header__details">
              <img src="/images/logo.svg" alt="" srcset="" class="hamburger__logo">
              
                <img src="/images/icon-close.svg" alt="" class="close__svg" id="close__svg">
              
            </div>
          </div>
          <div class="hamburger__links__body">
            <div class="hamburger__links">
            <a href="http://" target="_blank" rel="noopener noreferrer" class="nav__link first__nav__link">HOW WE WORK</a>
            <a href="http://" target="_blank" rel="noopener noreferrer" class="nav__link second__nav__link">BLOG</a>
            <a href="http://" target="_blank" rel="noopener noreferrer" class="nav__link third__nav__link">ACCOUNT</a>
            <a href="http://" target="_blank" rel="noopener noreferrer" class="description__link nav__link fourth__nav__link">VIEW PLANS</a>
</div>
          </div>
        </nav>
`;
// Render Hamburger Menu
const openMenu = function () {
  document.body.insertAdjacentHTML('afterbegin', hamburgerHTML);
  const close = document.getElementById('close__svg');
  close.addEventListener('click', closeMenu);
};

// Close Hamburger Menu
const closeMenu = function () {
  const hamburgerMenu = document.getElementById('hamburger__menu');

  if (hamburgerMenu) {
    hamburgerMenu.remove();
  }
  document.getElementById('hamburger__svg').style.display = 'block';
  document.getElementById('close__svg').style.display = 'none';
};

// Liste for clicks
hamburger.addEventListener('click', () => {
  openMenu();
  document.getElementById('hamburger__svg').style.display = 'none';
  document.getElementById('close__svg').style.display = 'block';
});

// Smooth scroling
descriptionLink.addEventListener('click', function (e) {
  e.preventDefault();
  footer.scrollIntoView({ behavior: 'smooth' });
});
