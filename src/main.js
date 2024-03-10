function main(){
  //hero section
  const content = document.querySelector('#content')
  const heroDiv = document.createElement('div');
  let heroHeading = document.createElement('h1');
  let heroPara = document.createElement('p');
  const button = document.createElement('button');

  heroDiv.setAttribute("id", "main");
  heroHeading.innerText = 'Tony\'s Pizza';
  heroPara.innerText = 'Fresh baked pizza';
  button.textContent = 'View Menu';

  //About section
  const aboutDiv = document.createElement('div');
  const aboutTextDiv = document.createElement('div');
  const aboutHeading = document.createElement('h1');
  const aboutPara = document.createElement('p');
  const aboutImg = document.createElement('img');

  aboutDiv.setAttribute("id", "about");
  aboutTextDiv.setAttribute("id", "abouttext");
  aboutHeading.innerText = 'What makes our pizza great'
  aboutPara.innerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
  aboutImg.src = '/images/about-img.png';
  aboutImg.setAttribute("alt","Image of pizza");

  heroDiv.appendChild(heroHeading);
  heroDiv.appendChild(heroPara);
  heroDiv.appendChild(button);

  aboutTextDiv.appendChild(aboutHeading);
  aboutTextDiv.appendChild(aboutPara);
  aboutDiv.appendChild(aboutTextDiv);
  aboutDiv.appendChild(aboutImg);

  content.appendChild(heroDiv);
  content.appendChild(aboutDiv);

}

export default main;
