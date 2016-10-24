function roundDown(n) {
    return Math.round(n*10) / 10;
}

function xof(i, coordinates) {
    return coordinates[i][0];
}

function yof(i, coordinates) {
    return coordinates[i][1];
}

function getMaskUrl(id) {
    return 'url(#' + id + ')';
}

function randRange(lower, upper) {
    return Math.floor(Math.random() * (upper - lower + 1) + lower);
}

function randSign() {
    return Math.random() < 0.5 ? -1 : 1;
}
