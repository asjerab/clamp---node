document.getElementById("ContactForm").addEventListener("submit", async (event) => {
    event.preventDefault();
    console.log("Form submitted");

    // Get elements
    const firstname = document.getElementById("first-name").value || '';
    const lastname = document.getElementById("last-name").value || '';
    const company = document.getElementById("Selskap/Bedriftny").value || '';
    const plan = document.getElementById("plan").textContent || ''; // Use .value if input, .innerHTML if div
    const mail = document.getElementById("email").value || '';
    const PhoneNumber = document.getElementById("Phone-numer").value || ''; // Fixed typo
    const wish = document.getElementById("message").value || '';

    const data = {
        first: firstname,
        last: lastname,
        comp: company,
        plan: plan,
        mail: mail,
        Phone: PhoneNumber,
        wish: wish
    };
    console.log('Sending data:', data);
    


        const res = await fetch('/sendOrder', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        if (!res.ok) throw new Error(`Server error: ${res.status}`);
        const response = await res.json();
        console.log('Response:', response);

        if (response.message === 'Success') {
            document.getElementById("ContactForm").reset();
            alert('Order submitted successfully!');
        } else {
            alert('Submission failed. Please try again.');
        }

});