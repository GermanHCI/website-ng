document.addEventListener('DOMContentLoaded', function() {
    const cities = [
        { name: 'Berlin', lat: 52.52, lon: 13.405 },
        { name: 'Hamburg', lat: 53.5511, lon: 9.9937 },
        { name: 'Munich', lat: 48.1351, lon: 11.582 },
        { name: 'Cologne', lat: 50.9375, lon: 6.9603 },
        { name: 'Frankfurt', lat: 50.1109, lon: 8.6821 }
        // Add more cities as needed
    ];

    cities.forEach(city => addPin(city));
});

const mapBounds = {
    topLeft: { lat: 55.1079, lon: 6.20015 },
    bottomRight: { lat: 47.60724, lon: 15.00053 }
};

const svgDimensions = {
    width: 600,
    height: 800
};

function addPin(city) {
    const coords = convertLatLonToXY(city.lat, city.lon);
    const svg = document.getElementById('germany-map');

    const pin = createPinImage();
    pin.setAttribute('x', coords.x - 22.5); // Adjust position to center the pin
    pin.setAttribute('y', coords.y - 45);
    pin.classList.add('pin');
    pin.setAttribute('title', city.name); // Add a tooltip for the city name
    
    svg.appendChild(pin);
    // const pin = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    // pin.setAttribute('cx', coords.x);
    // pin.setAttribute('cy', coords.y);
    // pin.setAttribute('r', 5);
    // pin.classList.add('pin');
    // pin.setAttribute('title', city.name); // Add a tooltip for the city name
    // svg.appendChild(pin);
}

function convertLatLonToXY(lat, lon) {
    const x = ((lon - mapBounds.topLeft.lon) / (mapBounds.bottomRight.lon - mapBounds.topLeft.lon)) * svgDimensions.width;
    const y = ((mapBounds.topLeft.lat - lat) / (mapBounds.topLeft.lat - mapBounds.bottomRight.lat)) * svgDimensions.height;
    return { x, y };
}

function createPinImage() {
    const xmlns = "http://www.w3.org/2000/svg";
    const svgElem = document.createElementNS(xmlns, "svg");
    svgElem.setAttribute("width", "45");
    svgElem.setAttribute("height", "45");
    svgElem.setAttribute("viewBox", "0 0 45 45");
    svgElem.setAttribute("fill", "none");
    svgElem.setAttribute("xmlns", xmlns);

    const gElem1 = document.createElementNS(xmlns, "g");
    gElem1.setAttribute("clip-path", "url(#clip0_97_2)");

    const gElem2 = document.createElementNS(xmlns, "g");
    gElem2.setAttribute("clip-path", "url(#clip1_97_2)");

    const pathElem1 = document.createElementNS(xmlns, "path");
    pathElem1.setAttribute("d", "M27.4745 44.7023C27.1989 44.7023 26.9751 44.4791 26.9751 44.203V20.5296C26.9751 20.254 27.1989 20.0303 27.4745 20.0303C27.7501 20.0303 27.9739 20.254 27.9739 20.5296V44.203C27.9739 44.4791 27.7501 44.7023 27.4745 44.7023Z");
    pathElem1.setAttribute("fill", "#66676B");

    const pathElem2 = document.createElementNS(xmlns, "path");
    pathElem2.setAttribute("d", "M27.4752 20.5296C33.076 20.5296 37.6164 15.9893 37.6164 10.3884C37.6164 4.78762 33.076 0.247253 27.4752 0.247253C21.8744 0.247253 17.334 4.78762 17.334 10.3884C17.334 15.9893 21.8744 20.5296 27.4752 20.5296Z");
    pathElem2.setAttribute("fill", "#FFCC00");

    const pathElem3 = document.createElementNS(xmlns, "path");
    pathElem3.setAttribute("d", "M30.9696 9.39117C32.3488 9.39117 33.4669 8.27305 33.4669 6.89378C33.4669 5.51451 32.3488 4.39639 30.9696 4.39639C29.5903 4.39639 28.4722 5.51451 28.4722 6.89378C28.4722 8.27305 29.5903 9.39117 30.9696 9.39117Z");
    pathElem3.setAttribute("fill", "white");

    gElem2.appendChild(pathElem1);
    gElem2.appendChild(pathElem2);
    gElem2.appendChild(pathElem3);

    gElem1.appendChild(gElem2);
    svgElem.appendChild(gElem1);

    const defsElem = document.createElementNS(xmlns, "defs");

    const clipPathElem1 = document.createElementNS(xmlns, "clipPath");
    clipPathElem1.setAttribute("id", "clip0_97_2");
    const rectElem1 = document.createElementNS(xmlns, "rect");
    rectElem1.setAttribute("width", "45");
    rectElem1.setAttribute("height", "45");
    rectElem1.setAttribute("fill", "white");
    clipPathElem1.appendChild(rectElem1);

    const clipPathElem2 = document.createElementNS(xmlns, "clipPath");
    clipPathElem2.setAttribute("id", "clip1_97_2");
    const rectElem2 = document.createElementNS(xmlns, "rect");
    rectElem2.setAttribute("width", "45");
    rectElem2.setAttribute("height", "45");
    rectElem2.setAttribute("fill", "white");
    rectElem2.setAttribute("transform", "translate(5)");
    clipPathElem2.appendChild(rectElem2);

    defsElem.appendChild(clipPathElem1);
    defsElem.appendChild(clipPathElem2);

    svgElem.appendChild(defsElem);

    return svgElem;
}
