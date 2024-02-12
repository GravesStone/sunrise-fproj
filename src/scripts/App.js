import { createElement } from './utils';
import { initRouter } from './router';

function Header() {
  const appTitle = createElement('h2', {

    className: 'heading', // Assuming you want to use this class for styling
  });

  // nav items
  const Home = createElement('a', {
    href: '/#/Home',
    textContent: 'Home',
    className: 'nav-link', // Add class name
  });
  const page2 = createElement('a', {
    href: '/#/search',
    textContent: '🔎Search',
    className: 'nav-link', // Add class name
  });
  const page3 = createElement('a', {
    href: '/#/page3',
    textContent: '⛅Status',
    className: 'nav-link', // Add class name
  });
  const about = createElement('a', {
    href: '/#/page3',
    textContent: 'About',
    className: 'nav-link', // Add class name
  });

  const nav = createElement('nav', {}, [Home, page2, page3,about]);

  return createElement('header', { className: 'header' }, [appTitle, nav]); // Apply the 'header' class
}

function Footer() {
  const footer = createElement('footer', { className: 'footer', id: 'footer-id' }, []);

  const copyright = createElement('span', {
    textContent: `Copyright © ${new Date().getFullYear()} Mark Augustine Estimada`
  });

  footer.appendChild(copyright);

  return footer;
}

function App() {
  const main = createElement('main', {}, []);

  initRouter(main);

  const footer = Footer();

  return createElement('div', { className: 'app-container' }, [
    Header(),
    main,
    footer
  ]);
}

export default App;
