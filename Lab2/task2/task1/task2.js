let svg = d3.select(".graphic")
            .append("svg")
            .attr("width", "600")
            .attr("height", "600");
let centerX = svg.attr("width") / 2;
let centerY = svg.attr("height") / 2;

let amplX = centerX * 0.9;
let amplY = centerY * 0.9;
let W1 = 2;
let W2 = 1;
let PHASE = 40.06;
let RADIUS = 7;
let r;
let flag = true;


function Draw() {
    if (!flag) {
        return;
    }
    flag = false;

    if (svg.selectAll("circle").length !== 0) {
        svg.selectAll("circle").remove();
    }

    svg.append("circle")
        .attr("cx", centerX + Math.cos(W1 * 0) * amplX)
        .attr("cy", centerY + Math.cos(W2 * 0 + PHASE) * amplY)
        .attr("r", RADIUS);
    
    let phase = 0;
    r = setInterval(() => {
        phase += Math.PI / 100
        svg.select("circle")
            .attr("cx", centerX + Math.cos(W1 * phase) * amplX)
            .attr("cy", centerY + Math.cos(W2 * phase + PHASE) * amplY)
            .attr("r", RADIUS);
    }, 100);
}