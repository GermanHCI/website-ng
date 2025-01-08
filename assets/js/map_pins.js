document.addEventListener('DOMContentLoaded', function() {
    console.log("arrived here");
    const universities = [
        { name: 'TU Berlin', lat: 52.52, lon: 13.405 },
        { name: 'TU Hamburg', lat: 53.5511, lon: 9.9937 },
        { name: 'TU Munich', lat: 48.1351, lon: 11.582 },
        { name: 'Cologne', lat: 50.9375, lon: 6.9603 },
        { name: 'Universitat Bayreuth', lat: 50.1109, lon: 8.6821 },
        { name: 'RWTH Aachen', lat:50.7753, lon:6.0839}
        // Add more cities as needed
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
    pin.setAttribute('x', coords.x - 12); // Adjust position to center the pin
    pin.setAttribute('y', coords.y - 45);
    pin.setAttribute('title', uni.name); 
    pin.classList.add('pin');
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
    text.setAttribute('x', coords.x + 10); // Position the text slightly to the right of the pin
    text.setAttribute('y', coords.y - 5); // Position the text slightly above the pin
    text.textContent = uni.name;
    text.classList.add('uni-name'); //corressponding css
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
    svgElem.setAttribute("width", "32");
    svgElem.setAttribute("height", "55");
    svgElem.setAttribute("viewBox", "0 0 32 55");
    svgElem.setAttribute("fill", "none");
    svgElem.setAttribute("xmlns", xmlns);

    const circle1 = document.createElementNS(xmlns, "circle");
    circle1.setAttribute("cx", "16");
    circle1.setAttribute("cy", "16");
    circle1.setAttribute("r", "15");
    circle1.setAttribute("fill","none");
    circle1.setAttribute("stroke", "#E98737");
    circle1.setAttribute("stroke-width", "2");

    const circle2 = document.createElementNS(xmlns, "circle");
    circle2.setAttribute("cx", "15.5");
    circle2.setAttribute("cy", "16.5");
    circle2.setAttribute("r", "8");
    circle2.setAttribute("fill", "#E98737");
    circle2.setAttribute("stroke", "#E98737");

    const line = document.createElementNS(xmlns, "line");
    line.setAttribute("x1", "16");
    line.setAttribute("y1", "55");
    line.setAttribute("x2", "16");
    line.setAttribute("y2", "30");
    line.setAttribute("stroke", "#E98737");
    line.setAttribute("stroke-width", "4");

    svgElem.appendChild(circle1);
    svgElem.appendChild(circle2);
    svgElem.appendChild(line);

    return svgElem;
}
// pin.addEventListener('click', function() {
//         document.getElementById(uni.name).scrollIntoView({ behavior: 'smooth' });
//         console.log(`University: ${uni.name}`);
   
// });

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