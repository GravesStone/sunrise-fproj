import { createElement } from './utils';
import { initRouter } from './router';

function Header() {
  const appTitle = createElement('h1', {
    textContent: 'Sunrise',
    className: 'heading', // Assuming you want to use this class for styling
  });

  // nav items
  const Home = createElement('a', {
    href: '/#/Home',
    textContent: 'Home',
  });
  const page2 = createElement('a', {
    href: '/#/page2',
    textContent: 'Page 2',
  });
  const page3 = createElement('a', {
    href: '/#/page3',
    textContent: 'Page 3',
  });

  const nav = createElement('nav', {}, [Home, page2, page3]);

  return createElement('header', { className: 'header' }, [appTitle, nav]); // Apply the 'header' class
}

function Footer() {
  const footer = createElement('footer', { className: 'footer', id: 'footer-id' }, []);

  const copyright = createElement('span', {
    textContent: `Copyright © ${new Date().getFullYear()}`
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
