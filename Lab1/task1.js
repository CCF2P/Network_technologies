let a = prompt();

if (isNaN(parseFloat(a)) || !isFinite(a)) {
    document.write('Сумма max и min = 0');
}
else {
    let max = parseFloat(a);
    let min = parseFloat(a);

    while (!(isNaN(parseFloat(a)) || !isFinite(a))) {
        if (a > max) {
            max = a;
        }
        if (a < min) {
            min = a;
        }
        a = parseFloat(prompt());
    }

    document.write(`Сумма max и min = ${max + min}`);
}