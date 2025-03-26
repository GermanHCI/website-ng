    // Get the content container
    const contentElement = document.getElementById('content');
    const sections = contentElement.querySelectorAll('.paper-section');
    var globalTag;
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
    sections.forEach(section => { section.style.display = 'block'; });
    var colorTag=document.getElementById(globalTag);
    // var colorTag= document.getElementsByClassName('searchable-tag');
    console.log(colorTag);
    colorTag.style.color = '#FFFFFF';
    colorTag.style.backgroundColor = ' #45B29D';
    colorTag.style.borderRadius = "10px";
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

    if(globalTag){
        var previousTag = document.getElementById(globalTag);
        if (previousTag) {
            previousTag.style.color = '#FFFFFF';
            previousTag.style.backgroundColor = ' #45B29D';
            previousTag.style.borderRadius = "10px";
        }
    }
    sections.forEach(section => {
        const tagElement = section.querySelector('.tags'); // Get the tags inside the section
        if (tagElement && tagElement.innerText.toLowerCase().includes(searchText)) {
            section.style.display = 'block'; // Show the section if the tag matches
            matchFound = true;
        } else {
            section.style.display = 'none'; // Hide it otherwise
        }
    });
       
    globalTag=tag;
    var colorTag= document.getElementById(tag);
    if (matchFound) {
        // outputDiv.textContent = `You searched for: ${searchText}`;
        clearSearch.style.display= 'inline-block';
        colorTag.style.color = '#45B29D';
        colorTag.style.backgroundColor = ' #3E3E3E';
        colorTag.style.borderRadius = "10px";
    }
    else{
        // outputDiv.textContent = `No matches found!`;
        clearSearch.style.display = 'none';
        colorTag.style.color = '#FFFFFF';
        colorTag.style.backgroundColor = ' #45B29D';
        colorTag.style.borderRadius = "10px";
    }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
  