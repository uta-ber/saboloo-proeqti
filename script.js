// BURGER MENU
const burgerBTN = document.querySelector(".burger-btn");
const navEl = document.querySelector("#main-nav");

burgerBTN.addEventListener("click", () => {
  navEl.classList.toggle("active");
});

const PLANET_API_URI = "https://planets-api.vercel.app/api/v1/planets";

const navLinks = document.querySelectorAll(".nav-link");
const planetName = document.querySelector("#planet-name");
const planetImg = document.querySelector("#planet-img");
const planetDesc = document.querySelector(".description");

const overviewBtn = document.querySelector(".overview");
const internalBtn = document.querySelector(".internal");
const geologyBtn = document.querySelector(".geology");

const overviewBtn2 = document.querySelector(".overview2");
const internalBtn2 = document.querySelector(".internal2");
const geologyBtn2 = document.querySelector(".geology2");

const rotation = document.querySelector("#rotation");
const revolution = document.querySelector("#revolution");
const radius = document.querySelector("#radius");
const temp = document.querySelector("#temp");

for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", () => {
    getPlanet(navLinks[i].textContent); // Venus
  });
}

const getPlanet = async (planet = "Mercury") => {
  const response = await fetch(`${PLANET_API_URI}/${planet}`);
  const data = await response.json();
  console.log(data);
  planetName.textContent = data.name;
  planetImg.src = data.images.planet;
  planetDesc.textContent = data.overview.content;

  //   Mobile buttons
  overviewBtn.addEventListener("click", () => {
    planetDesc.textContent = data.overview.content;
    overview.planetImg.src = data.images.planet;
    // planetImg2.style.display = "none";
  });
  internalBtn.addEventListener("click", () => {
    planetDesc.textContent = data.structure.content;
    planetImg.src = data.images.internal;
    // planetImg2.style.display = "none";
  });
  geologyBtn.addEventListener("click", () => {
    planetDesc.textContent = data.geology.content;
    // planetImg2.style.display = "block";
    planetImg.src = data.images.planet;
    // planetImg2.src = data.images.geology;
  });

  //   Tablet + Desctop buttons
  overviewBtn2.addEventListener("click", () => {
    planetDesc.textContent = data.overview.content;
    overview.planetImg.src = data.images.planet;
    // planetImg2.style.display = "none";
  });
  internalBtn2.addEventListener("click", () => {
    planetDesc.textContent = data.structure.content;
    planetImg.src = data.images.internal;
    // planetImg2.style.display = "none";
  });
  geologyBtn2.addEventListener("click", () => {
    planetDesc.textContent = data.geology.content;
    // planetImg2.style.display = "block";
    planetImg.src = data.images.planet;
    // planetImg2.src = data.images.geology;
  });

  rotation.textContent = data.rotation;
  revolution.textContent = data.revolution;
  radius.textContent = data.radius;
  temp.textContent = data.temperature;
};

getPlanet();
