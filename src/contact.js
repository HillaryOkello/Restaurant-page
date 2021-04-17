const contact = () => {
  const tabContent = document.querySelector('.tab-content');
  const social = document.createElement('div');
  social.classList.add('text-center');
  const text = document.createElement('p');
  text.textContent = 'Connect with us on:';
  const details = document.createElement('div');
  details.classList.add('d-flex', 'justify-content-center', 'icons');
  const twitter = document.createElement('div');
  twitter.innerHTML = '<i class="fab fa-twitter"></i>';
  const facebook = document.createElement('div');
  facebook.innerHTML = '<i class="fab fa-facebook-square"></i>';
  const instagram = document.createElement('div');
  instagram.innerHTML = '<i class="fab fa-instagram"></i>';
  social.appendChild(text);
  social.appendChild(details);
  details.appendChild(twitter);
  details.appendChild(facebook);
  details.appendChild(instagram);
  tabContent.appendChild(social);
};

export default contact;