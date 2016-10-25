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

function getQueryStringParameter(parameter, url) {
    if (!url) {
      url = window.location.href;
    }

    parameter = parameter.replace(/[\[\]]/g, "\\$&");

    var regex = new RegExp("[?&]" + parameter + "(=([^&#]*)|&|#|$)");
    var results = regex.exec(url);

    if (!results) return null;
    if (!results[2]) return '';

    return decodeURIComponent(results[2].replace(/\+/g, " "));
}