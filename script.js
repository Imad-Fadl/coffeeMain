let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open')
}
window.addEventListener('scroll', function() {
    var header = document.getElementById('header');
    var scroll = document.querySelector('.scroll');
    if (window.scrollY > 150) { // Adjust the value to when you want the header to change
      header.classList.add('scrolled');
      scroll.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
      scroll.classList.remove('scrolled');
    }
  });
  