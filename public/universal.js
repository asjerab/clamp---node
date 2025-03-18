//
// Javascript code for index siden ONLY!!
//
// Kode for navigation menu lenker
const links = [
  {
    name: "Home",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
      <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
    </svg>
    `,
    href: "/index.html",
  },
  {
    name: "About",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
    <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
  </svg>
  `,
    href: "/About/index.html",
  },
  {
    name: "Projects",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
    <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
  </svg>
  `,
    href: "/Project/index.html",
  },
];

const navigationMenu = document.getElementById("NavigationMenu");
navigationMenu.innerHTML = links
  .map(
    (link) => `
    <a class="Gilroy-Semibold flex justify-between gap-5 items-center text-[22px] flex-1 py-2 hover:scale-101 duration-200 group active:scale-99" style="font-size: clamp(15px, 10vw, 20px)" href="${link.href}">
        <p>${link.name}</p>
        ${link.icon}
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
        <p class="Gilroy-Medium text-[18px]">${link.name}</p>
    </a>
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
