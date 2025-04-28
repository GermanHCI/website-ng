document.addEventListener('DOMContentLoaded', function() {
    console.log("arrived here");
    const universities = [
        // add new lab locations here 
        // {name: ,lat: ,lon: },
        { name: "Karlsruhe Institute of Technology", lat: 49.20, lon: 8.35},
        { name: "Universität Hamburg",lat:  53.5330, lon: 10.04 },
        { name: "Universität Bamberg", lat: 49.8938, lon: 10.8835},
        { name: 'Universität Bayreuth', lat:49.932807,lon:11.4913831},
        { name: "Ruhr-Universität Bochum", lat:51.4444, lon: 7.2587},
        { name: "Universität Bremen", lat: 53.1565, lon: 8.9527 },
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
        { name: "Saarland University", lat:49.555,lon:7.0306731},
        { name: "Hochschule Anhalt (Köthen)", lat: 51.8548, lon:12.1048},
        { name: "Hochschule Heilbronn",lat: 49.1356, lon:9.1917 },
        { name: "OFFIS – Institute for Information Technology (Oldenburg)", lat: 53.2434, lon: 8.2611},
        { name: "University of Duisburg-Essen", lat: 51.4278, lon:6.6471},
        { name: "Universität Potsdam",lat: 52.4393,lon: 12.7376},
        { name: "Universität Siegen", lat: 50.9964, lon: 8.1595},
        { name: "Universität zu Lübeck", lat: 53.9911, lon: 10.5751}
        
    ];
    if (document.getElementById("germany-map")) {
        universities.forEach(uni => addPin(uni));
    }

    if (document.getElementById("germany-map-home")) {
        universities.forEach(uni => addPinHome(uni));
    }
});
 
const mapBounds = {
    topLeft: { lat: 55.0079, lon: 5.98815 },
    bottomRight: { lat: 47.40724, lon: 14.98853 }
};


function getSvgSize() {
    const svg = document.getElementById("germany-map");
    const viewBox = svg.viewBox.baseVal;
    const boundingBox = svg.getBoundingClientRect();
    return {
        width: boundingBox.width,
        height: boundingBox.height,
        viewBoxWidth: viewBox.width,
        viewBoxHeight: viewBox.height
    };
}


