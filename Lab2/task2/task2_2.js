let svg = d3.select(".graphic")
            .append("svg")
            .attr("width", "640")
            .attr("height", "480");
let centerX = svg.attr("width") / 2;
let centerY = svg.attr("height") / 2;

let xScale = d3.scale.linear()
    .domain([0, 5])
    .range([25, 555]);

let xAxis = d3.svg.axis()
    .scale(xScale)
    .orient("bottom");

svg.append("g")
    .call(xAxis);

function drawGraphic(a, b) {
    if (isNaN(parseFloat(a)) || !isFinite(a)) {
        alert("a должно быть вещественным числом");
        return;
    }
    if (isNaN(parseFloat(b)) || !isFinite(b)) {
        alert("b должно быть вещественным числом");
        return;
    }

    a = Number(a);
    b = Number(b);
    if (a >= b) {
        alert("a должно быть меньше b");
        return;
    }

    functionValue = getDataForGraphic(a, b);
    svg.selectAll(".dot")
        .data(arrGraph)
        .enter()
        .append("circle")
        .attr("r", 3.5)
        .attr("cx", function(d) { return scaleX(d.x); })
        .attr("cy", function(d) { return scaleY(d.f); })
        .attr("transform", `translate(${marginX}, ${marginY})`)
        .style("fill", "red")

}


function f(x) {
    return Math.sqrt((x - 1) / x);
}


function getDataForGraphic(a, b) {
    let functionValue = [];
    let e = 0.01;
    for (let i = a; i <= b; i += e) {
        functionValue.push([i, f(i)]);
    }
    return functionValue;
}