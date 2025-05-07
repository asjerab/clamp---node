//
// Javascript code for index siden ONLY!!
//
// Kode for navigation menu lenker
const links = [
  {
    name: "Home",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
</svg>

    `,
    href: "/",
  },
  {
    name: "About",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
</svg>
`,
    href: "/About/index.html",
  },
  {
    name: "Projects",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
</svg>
`,
    href: "/Project/index.html",
  },
];

const navigationMenu = document.getElementById("NavigationMenu");
navigationMenu.innerHTML = links
  .map(
    (link) => `
    <a href="${link.href}" class="flex items-center justify-between">
<p class="Gilroy-Semibold my-1" style="font-size: clamp(22px, 10vw, 35px)">${link.name}</p>        ${link.icon}
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
