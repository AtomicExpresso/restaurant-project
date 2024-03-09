function navbar() {
  const content = document.querySelector('#content')

  let navbar = document.createElement('div');
  let navText = document.createElement('h3');
  let button = document.createElement('button');
  let buttonTwo = document.createElement('button');
  let buttonThree = document.createElement('button');

  navbar.setAttribute("id", "navbar");

  navText.innerText = 'Tonys Pizza';
  button.textContent = 'Home';
  buttonTwo.textContent = 'Menu';
  buttonThree.textContent = 'Contact';

  navbar.append(navText, button, buttonTwo, buttonThree);
  content.appendChild(navbar);
};

export default navbar;