import { createElement } from './utils';
// Navigation
import Home from './Home';
import search from './search';
import Page3 from './page3';
import about from './about';
export function initRouter(mainView) {
  function updateView(newView) {
    mainView.innerHTML = '';
    mainView.appendChild(newView);
  }

  function hashToRoute(hash) {
    switch (hash) {
      case '#/Home':
        updateView(Home());
        break;

      case '#/search':
        updateView(search());
        break;

      case '#/page3':
        updateView(Page3());
        break;
      case '#/about':
        updateView(about());
        break;

      default:
        updateView(createElement('h3', { textContent: '404 Page Not Found' }));
        break;
    }
  }

  const defaultHash = window.location.hash || '#/Home';
  hashToRoute(defaultHash);

  window.addEventListener('hashchange', (evt) => {
    const newUrl = new URL(evt.newURL);
    const hash = newUrl.hash;

    hashToRoute(hash);
  });
}
