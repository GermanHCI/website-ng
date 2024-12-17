document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from reloading the page

    // Get the search input value
    const searchText = document.getElementById('searchInput').value.trim();

    // Display the searched text below the form
    const outputDiv = document.getElementById('output');
    outputDiv.textContent = `You searched for: ${searchText}`;

    // Get the content container
    const contentElement = document.getElementById('content');
    const sections = contentElement.querySelectorAll('.paper-section');

    let matchFound = false; // Flag to check if any match is found

    if (searchText) {
        sections.forEach(section => {
            const text = section.textContent || section.innerText;
            // Check if the section contains the search text
            if (text.toLowerCase().includes(searchText.toLowerCase())) {
                // Show only the matched section
                section.style.display = 'block';
                matchFound = true;
            } else {
                // Hide the other sections
                section.style.display = 'none';
            }
        });

        if (!matchFound) {
            outputDiv.textContent = `No matches found for: ${searchText}`;
        }
    } else {
        // If search is empty, reset to show all sections
        sections.forEach(section => {
            section.style.display = 'block';
        });
        outputDiv.textContent = '';
    }
});
function toggleAbstract(id) {
    var abstract = document.getElementById(id);
    if (abstract.style.display === "none" || abstract.style.display === "") {
        abstract.style.display = "block";
    } else {
        abstract.style.display = "none";
    }
}