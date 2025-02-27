//
// Javascript code for index siden ONLY!!
//
// Kode for navigation menu lenker
const links = [
  { name: "Home", href: "../index.html" },
  { name: "About", href: "../About/index.html" },
  { name: "Work", href: "../Project/index.html" },
];

const navigationMenu = document.getElementById("NavigationMenu");
navigationMenu.innerHTML = links
  .map(
    (link) => `
    <a class="Gilroy-Semibold flex justify-between items-center text-[22px] flex-1 py-2 hover:scale-101 duration-200 group active:scale-99" style="font-size: clamp(15px, 10vw, 20px)" href="${link.href}">
        <p>${link.name}</p>
    </a>
`
  )
  .join("");

// Kode for footer menu lenker
const footerLinks = [
  { name: "About", href: "#" },
  { name: "Work", href: "#" },
  { name: "Contact", href: "#" },
  { name: "Terms of Service", href: "#" },
  { name: "Privacy Policy", href: "#" },
];

const footerMenu = document.getElementById("footerMenu");
footerMenu.innerHTML = footerLinks
  .map(
    (link) => `
    <a class="hover:-translate-y-2 hover:underline duration-150 ease-in-out" href="${link.href}">
        <p class="Gilroy-Regular text-[18px]">${link.name}</p>
    </a>
`
  )
  .join("");

// Kode for priskort
const pricingCards = [
  {
    title: "Low",
    type: "Basic",
    price: "$500",
    features: [
      "1-5 pages (Home, About, Contact, etc.)",
      "Basic design & responsiveness",
      "SEO-friendly structure",
      "Handover with full ownership",
    ],
  },
  {
    title: "Medium",
    type: "Basic",
    price: "$2000",
    features: [
      "5-15 pages with custom design",
      "Basic design & responsiveness",
      "Payment integration",
      "User authentication & database setup",
      "Handover with full ownership",
    ],
  },
  {
    title: "High",
    type: "Advanced",
    price: "$5000",
    features: [
      "Unlimited pages & custom UI/UX",
      "API integrations, dashboards & more",
      "Scalability & security enhancements",
      "Handover with full ownership",
    ],
  },
  // Legg til flere priskort her om nødvendig
];

const pricingMenu = document.getElementById("pricingMenu");
pricingMenu.innerHTML = pricingCards
  .map(
    (card) => `
    <div class="flex flex-col justify-between items-start border-2 h-auto min-h-96 w-full border-opacity-25 border-gray-200 p-6 md:p-8 rounded-3xl hover:border-blue-500 hover:border-4 transition-all duration-150 ease-in-out">
      <nav class="flex flex-col gap-3 md:gap-5 w-full">
        <h1 class="font-medium text-gray-900 leading-tight text-base md:text-lg border border-gray-200 rounded-full px-3 py-1 w-fit">
          ${card.title}
        </h1>
        <p class="font-semibold text-gray-900 text-2xl md:text-3xl lg:text-4xl mt-4 md:mt-6">
          ${card.type}
        </p>
      </nav>
      <hr class="w-full border-gray-200 border-opacity-25 my-6 md:my-8" />
      <div class="flex flex-col gap-5 md:gap-6 w-full mb-6">
        ${card.features
          .map(
            (feature) => `
          <div class="flex items-start gap-3 md:gap-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 md:w-6 md:h-6 flex-shrink-0 text-blue-500">
              <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
            </svg>
            <p class="text-sm md:text-base">${feature}</p>
          </div>
        `
          )
          .join("")}
      </div>
      <div class="flex justify-between items-center w-full mt-auto pt-4">
        <h1 class="font-semibold text-gray-900 text-2xl md:text-3xl">
          ${card.price}
        </h1>
        <button class="bg-gray-900 text-white hover:bg-gray-800 hover:text-gray-200 rounded-xl px-6 md:px-10 py-3 cursor-pointer transition-colors">
          Get Started
        </button>
      </div>
    </div>
`
  )
  .join("");

// kode for mobile navigation menu
const MobileNavigationMenu = document.getElementById("MobileNavigationMenu");
const OpenMenuButton = document.getElementById("OpenMenuButton");
const CloseMenuButton = document.getElementById("CloseMenuButton");

OpenMenuButton.addEventListener("click", () => {
  MobileNavigationMenu.style.display = "flex";
});

CloseMenuButton.addEventListener("click", () => {
  MobileNavigationMenu.style.display = "none";
});
