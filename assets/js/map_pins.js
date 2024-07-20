document.addEventListener('DOMContentLoaded', function() {
    const cities = [
        { name: 'Berlin', lat: 52.52, lon: 13.405 },
        { name: 'Hamburg', lat: 53.5511, lon: 9.9937 },
        { name: 'Munich', lat: 48.1351, lon: 11.582 },
        { name: 'Cologne', lat: 50.9375, lon: 6.9603 },
        { name: 'Frankfurt', lat: 50.1109, lon: 8.6821 },
        { name: 'Aachen', lat:50.7753, lon:6.0839}
        // Add more cities as needed
    ];

    cities.forEach(city => addPin(city));
});

const mapBounds = {
    topLeft: { lat: 55.0079, lon: 5.98815 },
    bottomRight: { lat: 47.40724, lon: 14.98853 }
};

const svgDimensions = {
    width: 600,
    height: 800
};

function addPin(city) {
    const coords = convertLatLonToXY(city.lat, city.lon);
    const svg = document.getElementById('germany-map');

    const pin = createPinImage();
    pin.setAttribute('x', coords.x - 12); // Adjust position to center the pin
    pin.setAttribute('y', coords.y - 45);
    pin.setAttribute('title', city.name); 
    pin.classList.add('pin');
    pin.addEventListener('click', function() {
        document.getElementById( city.name).scrollIntoView({ behavior: 'smooth' });
    });
    svg.appendChild(pin);

    const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
    text.setAttribute('x', coords.x + 10); // Position the text slightly to the right of the pin
    text.setAttribute('y', coords.y - 5); // Position the text slightly above the pin
    text.textContent = city.name;
    text.classList.add('city-name'); //corressponding css
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
