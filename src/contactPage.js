function contactPage() {
  const content = document.querySelector('#content');
  const contactHeader = document.createElement('h1');
  const contactPara = document.createElement('p');
  const contactDiv = document.createElement('div');
  const contactBtn = document.createElement('button');
  
  contactDiv.setAttribute("id", "contactdiv");

  contactHeader.innerText = 'Contact us';
  contactPara.innerText = 'Email: Example@example.com\nPhone: 555-555\nFacebook: @Example\nWebsite: example.com';
  contactBtn.textContent = 'Contact us';

  contactDiv.append(contactHeader, contactPara, contactBtn);
  content.appendChild(contactDiv);
}

export default contactPage;