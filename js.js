// hide nav-bar on scroll
const nav = document.querySelector(".thenav");

let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
    if (lastScrollY < window.scrollY) {
        nav.classList.add("nav--hidden")
       

    } else {
      nav.classList.remove("nav--hidden"),
      nav.classList.remove("bring-it")
    }
    lastScrollY = window.scrollY
});
// hide nav-bar on scroll

// search bar visibility

const toggleButton = document.getElementById('searchClick');
    const myDiv = document.getElementById('searchArea');

    toggleButton.addEventListener('click', function() {
      if (myDiv.style.display === 'none') {
        myDiv.style.display = 'block';
      } else {
        myDiv.style.display = 'none';
      }
    });

// search bar visibility

// search bar visibility for mobile

const mobiletoggleButton = document.getElementById('mobile-searchClick');
const searchDiv = document.getElementById('searchArea');

    mobiletoggleButton.addEventListener('click', function() {
      if (searchDiv.style.display === 'none') {
        searchDiv.style.display = 'block'
      }
    });
// search bar visibility for mobile
