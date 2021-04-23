
const partyHeader = document.getElementById('party');

export const htmlGenerator = (string, htmlElement) => {
  // string converted into <p> tag
  const p = document.createElement("p");
  p.innerText = string;
  // append to input html element
  
  if (htmlElement.hasChildNodes()) {
    htmlElement.removeChild(htmlElement.firstChild);
  }
  
  htmlElement.appendChild(p);
};

htmlGenerator('Party Time.', partyHeader);