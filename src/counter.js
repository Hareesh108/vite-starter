// sass apply
import './sassy.scss';

// // postcss apply
// import './postcss.css';

export const initializeCounter = (doc = globalThis.document) => {
  const countElement = doc.getElementById('count');
  const incrementButton = doc.getElementById('increment');
  const decrementButton = doc.getElementById('decrement');

  let count = 0;

  const render = () => {
    countElement.textContent = count;
  };

  const increment = () => {
    count++;
    render();
  };

  const decrement = () => {
    count--;

    if (count > 0) {
      // // dynamic import
      // import('./banner').then(({ addBanner }) => {
      //   addBanner('Hareesh');
      // });
    }

    render();
  };

  incrementButton.addEventListener('click', increment);
  decrementButton.addEventListener('click', decrement);

  render();

  return () => {
    incrementButton.removeEventListener('click', increment);
    decrementButton.removeEventListener('click', decrement);
  };
};
