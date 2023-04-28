let svg = d3.select(".graphic")
            .append("svg")
            .attr("width", "640")
            .attr("height", "480");
let centerX = svg.attr("width") / 2;
let centerY = svg.attr("height") / 2;

let amplX = centerX * 0.9;
let amplY = centerY * 0.9;
let W1 = 2;
let W2 = 1;
let PHASE = 40;
let RADIUS = 5;


function setCircle(x, y) {
    svg.append("circle")
        .attr("cx", x)
        .attr("cy", y)
        .attr("r", RADIUS);
}


function Draw(count) {
    if (count.length === 0) {
        return;
    }
    if (isNaN(parseFloat(count)) || !isFinite(count) || count < 1) {
        alert("Количество должно быть числом большем или равным 1.");
        return;
    }
    count = Number(count);

    if (svg.selectAll("circle").length !== 0) {
        svg.selectAll("circle").remove();
    }

    let c = 0;
    let phaseAgain = W1 * W2 * Math.PI * 2.0;
    for (let phase = 0; phase < phaseAgain; phase += Math.PI / 100) {
        setCircle(centerX + Math.cos(W1 * phase) * amplX,
            centerY + Math.cos(W2 * phase + PHASE) * amplY);
        c++;
        sleep(1000);
        if (c === 2) {
            document.querySelectorAll("circle")[0].remove();
            c = 0;
        }
    }
}


function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }