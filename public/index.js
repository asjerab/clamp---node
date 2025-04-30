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
    price: "$1500",
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
    price: "$4500",
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
      <div class="flex flex-col bg-white justify-between items-start border-2 h-auto min-h-96 w-full border-opacity-25 border-gray-200 p-6 md:p-8 rounded-3xl hover:border-blue-500 hover:border-4 transition-all duration-150 ease-in-out">
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
              <p class="text-sm md:text-base text-balance">${feature}</p>
            </div>
          `
            )
            .join("")}
        </div>
        <div class="flex justify-between items-center w-full mt-auto pt-4">
          <h1 class="font-semibold text-gray-900 text-2xl md:text-3xl">
            ${card.price}
          </h1>
          <button class="bg-gray-900 text-white hover:bg-gray-800 hover:text-gray-200 rounded-full px-6 md:px-10 py-3 cursor-pointer transition-colors" onclick="updatePlan('${
            card.type
          }')">
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
      "Checking your website once a week.",
      "Implimenting minor changes if requested",
      "2-3 hours of work a month",
      "Check-in 2-3 times a month",
    ],
    specialFeature: "*Standard package included in the price",
  },
  {
    title: "Medium",
    type: "Management",
    price: "$50/Month",
    features: [
      "Monitoring your website.",
      "Implimenting changes if requested",
      "5-7 hours of work a month",
      "Check-in 5-7 times a month",
    ],
    specialFeature: "*Standard package included in the price",
  },
  {
    title: "High",
    type: "Overwatch",
    price: "$200/Month",
    features: [
      "Monitoring your website.",
      "Implimenting advanced changes if requested",
      "20+ hours of work a month",
      "Check-in 7-10 times a month",
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
              <p class="text-sm md:text-base text-balance">${feature}</p>
            </div>
          `
            )
            .join("")}
  
        </div>
        <div class="flex justify-between items-center w-full mt-auto pt-4">
          <h1 class="font-semibold text-gray-900 text-xl md:text-2xl">
            ${card.price}
          </h1>
          <button class="bg-gray-900 text-white hover:bg-gray-800 hover:text-gray-200 rounded-full px-6 md:px-10 py-3 cursor-pointer transition-colors" onclick="updatePlan('${
            card.type
          }')">
            Get Started
          </button>
        </div>
      </div>
  `
  )
  .join("");

function updatePlan(planType) {
  // Lagre den valgte planen i localStorage
  localStorage.setItem("selectedPlan", planType);
  // Naviger til kontaktskjemaet
  window.location.href = "/submit/"; // Endre til riktig sti hvis nødvendig
}

// Kode for priskort knapp
const ManagedSolutionButton = document.getElementById("ManagedSolutionButton");
const CompletePackageButton = document.getElementById("CompletePackageButton");

const activeButtonStyle =
  "Gilroy-Semibold cursor-pointer text-[15px] bg-[#ffffff] rounded-full px-3 py-1 duration-150 ease-in-out";
const inactiveButtonStyle =
  "Gilroy-Semibold cursor-pointer text-[15px] rounded-full px-3 py-1 duration-150 ease-in-out";

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

document.addEventListener("DOMContentLoaded", () => {
  const FAQarray = [
    {
      FAQtitle: "How long does it take to build a website?",
      FAQsvg: `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 duration-150 ease-in-out">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>`,
      FAQtext: `
        <p class="Gilroy-Medium text-[#999999] text-[17.5px] mt-2 w-full max-w-[1078px] text-balance hidden duration-150 ease-in-out">
The time required to build a website depends on your chosen plan and the complexity of your site. As a team of two dedicated developers, we work closely with you to ensure your project meets your expectations. On average, a Basic plan takes about 2-3 weeks, a Standard plan takes 4-6 weeks, and an Advanced plan takes 7-8+ weeks.        </p>
      `,
    },
    {
      FAQtitle: "Do you offer website hosting services?",
      FAQsvg: `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 duration-150 ease-in-out">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>`,
      FAQtext: `
        <p class="Gilroy-Medium text-[#999999] text-[17.5px] mt-2 w-full max-w-[1078px] text-balance hidden duration-150 ease-in-out">
Yes! Once we've finished building your site and you're happy with it, we'll help you find the perfect domain and take care of hosting for you. Hosting is included in every package, so you can sit back, relax, and enjoy your brand-new website!        </p>
      `,
    },
    {
      FAQtitle: "Future website updates or new features?",
      FAQsvg: `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 duration-150 ease-in-out">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>`,
      FAQtext: `
        <p class="Gilroy-Medium text-[#999999] text-[17.5px] mt-2 w-full max-w-[1078px] text-balance hidden duration-150 ease-in-out">
Yes, we offer ongoing development and updates for your site, but this service is only available with our 'Managed Solution' package.        </p>
      `,
    },
  ];

  const FAQElements = document.getElementById("FaqElements");
  FAQElements.innerHTML = FAQarray.map(
    (info) => `
    <div class="border-t-[1px] border-[#eeeeee] py-10 w-full max-w-[1400px] hover:scale-[1.010] duration-150 ease-in-out">
      <nav class="flex items-start gap-5 justify-between cursor-pointer" id="FAQnav">
        <h1 class="Gilroy-Semibold text-[#0d0d0d]" style="font-size: clamp(15px, 4.5vw, 30px)">
          ${info.FAQtitle}
        </h1>
        ${info.FAQsvg}
      </nav>
      ${info.FAQtext}
    </div>
  `
  ).join("");

  // Legg til klikk-hendelse for å vise/skjule svaret
  FAQarray.forEach((info, index) => {
    const faqNav = FAQElements.children[index].querySelector("nav");
    const faqText = FAQElements.children[index].querySelector("p");

    faqNav.addEventListener("click", () => {
      if (faqText.style.display === "block") {
        faqText.style.display = "none";
        faqNav.querySelector("svg").style.rotate = "0deg";
      } else {
        faqText.style.display = "block";
        faqNav.querySelector("svg").style.rotate = "135deg";
      }
    });
  });

  const FAQNav = document.getElementById("FAQnav");
  const FAQhidden = document.getElementById("hiddenFAQ");
  const FAQSvg = document.getElementById("FAQSvg");

  FAQNav.addEventListener("click", () => {
    if (FAQhidden.style.display == "block") {
      FAQhidden.style.display = "none";
      FAQSvg.style.rotate = "0deg";
    } else {
      FAQhidden.style.display = "block";
      FAQSvg.style.rotate = "135deg";
    }
  });
});

