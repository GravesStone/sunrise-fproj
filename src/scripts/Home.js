import { createElement } from './utils';


function Home() {
  const title = createElement('h2', { textContent: 'Welcome to our website!' });

  const page3Link = createElement('a', {
    href: '/#/page3',
    textContent: 'Link to Page 3',
  });

  // Create a hero section
  const heroSection = createElement('div', { className: 'hero-section' }, [
    createElement('h1', { className: 'hero-title', textContent: 'Welcome to our Website!' }),
    createElement('p', { className: 'hero-description', textContent: 'Discover amazing content and more.' }),
    page3Link, // Include the page 3 link in the hero section
  ]);

  // Add the class to the body element
  document.body.classList.add('body-background-home');

  // Return the container with both the title and the hero section
  return createElement('div', {}, [title, heroSection]);
}

export default Home;
