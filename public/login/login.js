document.getElementById("loginBtn").addEventListener("click", async () => {
    let responce = await fetch('/loginAdmin', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            mail: document.getElementById("usermail").value,
            pass: document.getElementById("passwords").value
        })
    })
    let answer = await responce.json()
    console.log(answer);
    
    if (answer.status == true) {
        window.location.assign("/dashboard")
    } else {
        window.location.reload()
    }
})