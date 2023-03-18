function ForOdd(n) {
    let html = '<div><table>';
    let astralStep = Math.trunc(n / 2);
    for (let i = 0; i < Math.trunc(n / 2); i++) {
        html += '<tr>';
        for (let j = 0; j < n; j++) {
            if (j == i) {
                html += '<td class="GreyCock"></td>';
            }
            else if (j == i + astralStep) {
                html += '<td class="GreyCock"></td>';
            }
            else {
                html += '<td></td>';
            }
        }
        html += '</tr>';
    }

    // вставить хХх_-х_у_й-_хХх
    html += '<tr>';
    for (let j = 0; j < n; j++) {
        if (j == 0) {
            html += '<td class="GreyCock"></td>';
        }
        else if (j == 0 + astralStep) {
            html += '<td class="GreyCock"></td>';
        }
        else if (j == 0 + astralStep * 2) {
            html += '<td class="GreyCock"></td>';
        }
        else {
            html += '<td></td>';
        }
    }
    html += '</tr>';

    for (let i = Math.trunc(n / 2); i > 0; i--) {
        html += '<tr>';
        for (let j = 0; j < n; j++) {
            if (j == i - 1) {
                html += '<td class="GreyCock"></td>';
            }
            else if (j == i + astralStep - 1) {
                html += '<td class="GreyCock"></td>';
            }
            else {
                html += '<td></td>';
            }
        }
        html += '</tr>';
    }

    html += '</table></div>';
    return html;
}


function ForEven(n) {
    let html = '<div><table>';
    let astralStep = Math.trunc(n / 2);
    for (let i = 0; i < Math.trunc(n / 2); i++) {
        html += '<tr>';
        for (let j = 0; j < n; j++) {
            if (j == i) {
                html += '<td class="GreyCock"></td>';
            }
            else if (j == i + astralStep) {
                html += '<td class="GreyCock"></td>';
            }
            else {
                html += '<td></td>';
            }
        }
        html += '</tr>';
    }

    for (let i = Math.trunc(n / 2); i > 0; i--) {
        html += '<tr>';
        for (let j = 0; j < n; j++) {
            if (j == i - 1) {
                html += '<td class="GreyCock"></td>';
            }
            else if (j == i + astralStep - 1) {
                html += '<td class="GreyCock"></td>';
            }
            else {
                html += '<td></td>';
            }
        }
        html += '</tr>';
    }

    html += '</table></div>';
    return html;
}


let n = prompt();

if (isNaN(parseFloat(n)) || !isFinite(n) ||
    Number(n) <= 2 || Number(n) >= 15 || Number(n) % 1 != 0) {
    alert('Ошибка: 2 < n < 15');
}
else {
    let html = '';
    n = parseInt(n);

    for (let i = 1; i <= n; i++) {
        html += `<hr width="${100 / i}">`
    }

    if (n / 2 % 1 != 0) {
        html += ForOdd(n);
    }
    else {
        html += ForEven(n);
    }

    for (let i = n; i >= 1; i--) {
        html += `<hr width="${100 / i}">`
    }

    document.write(html);
}