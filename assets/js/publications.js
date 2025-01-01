    // Get the content container
    const contentElement = document.getElementById('content');
    const sections = contentElement.querySelectorAll('.paper-section');
document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from reloading the page

    // Get the search input value
    const searchText = document.getElementById('searchInput').value.trim();

    // Display the searched text below the form
    // const outputDiv = document.getElementById('output');
    

    let matchFound = false; // Flag to check if any match is found

    // Display show all button
    const clearSearch= document.getElementById('clearSearch');

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

        if (matchFound) {
            // outputDiv.textContent = `You searched for: ${searchText}`;
            clearSearch.style.display= 'inline-block';

        }
        else{
            // outputDiv.textContent = `No matches found!`;
            clearSearch.style.display = 'none';
        }
    } else {
        // If search is empty, reset to show all sections
        sections.forEach(section => {
            section.style.display = 'block';
        });
        // outputDiv.textContent = '';
    }
});
clearSearch.addEventListener('click', function() {
    resetSearch();
});
function resetSearch(){
    searchInput.value = ''; // Clear search input
        clearSearch.style.display = 'none'; // Hide "Show All" button
        sections.forEach(section => {
            section.style.display = 'block'; // Show all sections
        });
}
function toggleAbstract(id) {
    var abstract = document.getElementById(id);
    if (abstract.style.display === "none" || abstract.style.display === "") {
        abstract.style.display = "block";
    } else {
        abstract.style.display = "none";
    }
}
//  add function for searching tags 
function searchTag(tag) {

    const searchText = tag.toLowerCase();
   
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
    } else {
        // If search is empty, reset to show all sections
        sections.forEach(section => {
            section.style.display = 'block';
        });
        // outputDiv.textContent = '';
    }
}