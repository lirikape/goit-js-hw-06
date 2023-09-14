const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

// Задали конст і її значення це посилання на список ul.gallery!
const galleryList = document.querySelector(".gallery");

// Для кожного зображення створюємо li та img елементи і додаємо їх до DOM
images.forEach((image) => {
  const listItem = document.createElement("li");
  listItem.classList.add("stls");
  listItem.style.listStyleType = "none";
  const img = document.createElement("img");
  img.height = "400";
  img.src = image.url;
  img.alt = image.alt;
  img.classList.add("gallery-image");

  listItem.appendChild(img);
  galleryList.appendChild(listItem);
});
// New color
const bc = document.querySelector("body");
bc.style.backgroundColor = "teal";
