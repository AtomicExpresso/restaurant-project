function menuPage() {
  const content = document.querySelector('#content');
  const menuDiv = document.createElement('div');
  const menuHeader = document.createElement('h1');
  const imgContainer = document.createElement('div');

  const imgOnePara = document.createElement('p');
  const imgTwoPara = document.createElement('p');
  const imgThreePara = document.createElement('p');

  const imgOneBtn = document.createElement('button');
  const imgTwoBtn = document.createElement('button');
  const imgThreeBtn = document.createElement('button');

  imgContainer.setAttribute("id", "imgcontainer");
  const imgOne = document.createElement('img');
  const imgTwo = document.createElement('img');
  const imgThree = document.createElement('img');
  const imgOneContainer = document.createElement('div');
  const imgTwoContainer = document.createElement('div');
  const imgThreeContainer = document.createElement('div');

  imgOne.src = '/images/menu-items/wings.png';
  imgTwo.src = '/images/menu-items/pasta.png';
  imgThree.src = '/images/menu-items/salad.png';

  menuDiv.setAttribute("id", "menu");
  menuHeader.innerText = 'Our Menu';

  imgOnePara.innerText = 'BBQ Wings\n $5.99';
  imgTwoPara.innerText = 'Pasta\n $10.50';
  imgThreePara.innerText = 'Ceaser Saled\n $4.00';
  imgOneBtn.innerText = 'Add to cart';
  imgTwoBtn.innerText = 'Add to cart';
  imgThreeBtn.innerText = 'Add to cart';

  imgOneContainer.append(imgOne, imgOnePara, imgOneBtn);
  imgTwoContainer.append(imgTwo, imgTwoPara, imgTwoBtn);
  imgThreeContainer.append(imgThree, imgThreePara, imgThreeBtn);
  imgContainer.append(imgOneContainer, imgTwoContainer, imgThreeContainer);
  menuDiv.appendChild(menuHeader);
  menuDiv.appendChild(imgContainer);
  content.appendChild(menuDiv);
}

export default menuPage;