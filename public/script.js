//
// Javascript code for index siden ONLY!!
//
// Kode for navigation menu lenker
const links = [
  { name: "Home", href: "#" },
  { name: "About", href: "#" },
  { name: "Work", href: "#" },
  { name: "Contact", href: "#" },
];

const navigationMenu = document.getElementById("NavigationMenu");
navigationMenu.innerHTML = links
  .map(
    (link) => `
    <a class="Gilroy-Medium flex justify-between items-center text-[22px] flex-1 px-2 py-2 rounded-md hover:bg-[#e0e7ff] duration-200 group active:scale-99" style="font-size: clamp(15px, 10vw, 20px)" href="${link.href}">
        <p>${link.name}</p>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
    </a>
`
  )
  .join("");

// Kode for å åpne og lukke navigation menu
const openMenuButton = document
  .getElementById("openMenuButton")
  .addEventListener("click", () => {
    const navigationMenuWrapper = document.getElementById(
      "NavigationMenuWrapper"
    );
    // Toggle display style
    navigationMenuWrapper.style.display =
      navigationMenuWrapper.style.display === "block" ? "none" : "block";
  });

if (
  document.getElementById("NavigationMenuWrapper").style.display === "Block"
) {
  document.getElementById("openMenuButton").innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
    </svg>
  `;
} else {
  document.getElementById("openMenuButton").innerHTML = `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="size-6 text-slate-50"
      id=""
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
      />
    </svg>
  `;
}