function addPin(uni) {
    const coords = convertLatLonToXY(uni.lat, uni.lon);
    const svg = document.getElementById('germany-map');
    const svgRect = svg.getBoundingClientRect(); //gets svg coordinates
    const quickAccessLink = document.getElementById(`${uni.name.replace(/\s+/g, '-')}-link`); // accessing quick access

    const pin = createPinImage();
    pin.setAttribute("id", `${uni.name.replace(/\s+/g, '-')}-pin`);
    pin.setAttribute('x', coords.x); 
    pin.setAttribute('y', coords.y-2);
    pin.setAttribute('title', uni.name); 
    pin.classList.add('pin');

    pin.addEventListener('mouseenter', function() {
        pin.querySelector("circle").setAttribute("fill", "#E98737"); 
        pin.querySelector("circle").setAttribute("stroke", "#E98737"); 
        textDiv.style.display = "block";
        if (quickAccessLink) {
            quickAccessLink.style.color = "#E98737"; 
            quickAccessLink.style.fontWeight = "bold"; 
        }
    });

    pin.addEventListener('mouseleave', function() {
        pin.querySelector("circle").setAttribute("fill", "#2C5BA5"); 
        pin.querySelector("circle").setAttribute("stroke", "#2C5BA5"); 
        textDiv.style.display = "none";
        if (quickAccessLink) {
            quickAccessLink.style.color = "rgb(3, 34, 46)"; 
            quickAccessLink.style.fontWeight = "normal"; 
        }
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
    
    const textDiv = document.createElement("div");
    // textDiv.classList.add("uni-label"); 
    // textDiv.textContent = uni.name;
    // textDiv.style.position = "absolute";
    // textDiv.style.left = `${svgRect.left + coords.x + 15 }px`;  
    // textDiv.style.top = `${svgRect.top + coords.y - 30}px`; 
    // textDiv.style.maxWidth = "150px";  
    // textDiv.style.backgroundColor = "#E98737";  
    // textDiv.style.color = "#FFFFFF"; 
    // textDiv.style.padding = "5px";  
    // textDiv.style.borderRadius = "5px";  
    // textDiv.style.display = "none"; 
    // textDiv.style.fontSize = "12px";
    // textDiv.style.wordWrap = "break-word";
    // textDiv.style.zIndex = "1000"; 
    textDiv.setAttribute("id", `${uni.name.replace(/\s+/g, '-')}-label`);
    
    document.body.appendChild(textDiv);
}

function convertLatLonToXY(lat, lon) {
    const { viewBoxWidth, viewBoxHeight } = getSvgSize();
    const x = ((lon - mapBounds.topLeft.lon) / (mapBounds.bottomRight.lon - mapBounds.topLeft.lon)) * viewBoxWidth;
    const y = ((mapBounds.topLeft.lat - lat) / (mapBounds.topLeft.lat - mapBounds.bottomRight.lat)) * viewBoxHeight;
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

function moveTo(name) {
    console.log(`${name}`); 
    const offset = 70; 
    const element = document.getElementById(name);
    console.log("Found element:", element);
    if (element) {
        // Get the position of the element relative to the viewport
        const rect = element.getBoundingClientRect();
        // Scroll to the element's top position adjusted by the offset
        console.log("Scrolling to:", window.scrollY + rect.top - offset);
        window.scrollTo({ top: window.scrollY + rect.top - offset, behavior: 'smooth'});
    } else {
        console.error(`Element with ID "${name}" not found.`);
    }
}

function highlightPin(uniName) {
    const pin = document.getElementById(`${uniName.replace(/\s+/g, '-')}-pin`);
    const label = document.getElementById(`${uniName.replace(/\s+/g, '-')}-label`);
    const quickAccessLink = document.getElementById(`${uniName.replace(/\s+/g, '-')}-link`);
    quickAccessLink.style.color = "#E98737"; 
    quickAccessLink.style.fontWeight = "bold"; 
    if (pin) {
        pin.querySelector("circle").setAttribute("fill", "#E98737");
        pin.querySelector("circle").setAttribute("stroke", "#E98737");
    }
    if (window.innerWidth <= 768) {
        label.style.display = "none";
    }
    else{
        if (label) {
            label.style.display = "block"; // Show university name
        }
    }

}

function resetPin(uniName) {
    const pin = document.getElementById(`${uniName.replace(/\s+/g, '-')}-pin`);
    const label = document.getElementById(`${uniName.replace(/\s+/g, '-')}-label`);
    const quickAccessLink = document.getElementById(`${uniName.replace(/\s+/g, '-')}-link`);
    quickAccessLink.style.color = "rgb(3, 34, 46)"; 
    quickAccessLink.style.fontWeight = "normal"; 
    if (pin) {
        pin.querySelector("circle").setAttribute("fill", "#2C5BA5");
        pin.querySelector("circle").setAttribute("stroke", "#2C5BA5");
    }

    if (label) {
        label.style.display = "none"; // Hide university name
    }
}

function readMore(link){
    let summary = link.parentNode.querySelector(".summary");
    let fullText = link.parentNode.querySelector(".full-text");

    if (summary.style.display === "none") {
      summary.style.display = "inline";
      fullText.style.display = "none";
      link.textContent = "Read more";
    } else {
      summary.style.display = "none";
      fullText.style.display = "inline";
      link.textContent = "Read less";
    }
}

function getSvgSizeHome() {
    const svg = document.getElementById("germany-map-home");
    const viewBox = svg.viewBox.baseVal;
    const boundingBox = svg.getBoundingClientRect();
    return {
        width: boundingBox.width,
        height: boundingBox.height,
        viewBoxWidth: viewBox.width,
        viewBoxHeight: viewBox.height
    };
}
function convertLatLonToXYHome(lat, lon) {
    const { viewBoxWidth, viewBoxHeight } = getSvgSizeHome();
    const x = ((lon - mapBounds.topLeft.lon) / (mapBounds.bottomRight.lon - mapBounds.topLeft.lon)) * viewBoxWidth;
    const y = ((mapBounds.topLeft.lat - lat) / (mapBounds.topLeft.lat - mapBounds.bottomRight.lat)) * viewBoxHeight;
    return { x, y };
}

function addPinHome(uni) {
    const coords = convertLatLonToXYHome(uni.lat, uni.lon);
    const svg = document.getElementById('germany-map-home');
    const svgRect = svg.getBoundingClientRect(); 

    const pin = createPinImage();
    pin.setAttribute("id", `${uni.name.replace(/\s+/g, '-')}-pin`);
    pin.setAttribute('x', coords.x); 
    pin.setAttribute('y', coords.y-2);
    pin.setAttribute('title', uni.name); 
    pin.classList.add('pin');

    pin.addEventListener('mouseenter', function() {
        pin.querySelector("circle").setAttribute("fill", "#E98737"); 
        pin.querySelector("circle").setAttribute("stroke", "#E98737"); 
        textDiv.style.display = "block";
    });

    pin.addEventListener('mouseleave', function() {
        pin.querySelector("circle").setAttribute("fill", "#2C5BA5"); 
        pin.querySelector("circle").setAttribute("stroke", "#2C5BA5"); 
        textDiv.style.display = "none";
    });
    
    svg.appendChild(pin);
    
    const textDiv = document.createElement("div");
    // textDiv.classList.add("uni-label"); 
    // textDiv.textContent = uni.name;
    // textDiv.style.position = "absolute";
    // textDiv.style.left = `${svgRect.left + coords.x + 15 }px`;  
    // textDiv.style.top = `${svgRect.top + coords.y - 30}px`;  
    // textDiv.style.maxWidth = "150px";  
    // textDiv.style.backgroundColor = "#E98737";  
    // textDiv.style.color = "#FFFFFF"; 
    // textDiv.style.padding = "5px";  
    // textDiv.style.borderRadius = "5px";  
    // textDiv.style.display = "none"; 
    // textDiv.style.fontSize = "12px";
    // textDiv.style.wordWrap = "break-word";
    // textDiv.style.zIndex = "1000"; 
    textDiv.setAttribute("id", `${uni.name.replace(/\s+/g, '-')}-label`);
    // if (window.innerWidth <= 768) {
    //     textDiv.style.display = "none";
    // }
    document.body.appendChild(textDiv);
}
