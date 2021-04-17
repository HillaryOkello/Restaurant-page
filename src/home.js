import banner2 from './assets/banner2.jpeg';

const content = document.querySelector('#content');

const navbar = () => {
  const nav = document.createElement('nav');
  nav.classList.add('navbar', 'bg-primary');
  const logo = document.createElement('h1');
  logo.textContent = 'Hilnex Restaurant';
  logo.classList.add('text-white', 'header');
  nav.appendChild(logo);
  content.appendChild(nav);
};

const pageContent = () => {
  const intro = document.createElement('div');
  intro.classList.add('container', 'mt-5', 'p-5');
  const intro_text = document.createElement('h2');
  intro_text.textContent = 'Welcome to Hilnex Restaurant';
  intro_text.classList.add('text-center', 'text-white')
  const welcome_text = document.createElement('p');
  welcome_text.textContent = 'We provide you with the best dishes in town. We have a variety of dishes both local and international. We ensure quality in our dishes prepared by highly trained chefs';
  welcome_text.classList.add('text-center', 'p-2', 'pb-5', 'text-white');
  intro.style.background = `url(${banner2})`;
  intro.style.backgroundRepeat = 'no-repeat';
  intro.style.backgroundSize = 'cover';
  intro.style.backgroundPosition = 'bottom';
  intro.appendChild(intro_text);
  intro.appendChild(welcome_text);
  content.appendChild(intro);
};

const toggleTabs = () => {
  const tabs = document.createElement('div');
  tabs.classList.add('nav', 'nav-tabs', 'm-5', 'container');
  const about = document.createElement('h4');
  about.classList.add('nav-link', 'active');
  about.textContent = 'About';
  const menu = document.createElement('h4');
  menu.classList.add('nav-link');
  menu.textContent = 'Menu';
  const contact = document.createElement('h4');
  contact.classList.add('nav-link');
  contact.textContent = 'Contact';
  const tabContent = document.createElement('div');
  tabContent.classList.add('tab-content', 'd-flex');
  tabs.appendChild(about);
  tabs.appendChild(menu);
  tabs.appendChild(contact);
  content.appendChild(tabs);
};

const footer = () => {
  const foot = document.createElement('div');
  foot.classList.add('p-3', 'bg-primary', 'mt-5', 'mb-0');
  const footText = document.createElement('p');
  footText.classList.add('text-center')
  footText.textContent = 'Made by Hillary Okello';
  foot.appendChild(footText);
  content.appendChild(foot);
};

export { 
  navbar, pageContent, toggleTabs, footer
};