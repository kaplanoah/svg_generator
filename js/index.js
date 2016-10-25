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

function getMaskUrl(id) {
    return 'url(#' + id + ')';
}

function getQueryParam(param, url) {
    if (!url) {
      url = window.location.href;
    }

    param = param.replace(/[\[\]]/g, "\\$&");

    var regex = new RegExp("[?&]" + param + "(=([^&#]*)|&|#|$)");
    var results = regex.exec(url);

    if (!results) return null;
    if (!results[2]) return '';

    return decodeURIComponent(results[2].replace(/\+/g, " ")).replace(/\/$/, '');
}

function setQueryString(param, value) {
    window.location.href = window.location.href.split(/[?#]/)[0] + '?' + param + '=' + value;
}

function displayError(errorMessage) {
    $('.error').text(errorMessage).css('display', 'inline-block');
}
