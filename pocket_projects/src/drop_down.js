
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

const dropdownList = document.querySelector(".drop-down-dog-list");

const attachDogLinks = function () {
  const dogLinks = dogLinkCreator();
  dogLinks.forEach ( li => {
    dropdownList.appendChild(li);
  });
}
const dogLinkElements = document.getElementsByClassName("dog-link");
const handleEnter = function () {
  console.log(dogLinkElements);
  console.log('mouse enter');
  // set display xcxx
  // dogLinkElements.each(htmlEle => {
  for (let i = 0; i < dogLinkElements.length; i++){
    let htmlEle = dogLinkElements[i];
    htmlEle.style.display = "block";
  }
  // dogLinkElements.style.display = "block";
}

const handleLeave = function () {
  // set displayNone
  console.log("mouse leave")
  for (let i = 0; i < dogLinkElements.length; i++) {
    let htmlEle = dogLinkElements[i];
    htmlEle.style.display = "none";
  }
};


dropdownList.addEventListener("mouseenter", handleEnter);
dropdownList.addEventListener("mouseleave", handleLeave);



export const dropdown = attachDogLinks();



