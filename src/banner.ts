function addBanner(text: string) {
  const container = document.querySelector('#content') as HTMLDivElement;
  container.textContent = text;
}

export default addBanner;
