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

function isArgument(argument) {
    return argument !== undefined && argument !== null;
}

function paramOrDefault(parameter, defaultVariable) {
    return isArgument(parameter) ? parameter : defaultVariable;
}

function displayName(name) {
    var currentDiagram = nameSpace.toSnakeCase() + '__' + name.toSnakeCase();
    $('#current-diagram').text(currentDiagram);
}

String.prototype.toSnakeCase = function() {
    return this.replace(/([A-Z])/g, function($1) {
        return "_" + $1.toLowerCase();
    });
};

function displaySvgContents() {
    $('#svg-contents').val(document.getElementsByTagName('svg')[0].innerHTML);
}

function getUrl(id) {
    return 'url(#' + id + ')';
}

function getQueryParam(param, url) {
    if (!url) {
        url = window.location.href.replace(/\/$/, '');
    }

    param = param.replace(/[\[\]]/g, "\\$&");

    var regex = new RegExp("[?&]" + param + "(=([^&#]*)|&|#|$)");
    var results = regex.exec(url);

    if (!results) return null;
    if (!results[2]) return '';

    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function displayError(errorMessage) {
    $('.error').text(errorMessage).css('display', 'inline-block');
}

function copyToClipboard(element) {
    var $temp = $('<input>');
    $('body').append($temp);
    $temp.val($(element).val()).select();
    document.execCommand('copy');
    $temp.remove();
}

var nextDiagramIndex = 0;

function drawNextDiagram() {
    replaceSVG();

    if (window.svgWidth && window.svgHeight) {
        setSVGDimensions(svgWidth, svgHeight);
    }

    setUp();

    diagramFunctions[nextDiagramIndex]();

    displayName(diagramFunctions[nextDiagramIndex].name);
    displaySvgContents();

    tearDown();

    nextDiagramIndex += 1;
    if (nextDiagramIndex === diagramFunctions.length) {
        nextDiagramIndex = 0;
    }
};
