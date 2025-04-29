document.addEventListener("DOMContentLoaded", () => {

    document.getElementById("mailForm").addEventListener("submit", async (event) => {
        event.preventDefault();
        console.log("Form submitted");
  
        // Get elements
        const firstname = document.getElementById("first-name").value || "";
        const lastname = document.getElementById("last-name").value || "";
        const company = document.getElementById("company").value || "";
        const mail = document.getElementById("email").value || "";
        const PhoneNumber = document.getElementById("phone-number").value || ""; // Fixed typo
        const wish = document.getElementById("message").value || "";
  
        const data = {
          first: firstname,
          last: lastname,
          comp: company,
          mail: mail,
          Phone: PhoneNumber,
          wish: wish,
        };
        console.log("Sending data:", data);
  
        const res = await fetch("/send/email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
        if (!res.ok) throw new Error(`Server error: ${res.status}`);
        const response = await res.json();
        console.log("Response:", response);
  
        if (response.message === "Success") {
          document.getElementById("mailForm").reset();
          alert("Mail sendt successfully!");
        } else {
          alert("Submission failed. Please try again.");
        }
      });
  });