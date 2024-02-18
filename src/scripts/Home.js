import { createElement } from './utils';

function Home() {
  // Array of possible greetings
  const greetings = [
    "Welcome to our platform!",
    "Welcome back! Happy to see you again.",
    "Hello there! We're glad you're here.",
    "Hey! It's great to have you back.",
    "Greetings! Ready to explore more?",
  ];

  // Function to change background search
  function changeBackground() {
    document.body.classList.toggle('body-background-search');
  }

  // Check if the user has visited the platform before
  if(localStorage.getItem('firstVisit') === null) {
      // If it's their first visit, greet them with a random message
      var greetingIndex = Math.floor(Math.random() * greetings.length);
      var greeting = greetings[greetingIndex];
      // Store the information that the user has visited the platform
      localStorage.setItem('firstVisit', 'true');
  } else {
      // Reset the 'firstVisit' value to null to make greeting random on every visit
      localStorage.removeItem('firstVisit');
      // Greet them with a random message
      var greetingIndex = Math.floor(Math.random() * greetings.length);
      var greeting = greetings[greetingIndex];
  }

  // Create a paragraph element for the greeting
  const greetingParagraph = createElement('p', { textContent: greeting });

  // Create a button link for navigating to search
  const searchLink = createElement('a', {
    href: '/#/search',
    textContent: 'See more Weather Status',
    className: 'button-link', // Add a class to style the link as a button
  });

  // Add onclick event listener directly to the searchLink
  searchLink.onclick = changeBackground;

  // Create a logo element
  const logo = createElement('img', {
    src: './logo.png',
    alt: 'Logo',
    className: 'logo',
  });

  // Create a hero section with fade-in effect
  const heroSection = createElement('div', { className: 'hero-section fade-in' }, [
    logo, // Include the logo
    createElement('h2', { className: 'hero-title', textContent: 'Embrace the dawn of a new day' }),
    createElement('p', { textContent: "where each sunrise paints the sky with endless possibilities." }),
    greetingParagraph, // Include the greeting paragraph in the hero section
    searchLink, // Include the page 3 link in the hero section
  ]);

  // Add the class to the body element
  document.body.classList.add('body-background-home');

  // Return the container with only the hero section
  return createElement('div', {}, [heroSection]);
}

export default Home;
