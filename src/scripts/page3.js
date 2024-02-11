import { createElement } from './utils';

function Home() {
  const title = createElement('h2', { textContent: 'Page 1' });

  const page3Link = createElement('a', {
    href: '/#/page3',
    textContent: 'Link to Page 3',
  });

  return createElement('div', {}, [title, page3Link]);
}

export default Home;
