// Define the image import (you'll need to adjust this based on your actual image setup)
const RectangleImage = { src: "images/rectangle.jpg" };

// Projects data
const projects = [
  {
    id: "asjer",
    image: "../assets/images/Project-image-placeholder.png",
    name: "Asjer Project 1",
    year: "2024",
  },
  {
    id: "timur",
    image: "../assets/images/Project-image-placeholder.png",
    name: "Timur Project 1",
    year: "2024",
  },
  {
    id: "asjer",
    image: "../assets/images/Project-image-placeholder.png",
    name: "Asjer Project 2",
    year: "2023",
  },
  {
    id: "timur",
    image: "../assets/images/Project-image-placeholder.png",
    name: "Timur Project 2",
    year: "2023",
  },
  {
    id: "asjer",
    image: "../assets/images/Project-image-placeholder.png",
    name: "Asjer Project 3",
    year: "2022",
  },
];

// Initialize filter state
let filter = "all";

// Set up filter function
function setFilter(newFilter) {
  filter = newFilter;
  renderProjects();
}

// Function to render projects based on current filter
function renderProjects() {
  const projectsContainer = document.querySelector(".work-box-container");

  // Clear current projects
  projectsContainer.innerHTML = "";

  // Filter projects
  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.id === filter);

  // Update filter button styles
  document.querySelectorAll(".filter-button").forEach((button) => {
    if (button.dataset.filter === filter) {
      button.classList.add("bg-slate-50", "text-black");
      button.classList.remove("text-[#0d0d0d]");
    } else {
      button.classList.remove("bg-slate-50", "text-black");
      button.classList.add("text-[#0d0d0d]");
    }
  });

  // Generate project HTML
  filteredProjects.forEach((project, index) => {
    const projectElement = document.createElement("div");
    projectElement.className = "w-full";
    projectElement.innerHTML = `
      <div class="hover:-translate-y-2 duration-150 ease-in-out">
        <img
          class="w-full h-full cursor-pointer"
          src="${project.image}"
          alt="${project.name}"
        />
      </div>
      <div class="flex justify-between items-center py-[15px] px-[10px]">
        <h1
          class="Gilroy-Regular font-[600] text-[#0d0d0d]"
          style="font-size: clamp(12px, 3.5vw, 25px)"
        >
          ${project.name}
        </h1>
        <p
          class="Gilroy-Regular font-[400] text-[#999999]"
          style="font-size: clamp(10px, 3.5vw, 15px)"
        >
          ${project.year}
        </p>
      </div>
    `;
    projectsContainer.appendChild(projectElement);
  });
}

// Initialize the page when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  // Set up event listeners for filter buttons
  document.querySelectorAll(".filter-button").forEach((button) => {
    button.addEventListener("click", () => {
      setFilter(button.dataset.filter);
    });
  });

  // Initial render
  renderProjects();
});
