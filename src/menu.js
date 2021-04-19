const menuList = (text) => ({ text });

const list1 = menuList('Fish.....................USH. 15,000');
const list2 = menuList('Chicken Soup..............USH. 10,000');
const list3 = menuList('Taandori chicken wrap..... USH. 25,000');
const list4 = menuList('Chicken  Pizza.............USH. 28,000');
const list5 = menuList('Granola bars.........USH. 15,000');
const list6 = menuList('Caviar.....USH. 40,000');

const menuTab = document.createElement('div');
menuTab.classList.add('d-flex', 'container');
const wrap = document.createElement('div');
const wrapper = [list1.text, list2.text, list3.text, list4.text, list5.text, list6.text];

wrapper.forEach((item) => {
  const wrapAll = document.createElement('div');
  wrapAll.innerHTML = item;
  wrap.appendChild(wrapAll);
});

const menu = () => {
  const tabContent = document.querySelector('.tab-content');
  menuTab.appendChild(wrap);
  tabContent.appendChild(menuTab);
};

export default menu;