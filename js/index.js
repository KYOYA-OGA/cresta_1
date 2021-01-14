// bootstrapの読み込み
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css'; // Import precompiled Bootstrap css
// CSSの読み込み
import '../scss/main.scss';

// モバイルメニュー
const menuIcon = document.querySelector('.header__menu-icon-js');
const menuContent = document.querySelector('.header__drawer-menu-js');
const body = document.body;

function toggleNav() {
  body.classList.toggle('stop-scrolling');
  menuContent.classList.toggle('header__drawer-menu--is-visible');
  menuIcon.classList.toggle('header__menu-icon--close-x');
}

function changeNavColor() {
  if (window.scrollY > menuIcon.offsetHeight + 400) {
    menuIcon.classList.add('active');
  } else {
    menuIcon.classList.remove('active');
  }
  console.log(window.scrollY, menuIcon.offsetHeight);
}

// Event Listeners
menuIcon.addEventListener('click', toggleNav);
menuContent.addEventListener('click', toggleNav);
window.addEventListener('scroll', changeNavColor);
