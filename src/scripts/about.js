// about.js

import { createElement } from './utils';

function About() {
  // Add the class to the body element
  document.body.classList.add('body-background-about');

  // Function to handle the message button click
  const handleMessageClick = () => {
    // Implement your logic to open a message form or chat interface
    // For demonstration purposes, you can simply log a message
    console.log("Initiating message...");
  };

  // Return the container with the about section, card, and message button
  return createElement('div', { className: 'about-container' }, [
    createElement('h1', { className: 'about-heading', textContent: 'About Us' }),
    createElement('div', { className: 'card-about' }, [
      createElement('p', { className: 'about-text', textContent: "Welcome to Sunrise - your go-to platform for weather updates and forecasts. At Sunrise, we believe in providing accurate and reliable weather information to help you plan your day effectively. Whether you're a weather enthusiast or just looking to stay informed, we've got you covered." }),
      createElement('p', { className: 'about-text', textContent: "Our team of meteorologists and developers work tirelessly to ensure that you have access to the most up-to-date weather data. With Sunrise, you can stay ahead of the weather and make informed decisions about your outdoor activities." }),
      createElement('p', { className: 'about-text', textContent: "We are committed to delivering a seamless user experience and are constantly striving to improve our platform. Your feedback is invaluable to us, so please don't hesitate to reach out with any suggestions or concerns." }),
      createElement('p', { className: 'about-text', textContent: "Thank you for choosing Sunrise. We're excited to have you on board!" })
    ]),
    createElement('button', { className: 'message-button', textContent: 'Message Me', onClick: handleMessageClick })
  ]);
}

export default About;
