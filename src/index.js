import * as main from './home';
import about from './about';
import menu from './menu';
import contact from './contact';

main.navbar()
main.pageContent()
main.toggleTabs()
main.footer()
about();

const tabContent = document.querySelector('.tab-content');
const tabItem = document.querySelectorAll('.nav-link');
const tabDetails = [about, menu,  contact];
const selectItem = (index) => {
  tabContent.innerHTML = '';
  tabItem.forEach((item) => {
    item.classList.remove('show', 'active');
  });

  tabItem[index].classList.add('show', 'active');
  tabDetails[index]();
};

for (let i = 0; i < tabItem.length; i += 1) {
  tabItem[i].onclick = selectItem.bind(null, i);
}