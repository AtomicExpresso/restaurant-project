function contactPage() {
  const content = document.querySelector('#content');
  const contactHeader = document.createElement('h1');
  const contactDiv = document.createElement('div');
  
  contactDiv.setAttribute("id", "contactdiv");

  contactHeader.innerText = 'Contact us'

  contactDiv.append(contactHeader)
  content.appendChild(contactDiv)
}

export default contactPage;