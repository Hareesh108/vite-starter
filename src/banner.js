import { bannerText } from './banner.module.css';
function addBanner(text) {
  const container = document.querySelector('#content');
  container.classList.add(bannerText);
  container.textContent = text;
}

export default addBanner;
