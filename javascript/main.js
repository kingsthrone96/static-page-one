const navTop = document.querySelector('nav');
const navtitle = document.getElementById('navTitleItem');
const navLinkArea = document.querySelectorAll('.nav-link-items');
const sideNavBtn = document.getElementById('sideNavBtn');
const sideNavItemArea = document.getElementById('sideNavItemArea');
const closeSideNav = document.getElementById('closeSideNav');
const navBtnIcon = document.querySelectorAll('.navBtnIcon');
const modal = document.getElementById('modal');

//*Animate nav onscroll
window.addEventListener('scroll', () => {
  let navLinks = [...navLinkArea];
  
  if(window.scrollY >= 75) {
    navTop.classList.add('nav-onscroll', 'hc-content-shade');
    navtitle.classList.add('nav-title-onscroll');
    navBtnIcon.forEach(i => {
      i.style.borderBottom = '3px #25a125 solid'
    })
    for(let link in navLinks) {
      navLinkArea[link].classList.add('nav-links-onscroll')
    }
  } else {
    navTop.classList.remove('nav-onscroll', 'hc-content-shade');
    navtitle.classList.remove('nav-title-onscroll');
    navBtnIcon.forEach(i => {
      i.style.borderBottom = '3px #fff solid'
    })
    for(let link in navLinks) {
      navLinkArea[link].classList.remove('nav-links-onscroll');
    }
  }
});

//*On open sidenavigation
sideNavBtn.addEventListener('click', () => {
  sideNavItemArea.style.width = '200px';
  modal.classList.add('show-modal');
});

//*On close sidenavigation
closeSideNav.addEventListener('click', () => {
  sideNavItemArea.style.width = '0px';
  modal.classList.remove('show-modal');
});

//*On close sidenavigation outside click
modal.addEventListener('click', () => {
  sideNavItemArea.style.width = '0px';
  modal.classList.remove('show-modal');
});

//*Smoot Scroll
$('a[href*="#"]').on('click', function(e) {
  e.preventDefault();

  $('html, body').animate({
       scrollTop: $($(this).attr('href')).offset().top - 57,
  }, 500, 'linear')
});
