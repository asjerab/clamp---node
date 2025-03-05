fetch("/getLoggedInUser")
  .then((response) => response.json())
  .then((data) => {
    if (data.email) {
      document.getElementById("loggedInUser").textContent = `${data.email}`;
    }
  })
  .catch((error) => console.error("Feil ved henting av bruker:", error));

function openTab(evt, tabName) {
  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

document.addEventListener("DOMContentLoaded", function () {
  const firstTab = document.getElementsByClassName("tablinks")[0];
  if (firstTab) {
    firstTab.click();
  }
});

const escapeHTML = (str) =>
  str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

const loadOrders = async () => {
  try {
    let res = await fetch("/getClampOrders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    });
    if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
    let response = await res.json();
    document.getElementById("Tab2Content").innerHTML += response
      .map(
        (loadOrders, index) => `
<div class="bg-[#ffffff] flex flex-col gap-1 p-3 mt-3 w-full max-w-[350px] rounded-[16px] cursor-pointer border-[0.5px] border-[#dddddd] hover:border-blue-500 hover:border-2 transition-all duration-150 ease-in-out">
        <label class="Gilroy-Semibold text-[#a9a9a9] text-[14px]">Full name</label>
        <h1 class="Gilroy-Medium text-[13px]">${escapeHTML(
          loadOrders.firstname
        )} ${escapeHTML(loadOrders.lastname)}</h1>
        <label class="Gilroy-Semibold text-[#a9a9a9] text-[14px]">Organization/Company</label>
        <h1 class="Gilroy-Medium text-[13px]">${escapeHTML(
          loadOrders.company
        )}</h1>
        <label class="Gilroy-Semibold text-[#a9a9a9] text-[14px]">Short description</label>
        <p class="Gilroy-Medium text-[13px] h-auto">${escapeHTML(
          loadOrders.Description
        )}</p>
        <label class="Gilroy-Semibold text-[#a9a9a9] text-[14px] mt-5">Chosen plan</label>
        <p class="Gilroy-Medium text-slate-50 px-2 py-1 mt-0.5 bg-[#3a74ff] w-fit rounded-full text-[13px]">${escapeHTML(
          loadOrders.plan
        )}</p>
        <label class="Gilroy-Semibold text-[#a9a9a9] text-[14px]">Contacting info</label>
        <div class="flex flex-wrap gap-1 mt-1">
          <p class="Gilroy-Medium text-slate-50 px-2 py-1 mt-0.5 bg-[#3a74ff] w-fit rounded-full text-[13px]">${escapeHTML(
            loadOrders.email
          )}</p>
          <p class="Gilroy-Medium text-slate-50 px-2 py-1 mt-0.5 bg-[#3a74ff] w-fit rounded-full text-[13px]">${escapeHTML(
            loadOrders.phone
          )}</p>
          <p class="Gilroy-Medium text-slate-50 px-2 py-1 mt-0.5 bg-[#3a74ff] w-fit rounded-full text-[13px]">${escapeHTML(
            loadOrders.date
          )}</p>
        </div>
      </div>`
      )
      .join("");
  } catch (error) {
    console.error("Failed to load orders:", error);
    document.getElementById("Tab2Content").innerHTML =
      '<p class="Gilroy-Semibold mt-4 flex items-center gap-2 bg-[#da1e37] w-fit rounded-[8px] p-3 text-white"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">' +
      '<path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />' +
      '</svg>' +
      'Error loading orders. Try again later.</p>';
  }
};
loadOrders();

async function handleLogout() {
    try {
        const response = await fetch('/logout', {
            method: 'POST',
        });
        
        const data = await response.json();
        
        if (data.status) {
            window.location.href = '/login'; 
        } else {
            console.error('Kunne ikke logge ut');
        }
    } catch (error) {
        console.error('Feil ved utlogging:', error);
    }
}
