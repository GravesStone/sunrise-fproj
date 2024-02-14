import { createElement } from './utils.js';

function About() {
  // Function to add background class to the body element
  const setBackground = () => {
    document.body.classList.add('body-background-about');
  };

  // Call setBackground function when the component mounts
  setBackground();

  // Function to handle form submission
  function logSubmit(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    log.textContent = `Thank you, ${name}! Your feedback has been submitted!`;
  }

  // Wait for the DOM to be fully loaded before accessing elements
  document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form');
    const log = document.getElementById('log');
    form.addEventListener('submit', logSubmit);
  });

  // Return the container with the about section and card
  return createElement('div', { className: 'about-container' }, [
    createElement('h1', { className: 'about-heading', textContent: 'About Us' }),
    createElement('div', { className: 'card-about' }, [
      createElement('p', { className: 'about-text', textContent: "Welcome to Sunrise - your go-to platform for weather updates and forecasts. At Sunrise, we believe in providing accurate and reliable weather information to help you plan your day effectively. Whether you're a weather enthusiast or just looking to stay informed, we've got you covered." }),
      createElement('p', { className: 'about-text', textContent: "meteorologist and tirelessly to ensure that you have access to the most up-to-date weather data. With Sunrise, you can stay ahead of the weather and make informed decisions about your outdoor activities." }),
      createElement('p', { className: 'about-text', textContent: "We are committed to delivering a seamless user experience and are constantly striving to improve our platform. Your feedback is invaluable to us, so please don't hesitate to reach out with any suggestions or concerns." }),
      createElement('p', { className: 'about-text', textContent: "Thank you for choosing Sunrise. We're excited to have you on board!" })
    ]),
    createElement('form', { id: 'form', className: 'message-form' }, [
      createElement('input', { id: 'name', type: 'text', placeholder: 'Your Name', autocomplete: 'name' }),
      createElement('textarea', { id: 'message', placeholder: 'Your Message', autocomplete: 'message' }),
      createElement('button', { className: 'message-button', textContent: 'Message Me' }),
    ]),
    createElement('p', { id: 'log' }), // Append log message container
  ]);
}

export default About;
