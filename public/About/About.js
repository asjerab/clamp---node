// about.js
document.addEventListener('DOMContentLoaded', function() {
    // Initial state
    let selectedMember = "Asjer";
    
    // Get all team member cards
    const teamCards = document.querySelectorAll('.team-card');
    
    // Get member descriptions
    const asjerDescription = document.getElementById('asjer-description');
    const timurDescription = document.getElementById('timur-description');
    
    // Function to update UI based on selected member
    function updateUI() {
        // Update card borders
        teamCards.forEach(card => {
            const member = card.getAttribute('data-member');
            if (member === selectedMember) {
                card.classList.remove('border-none');
                card.classList.add('border-[#3a74ff]');
            } else {
                card.classList.remove('border-[#3a74ff]');
                card.classList.add('border-none');
            }
        });
        
        // Show/hide descriptions
        if (selectedMember === "Asjer") {
            asjerDescription.classList.remove('hidden');
            timurDescription.classList.add('hidden');
        } else if (selectedMember === "Timur") {
            asjerDescription.classList.add('hidden');
            timurDescription.classList.remove('hidden');
        }
    }
    
    // Add click event listeners to team cards
    teamCards.forEach(card => {
        card.addEventListener('click', function() {
            selectedMember = this.getAttribute('data-member');
            updateUI();
        });
    });
    
    // Initial UI update
    updateUI();
});