// Blur text effect hero
function animateBlurText(elementId, options = {}) {
  const {
    delay = 100,
    direction = "top",
    wordSpacing = "0.25em", // Add word spacing
  } = options;

  const element = document.getElementById(elementId);
  const content = element.innerHTML;

  // Use a regular expression to split the content while preserving HTML tags
  const parts = content.split(/(<[^>]+>|\s+)/);

  element.innerHTML = "";

  parts.forEach((part, index) => {
    if (part.trim() === "") {
      // Add a space between words
      const space = document.createElement("span");
      space.innerHTML = "&nbsp;";
      space.style.display = "inline-block";
      space.style.width = wordSpacing;
      element.appendChild(space);
      return;
    }

    if (part.startsWith("<")) {
      // If it's an HTML tag, append it directly
      element.innerHTML += part;
    } else {
      // If it's text content, wrap it in a span for animation
      const span = document.createElement("span");
      span.textContent = part;
      span.className = `inline-block transition-all duration-1000 opacity-0 blur-sm ${
        direction === "top" ? "translate-y-[-20px]" : "translate-y-[20px]"
      }`;
      span.style.transitionDelay = `${index * delay}ms`;

      // Check if this is the "Dream" text and apply the correct color
      if (part.toLowerCase() === "dream") {
        span.style.color = "#3a74ff";
      }

      element.appendChild(span);
    }
  });

  // Trigger animation after a short delay
  setTimeout(() => {
    element.querySelectorAll("span").forEach((span) => {
      span.classList.remove(
        "opacity-0",
        "blur-sm",
        "translate-y-[-20px]",
        "translate-y-[20px]"
      );
      span.classList.add("opacity-100", "blur-0", "translate-y-0");
    });
  }, 100);
}

// Usage
document.addEventListener("DOMContentLoaded", () => {
  animateBlurText("animatedHeading", {
    delay: 100,
    direction: "top",
    wordSpacing: "0.25em", // Adjust this value to increase or decrease word spacing
  });
});
