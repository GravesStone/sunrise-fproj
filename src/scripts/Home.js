// Home.js
import { createElement } from './utils';

function Home() {
  const searchLink = createElement('a', {
    href: '/#/search',
    textContent: 'See more Weather Status',
    className: 'button-link', // Add a class to style the link as a button
  });

  // Create a hero section with fade-in effect
  const heroSection = createElement('div', { className: 'hero-section fade-in' }, [
    createElement('h1', { textContent: '☀️Sunrise' }), // Title directly included in the hero section
    createElement('h2', { className: 'hero-title', textContent: 'Embrace the dawn of a new day' }),
    createElement('p', { textContent: "where each sunrise paints the sky with endless possibilities." }),
    
    searchLink, // Include the page 3 link in the hero section
  ]);

  // Add the class to the body element
  document.body.classList.add('body-background-home');

  // Return the container with only the hero section
  return createElement('div', {}, [heroSection]);
}

export default Home;
