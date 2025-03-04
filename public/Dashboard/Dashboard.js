function openTab(evt, tabName) {
  // Declare variables
  var i, tabcontent, tablinks;

  // Hide all tab content
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Remove the "active" class from all tab buttons
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab and add an "active" class to the button
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Open the first tab by default
document.addEventListener('DOMContentLoaded', function () {
  const firstTab = document.getElementsByClassName("tablinks")[0];
  if (firstTab) {
    firstTab.click();
  }
});

const escapeHTML = (str) => str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");

const loadOrders = async () => {
  try {
      let res = await fetch('/getClampOrders', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({})
      });
      if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
      let response = await res.json();
      document.getElementById("Tab2").innerHTML += response.map((loadOrders, index) => `
<div class="bg-[#ffffff] flex flex-col gap-1 p-3 mt-3 w-full max-w-[350px] rounded-[16px] cursor-pointer border-[0.5px] border-[#dddddd]">
        <label class="Gilroy-Semibold text-[#a9a9a9] text-[14px]">Full name</label>
        <h1 class="Gilroy-Medium text-[13px]">${escapeHTML(loadOrders.firstname)} ${escapeHTML(loadOrders.lastname)}</h1>
        <label class="Gilroy-Semibold text-[#a9a9a9] text-[14px]">Organization/Company</label>
        <h1 class="Gilroy-Medium text-[13px]">${escapeHTML(loadOrders.company)}</h1>
        <label class="Gilroy-Semibold text-[#a9a9a9] text-[14px]">Short desire</label>
        <p class="Gilroy-Medium text-[13px]">${escapeHTML(loadOrders.Description)}</p>
        <label class="Gilroy-Semibold text-[#a9a9a9] text-[14px] mt-5">Chosen plan</label>
        <p class="Gilroy-Medium text-slate-50 px-2 py-1 mt-0.5 bg-[#3a74ff] w-fit rounded-full text-[13px]">${escapeHTML(loadOrders.plan)}</p>
        <label class="Gilroy-Semibold text-[#a9a9a9] text-[14px]">Contacting info</label>
        <div class="flex flex-wrap gap-1 mt-1">
          <p class="Gilroy-Medium text-slate-50 px-2 py-1 mt-0.5 bg-[#3a74ff] w-fit rounded-full text-[13px]">${escapeHTML(loadOrders.email)}</p>
          <p class="Gilroy-Medium text-slate-50 px-2 py-1 mt-0.5 bg-[#3a74ff] w-fit rounded-full text-[13px]">${escapeHTML(loadOrders.phone)}</p>
        </div>
      </div
      `).join('');
  } catch (error) {
      console.error('Failed to load orders:', error);
      document.getElementById("Tab2").innerHTML = "<p>Error loading orders. Try again later.</p>";
  }
};
loadOrders();

