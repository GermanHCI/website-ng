    // Get the content container
    const contentElement = document.getElementById('content');
    const sections = contentElement.querySelectorAll('.paper-section');
    document.getElementById('noResultsMessage').style.display = 'none';

    var globalTags = [];
    let selectedTags = [];
    
document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault();
    filterSections(); // Filter using search + selected tags
    clearSearch.style.display = (selectedTags.length > 0 || searchInput.value.trim() !== '') ? 'inline-block' : 'none';
});

clearSearch.addEventListener('click', function() {
    resetSearch();
});
function resetSearch(){
    searchInput.value = '';
    selectedTags = [];
    clearSearch.style.display = 'none';

    sections.forEach(section => section.style.display = 'block');

    document.getElementById('noResultsMessage').style.display = 'none';

    document.querySelectorAll('.searchable-tag').forEach(tag => {
        tag.style.color = '#FFFFFF';
        tag.style.backgroundColor = '#45B29D';
        tag.style.borderRadius = '10px';
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
    const tagLower = tag.toLowerCase();
    const index = selectedTags.indexOf(tagLower);
    
    // Toggle tag selection
    if (index > -1) {
        selectedTags.splice(index, 1); // Remove if already selected
        updateTagStyle(tag, false);
    } else {
        selectedTags.push(tagLower); // Add if not selected
        updateTagStyle(tag, true);
    }
    
    filterSections(); // Apply the filter
    clearSearch.style.display = (selectedTags.length > 0 || searchInput.value.trim() !== '') ? 'inline-block' : 'none';
}
function updateTagStyle(tag, isSelected) {
    const tagEl = document.getElementById(tag);
    if (tagEl) {
        tagEl.style.color = isSelected ? '#45B29D' : '#FFFFFF';
        tagEl.style.backgroundColor = isSelected ? '#3E3E3E' : '#45B29D';
        tagEl.style.borderRadius = '10px';
    }
}
function filterSections() {
    const searchText = searchInput.value.trim().toLowerCase();
    const noResultsMessage = document.getElementById('noResultsMessage');
    let anyVisible = false;

    sections.forEach(section => {
        const textMatch = section.textContent.toLowerCase().includes(searchText);

        const tagElement = section.querySelector('.tags');
        const tagsText = tagElement ? tagElement.innerText.toLowerCase() : '';

        // ✅ Require all selected tags to match
        const tagMatch = selectedTags.every(tag => tagsText.includes(tag));

        const show = (textMatch && tagMatch);
        section.style.display = show ? 'block' : 'none';

        if (show) anyVisible = true;
    });

    // ✅ Show message if nothing matched
    noResultsMessage.style.display = anyVisible ? 'none' : 'block';
}
