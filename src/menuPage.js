

function menuPage() {
  const content = document.querySelector('#content');
  const menuDiv = document.createElement('div');
  const menuHeader = document.createElement('h1');

  menuDiv.setAttribute("id", "menu");
  menuHeader.innerText = 'Our Menu';

  menuDiv.appendChild(menuHeader);
  content.appendChild(menuDiv);
}

export default menuPage;