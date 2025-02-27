
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
      type: "Standard",
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
        "Payment integration",
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
  
  // Kode for priskort two
  const pricingCardsTwo = [
    {
      title: "Low",
      type: "Look out",
      price: "$20/Month",
      features: [
        "1-5 pages (Home, About, Contact, etc.)",
        "Basic design & responsiveness",
        "SEO-friendly structure",
        "Handover with full ownership",
      ],
      specialFeature: "*Standard package included in the price",
    },
    {
      title: "Medium",
      type: "Management",
      price: "$50/Month",
      features: [
        "5-15 pages with custom design",
        "Basic design & responsiveness",
        "Payment integration",
        "User authentication & database setup",
        "Handover with full ownership",
      ],
      specialFeature: "*Standard package included in the price",
    },
    {
      title: "High",
      type: "Overwatch",
      price: "$200/Month",
      features: [
        "Unlimited pages & custom UI/UX",
        "API integrations, dashboards & more",
        "Payment integration",
        "Scalability & security enhancements",
        "Handover with full ownership",
      ],
      specialFeature: "*Advanced package included in the price",
    },
    // Legg til flere priskort her om nødvendig
  ];
  
  const pricingMenuTwo = document.getElementById("pricingMenuTwo");
  pricingMenuTwo.innerHTML = pricingCardsTwo
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
        ${
          card.specialFeature
            ? `
          <div class="flex items-start gap-3 md:gap-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 md:w-6 md:h-6 flex-shrink-0 text-blue-500">
              <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
            </svg>
            <p class="text-sm md:text-base text-blue-500">${card.specialFeature}</p>
          </div>
        `
            : ""
        }
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
          <h1 class="font-semibold text-gray-900 text-xl md:text-2xl">
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


    // Kode for priskort knapp
const ManagedSolutionButton = document.getElementById("ManagedSolutionButton");
const CompletePackageButton = document.getElementById("CompletePackageButton");

const activeButtonStyle =
  "Gilroy-Semibold cursor-pointer text-[15px] bg-[#ffffff] rounded-full px-3 py-1";
const inactiveButtonStyle =
  "Gilroy-Semibold cursor-pointer text-[15px] rounded-full px-3 py-1";

ManagedSolutionButton.addEventListener("click", () => {
  pricingMenuTwo.style.display = "flex";
  pricingMenu.style.display = "none";
  ManagedSolutionButton.className = activeButtonStyle;
  CompletePackageButton.className = inactiveButtonStyle;
});

CompletePackageButton.addEventListener("click", () => {
  pricingMenu.style.display = "flex";
  pricingMenuTwo.style.display = "none";
  CompletePackageButton.className = activeButtonStyle;
  ManagedSolutionButton.className = inactiveButtonStyle;
});