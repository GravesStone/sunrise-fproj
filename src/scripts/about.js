import { createElement } from './utils.js';

function About() {
  // Function to add background class to the body element
  const setBackground = () => {
    document.body.classList.add('body-background-about');
  };

  // Function to send JSON data to server endpoint
  const saveMessageToJson = (jsonData) => {
    fetch('/data/databout.json', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: jsonData
    })
    .then(response => {
      if (response.ok) {
        console.log('Message saved successfully');
        document.getElementById('message-result').textContent = 'Message sent successfully!';
      } else {
        console.error('Failed to save message');
        document.getElementById('message-result').textContent = 'Failed to send message. Please try again.';
      }
    })
    .catch(error => {
      console.error('Error saving message:', error);
      document.getElementById('message-result').textContent = 'Error sending message. Please try again later.';
    });
  };

  // Function to handle the message button click
  const handleMessageClick = () => {
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;

    const data = {
      name: name,
      message: message
    };

    const jsonData = JSON.stringify(data);

    saveMessageToJson(jsonData);
  };

  // Call setBackground function when the component mounts
  setBackground();

  // Return the container with the about section, card, form, and message button
  return createElement('div', { className: 'about-container' }, [
    createElement('h1', { className: 'about-heading', textContent: 'About Us' }),
    createElement('div', { className: 'card-about' }, [
      createElement('p', { className: 'about-text', textContent: "Welcome to Sunrise - your go-to platform for weather updates and forecasts. At Sunrise, we believe in providing accurate and reliable weather information to help you plan your day effectively. Whether you're a weather enthusiast or just looking to stay informed, we've got you covered." }),
      createElement('p', { className: 'about-text', textContent: "meteorologist and  tirelessly to ensure that you have access to the most up-to-date weather data. With Sunrise, you can stay ahead of the weather and make informed decisions about your outdoor activities." }),
      createElement('p', { className: 'about-text', textContent: "We are committed to delivering a seamless user experience and are constantly striving to improve our platform. Your feedback is invaluable to us, so please don't hesitate to reach out with any suggestions or concerns." }),
      createElement('p', { className: 'about-text', textContent: "Thank you for choosing Sunrise. We're excited to have you on board!" })
    ]),
    createElement('form', { className: 'message-form' }, [
      createElement('input', { id: 'name', type: 'text', placeholder: 'Your Name', autocomplete: 'name' }),
      createElement('textarea', { id: 'message', placeholder: 'Your Message', autocomplete: 'message' }),
      createElement('button', { className: 'message-button', textContent: 'Message Me', onClick: handleMessageClick }),
      // Add a container for the message result
      createElement('div', { id: 'message-result', className: 'message-result' })
    ])
  ]);
}

export default About;
