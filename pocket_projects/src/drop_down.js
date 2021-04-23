
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
    a.innerHTML = item.key;
    a.href = item.value;
    const li = document.createElement("li");
    li.className = "dog-link";
    li.appendChild(a)
    dogLinks.push(li);
  }
  debugger
  return dogLinks;
}

const dropdownList = document.querySelector(".drop-down-dog-list");

const attachDogLinks = function () {
  const dogLinks = dogLinkCreator();
  debugger
  dogLinks.forEach ( li => {
    debugger
    dropdownList.appendChild(li);
  })
  console.log(dogLinks)
}

attachDogLinks()

export const dropdown = attachDogLinks();
// export const dropdown;


