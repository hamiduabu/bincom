// Manage Navigation
const pageSections = [...document.querySelectorAll('.container>section')];
const pageLinks = [...document.querySelectorAll('nav a')];
const routes = ['home', 'about', 'projects', 'contact'];

document.querySelector('header').addEventListener('click', (event) => {
  event.preventDefault();

  for (const section of pageSections) {
    if (
      routes.includes(event.target.id.slice(5)) &&
      section.id !== event.target.id.slice(5)
    ) {
      section.classList.add('hidden');
    } else if (section.id === event.target.id.slice(5)) {
      section.classList.remove('hidden');
      pageLinks.forEach((link) => {
        link.classList.remove('hidden');
      });
      event.target.classList.add('hidden');
    } else {
      return;
    }
  }
});

// Gallery Slide show
const pics = [
  'img-01.jpg',
  'img-02.jpg',
  'img-03.jpg',
  'img-04.jpg',
  'img-05.jpg',
];

const img = document.querySelector('#slide-img');
let counter = 1;

setInterval(() => {
  img.src = 'assets/images/' + pics[counter];
  counter++;
  if (counter === pics.length) {
    counter = 0;
  }
}, 5000);
