function round(value) {
    // http://www.jacklmoore.com/notes/rounding-in-javascript/
    return Number(Math.round(value + 'e1') + 'e-1');
}

function xof(i, coordinates) {
    return coordinates[i][0];
}

function yof(i, coordinates) {
    return coordinates[i][1];
}

function randRange(lower, upper) {
    return Math.floor(Math.random() * (upper - lower + 1) + lower);
}

function randSign() {
    return Math.random() < 0.5 ? -1 : 1;
}
