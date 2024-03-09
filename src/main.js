function main(){
  const content = document.querySelector('#content')
  const heroDiv = document.createElement('div');
  let heroHeading = document.createElement('h1');
  let heroPara = document.createElement('p');

  heroHeading.innerText = 'Tony\'s Pizza';
  heroPara.innerText = 'Fresh baked pizza';

  heroDiv.appendChild(heroHeading);
  heroDiv.appendChild(heroPara);
  content.appendChild(heroDiv);
}

export default main
