// Define the image import (you'll need to adjust this based on your actual image setup)
const RectangleImage = { src: "images/rectangle.jpg" };

// Projects data
const projects = [
  {
    id: "asjer",
    image: "../assets/images/ShalomImgClampProjectspng.png",
    name: "Shalom Oslo",
    year: "2024",
    link: "https://Shalomoslo.com",
  },
  {
    id: "timur",
    image: "../assets/images/DataspotImg.png",
    name: "Dataspot",
    year: "2024",
    link: "https://dataspot.gusarov.site/login/",
  },
];

function renderProjects(filter) {
  const projectsContainer = document.querySelector(".work-box-container");

  projectsContainer.innerHTML = "";

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.id === filter);

  document.querySelectorAll(".filter-button").forEach((button) => {
    if (button.dataset.filter === filter) {
      button.classList.add("bg-slate-50", "text-black");
      button.classList.remove("text-[#0d0d0d]");
    } else {
      button.classList.remove("bg-slate-50", "text-black");
      button.classList.add("text-[#0d0d0d]");
    }
  });


  filteredProjects.forEach((project, index) => {
    const projectElement = document.createElement("div");
    projectElement.className = "w-full";
    projectElement.innerHTML = `
    <a href="${project.link}" target="_blank">
      <div class="hover:-translate-y-2  duration-150 ease-in-out">
        <img
          class="w-full h-full cursor-pointer rounded-[8px] hover:border-[#3a74ff]  hover:border-5"
          src="${project.image}"
          alt="${project.name}"
        />
      </div>
      <div class="flex justify-between items-center py-[15px] px-[10px]">
        <h1
          class="Gilroy-Medium font-[600] text-[#0d0d0d]"
          style="font-size: clamp(12px, 3.5vw, 25px)"
        >
          ${project.name}
        </h1>
        <p
          class="Gilroy-Medium font-[400] text-[#999999]"
          style="font-size: clamp(10px, 3.5vw, 15px)"
        >
          ${project.year}
        </p>
      </div>
      </a>
    `;
    projectsContainer.appendChild(projectElement);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".filter-button").forEach((button) => {
    button.addEventListener("click", () => {
      renderProjects(button.dataset.filter);
    });
  });

  renderProjects("all");
});
