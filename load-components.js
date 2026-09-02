// Function to load the footer
function loadFooter() {
    fetch('/footer.html') // Looks for footer.html in the root folder
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('footer-placeholder').innerHTML = data;
        })
        .catch(error => {
            console.error('Error loading the footer:', error);
        });
}

// Run the function when the page loads
document.addEventListener('DOMContentLoaded', loadFooter);