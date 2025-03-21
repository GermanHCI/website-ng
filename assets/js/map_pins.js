document.addEventListener('DOMContentLoaded', function() {
    console.log("arrived here");
    const universities = [
        { name: "Karlsruhe Institute of Technology", lat: 49.20, lon: 8.35},
        { name: "Universität Hamburg",lat:  53.5330, lon: 10.04 },
        { name: "Universität Bamberg", lat: 49.8938, lon: 10.8835},
        { name: 'Universität Bayreuth', lat:49.932807,lon:11.4913831},
        { name: "Ruhr-Universität Bochum", lat:51.4444, lon: 7.2587},
        { name: "University of Bremen", lat: 53.1565, lon: 8.9527 },
        { name: "TU Chemintz", lat: 50.8397,lon:12.9252},
        { name: "TU Darmstadt", lat: 50.02,lon: 8.6539},
        { name: "TU Dortmund", lat:51.5194, lon:7.4120},
        { name: "TU Dresden", lat: 51.0769, lon:13.6074},
        { name: "Frankfurt university of Applied Sciences", lat:50.3304, lon:8.6899},
        { name: "TU Freiberg", lat:50.9204, lon:13.2846},
        { name: "Leibniz Universität Hannover", lat:52.3822,lon:9.7152},
        { name: "Technische Hochschule Ingolstadt",lat: 48.7669, lon: 11.4300},
        { name: "University of Konstanz", lat:47.9584, lon: 8.4700},
        { name: "TH OWL", lat:52.0119, lon:8.88382},
        { name: "LMU Munich", lat: 48.1351, lon: 11.582 },
        { name: "Universität der Bundeswehr München", lat:47.981917 ,lon:11.5688443},
        { name: "Universität Oldenburg",lat:53.2397,lon: 8.0871},
        { name: "Hasso-Plattner Institute", lat:52.4114, lon:12.9874},
        { name: "Universität Regensburg", lat: 48.9968,lon:12.0932},
        { name: "Universität Stuttgart", lat: 48.7485, lon:9.1132 },
        { name: "Universität Ulm", lat: 48.4233, lon: 9.9195},
        { name: "Bauhaus-Universität Weimar", lat:50.9786, lon: 11.2979},
        { name: "Universität Würzburg", lat: 49.7886, lon: 9.9329},
        { name: 'RWTH Aachen', lat: 51.1075, lon: 6.3672},
        { name: 'Humboldt University of Berlin', lat:52.6181, lon:13.0938 },
        { name: "Saarland University", lat:49.555,lon:7.0306731}
    ];
    universities.forEach(uni => addPin(uni));
});
 
const mapBounds = {
    topLeft: { lat: 55.0079, lon: 5.98815 },
    bottomRight: { lat: 47.40724, lon: 14.98853 }
};

const svgDimensions = {
    width: 600,
    height: 800
};

function addPin(uni) {
    const coords = convertLatLonToXY(uni.lat, uni.lon);
    const svg = document.getElementById('germany-map');

    const pin = createPinImage();
    pin.setAttribute('x', coords.x); 
    pin.setAttribute('y', coords.y-2);
    pin.setAttribute('title', uni.name); 
    pin.classList.add('pin');

    // const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
    // text.setAttribute('x', coords.x + 5); // Position the text slightly to the right of the pin
    // text.setAttribute('y', coords.y - 5); // Position the text below the pin
    // text.textContent = uni.name;
    // text.classList.add('uni-name');
    // text.style.fill = "#2C5BA5"; // Text color initial, matches the pin
    // text.style.display = "none";

    pin.addEventListener('mouseenter', function() {
        pin.querySelector("circle").setAttribute("fill", "#E98737"); // Change to orange
        pin.querySelector("circle").setAttribute("stroke", "#E98737"); // Change border
        text.style.fill = "#E98737"; // Change text color to orange
        text.style.display = "block"; // show the text while hovering
    });

    pin.addEventListener('mouseleave', function() {
        pin.querySelector("circle").setAttribute("fill", "#2C5BA5"); // Back to original blue
        pin.querySelector("circle").setAttribute("stroke", "#2C5BA5"); // Reset border
        text.style.fill = "#2C5BA5"; // Reset text color to blue
        text.style.display = "none"; // Hide the text when mouse leaves
    });

    pin.addEventListener('click', function() {
        const element = document.getElementById(uni.name);
        const offset = 70; 
        const elementPosition = element.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
        });
        console.log(`University: ${uni.name}`);
    });
    
    svg.appendChild(pin);
    

    const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
    text.setAttribute('x', coords.x + 5); // Position the text slightly to the right of the pin
    text.setAttribute('y', coords.y - 5); // Position the text slightly above the pin
    text.textContent = uni.name;
    text.classList.add('uni-name'); //corressponding css
    text.style.fill = "#2C5BA5";
    text.style.backgroundColor = "#2C5BA5"; 
    text.style.display = "none";
    svg.appendChild(text);
}


function convertLatLonToXY(lat, lon) {
    const x = ((lon - mapBounds.topLeft.lon) / (mapBounds.bottomRight.lon - mapBounds.topLeft.lon)) * svgDimensions.width;
    const y = ((mapBounds.topLeft.lat - lat) / (mapBounds.topLeft.lat - mapBounds.bottomRight.lat)) * svgDimensions.height;
    return { x, y };
}


function createPinImage() {
    const xmlns = "http://www.w3.org/2000/svg";
    const svgElem = document.createElementNS(xmlns, "svg");
    svgElem.setAttribute("width", "16");
    svgElem.setAttribute("height", "16");
    svgElem.setAttribute("viewBox", "0 0 16 16");
    svgElem.setAttribute("fill", "none");

    const circle = document.createElementNS(xmlns, "circle");
    circle.setAttribute("cx", "8");
    circle.setAttribute("cy", "8"); 
    circle.setAttribute("r", "5"); 
    circle.setAttribute("fill", "#2C5BA5"); 
    circle.setAttribute("stroke", "#2C5BA5");

    svgElem.appendChild(circle);
    return svgElem;
}

function moveTo(name){
    console.log(`${name}`); 
    const offset = 70; 
    const element = document.getElementById(name);
    if (element) {
        // Get the position of the element relative to the viewport
        const rect = element.getBoundingClientRect();
        // Scroll to the element's top position adjusted by the offset
        window.scrollTo({ top: window.scrollY + rect.top - offset, behavior: 'smooth' });
    } else {
        console.error(`Element with ID "${name}" not found.`);
    }
}
// Get the button:
let mybutton = document.getElementById("topBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
    // mybutton.style.position = "absolute";
  } else {
    mybutton.style.display = "none";
    // mybutton.style.position = "fixed";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
