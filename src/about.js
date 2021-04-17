const about = () => {
  const tabContent = document.querySelector('.tab-content');
  const about = document.createElement('div');
  about.classList.add('tab-pane', 'fade', 'show', 'active', 'text-center');
  const aboutText = document.createElement('div');
  aboutText.textContent = 'Hilnex restaurant is a fancy modern restaurant located in Kampala. We offer a variety of great dishes both local and international';
  about.appendChild(aboutText);
  tabContent.appendChild(about);
}

export default about