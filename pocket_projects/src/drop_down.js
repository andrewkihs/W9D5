const dogNav = document.querySelector(".drop-down-dog-nav");
const dropdownList = document.querySelector(".drop-down-dog-list");
const dogLinkElements = document.getElementsByClassName("dog-link");



const dogs = {
  "Corgi": "https://www.akc.org/dog-breeds/cardigan-welsh-corgi/",
  "Australian Shepherd": "https://www.akc.org/dog-breeds/australian-shepherd/",
  "Affenpinscher": "https://www.akc.org/dog-breeds/affenpinscher/",
  "American Staffordshire Terrier": "https://www.akc.org/dog-breeds/american-staffordshire-terrier/",
  "Tosa": "https://www.akc.org/dog-breeds/tosa/",
  "Labrador Retriever": "https://www.akc.org/dog-breeds/labrador-retriever/",
  "French Bulldog": "https://www.akc.org/dog-breeds/french-bulldog/" 
};



const dogLinkCreator = function () {
  const dogLinks = [];
  for (const item in dogs) {
    const a = document.createElement("a");
    a.innerHTML = item;
    a.href = dogs[item];
    const li = document.createElement("li");
    li.className = "dog-link";
    li.appendChild(a);
    dogLinks.push(li);
  };
  return dogLinks;
}


const attachDogLinks = function () {
  const dogLinks = dogLinkCreator();
  dogLinks.forEach ( li => {
    dropdownList.appendChild(li);
  });
  handleLeave();
}


const handleEnter = function () {
  for (let i = 0; i < dogLinkElements.length; i++){
    let htmlEle = dogLinkElements[i];
    htmlEle.style.display = "block";
  }
}


const handleLeave = function () {
  for (let i = 0; i < dogLinkElements.length; i++) {
    let htmlEle = dogLinkElements[i];
    htmlEle.style.display = "none";
  }
};



dogNav.addEventListener("mouseenter", handleEnter);
dropdownList.addEventListener("mouseleave", handleLeave);


export const dropdown = attachDogLinks();



