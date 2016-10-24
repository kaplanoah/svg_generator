var svg = $('svg');

function toggleBorder() {
    $('.diagram-frame').toggleClass('border');
}

function setSVGDimensions(width, height) {
    svg.attr({
        'width' : width,
        'height': height,
    });
}

function replaceSVG() {
    $('.diagram-frame').empty();
    $('.diagram-frame').append('<div class="diagram image">\n\t<svg></svg>\n</div>')
    svg = $('svg');
}

function displayName(name) {
    $('#current-diagram').text(name);
}
