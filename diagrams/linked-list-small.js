
// dynamic styles and attributes

var svgWidth  = 274;
var svgHeight = 80;

var topMargin = 40;
var leftMargin = 10;

var mathFont = 'serif';

var nodeWidth = 13;
var nodeSpacing = 40;
var nodeRadius = 4;

var arrowCurve = 6;
var arrowSpacingStart = 2;
var arrowSpacingEnd = 3;
var arrowWidth = 1;
var arrowOffset = 1;
var arrowPointAngle = 151;
var arrowPointLength = 5;

var stickEndWidth = 8;
var stickOffset = 17;
var stickEndRadius = 1.5;
var stickLabelOffset = 6;
var stickLastHeight = 93;

var lineLabelSize = '10px';
var stickLabelSize = '11px';
var mathLabelSize = '14px';

var listStartX = leftMargin;
var lineEndX = leftMargin + nodeWidth + 6 * nodeSpacing;

var kLabelOffset = stickOffset + 0;
var kx = leftMargin + 2 * nodeSpacing + nodeWidth / 2;
var klastx = leftMargin + 6 * nodeSpacing + nodeWidth / 2 - 2 * nodeSpacing;
var ky = topMargin + nodeWidth + 47;
var kHeight = 126;

var ny = topMargin - 15;
var nHeight = 62;

var bottomGap = 2.4;
var labelOffset = 9;
var bottomOffset = labelOffset + 10;



// functions for drawing diagrams

function drawNodes() {

    for (var i=0; i < 7; i++) {
        var nodex = leftMargin + i * nodeSpacing;
        var nodey = topMargin;

        generateRect(nodex, nodey, nodeWidth, nodeWidth, nodeRadius, transparent, null, 1);

        if (i < 6) {
            var fromx = nodex + nodeWidth + arrowSpacingStart;
            var fromy = nodey + nodeWidth / 2 - arrowOffset;

            var tox = leftMargin + (i + 1) * nodeSpacing - arrowSpacingEnd;
            var toy = fromy;

            var angleCurveToEnd = drawArrow(fromx, fromy, tox, toy, arrowCurve);

            var pointaAngle = angleCurveToEnd - arrowPointAngle * Math.PI / 180;
            var pointbAngle = angleCurveToEnd + arrowPointAngle * Math.PI / 185;

            drawArrowHead(tox, toy, pointaAngle, pointbAngle, arrowWidth);
        }
    }
}

function drawArrow(fromx, fromy, tox, toy, curve) {

    var middlex = (fromx + tox) / 2;
    var middley = (fromy + toy) / 2;

    var curvex = middlex;
    var curvey = middley - curve;

    generateQuadraticPath(fromx, fromy, curvex, curvey, tox, toy, null, arrowWidth);

    var deltax = tox - curvex;
    var deltay = toy - curvey;

    var angleCurveToEnd = Math.atan(deltay / deltax);

    return angleCurveToEnd;
}

function drawArrowHead(headx, heady, pointaAngle, pointbAngle, width) {

    var pointax = headx + arrowPointLength * Math.cos(pointaAngle);
    var pointay = heady + arrowPointLength * Math.sin(pointaAngle);

    var pointbx = headx + arrowPointLength * Math.cos(pointbAngle);
    var pointby = heady + arrowPointLength * Math.sin(pointbAngle);

    generateLine(headx, heady, pointax, pointay, darkColor, width);
    generateLine(headx, heady, pointbx, pointby, darkColor, width);
}

function drawStick(startNode, endNode) {

    var stickStart = leftMargin + startNode * nodeSpacing + nodeWidth / 2;
    var stickEnd   = leftMargin + endNode   * nodeSpacing + nodeWidth / 2;
    var y = topMargin - stickOffset;

    generateText('STICK', (stickStart + stickEnd) / 2, topMargin - stickOffset - stickLabelOffset, lineLabelSize);

    var ends = [stickStart, stickEnd];

    for (var i=0; i < 2; i++) {
        generateRect(ends[i] - stickEndWidth / 2, y - stickEndWidth / 2, stickEndWidth, stickEndWidth, stickEndRadius, darkColor);
    }

    generateLine(stickStart, y, stickEnd, y, darkColor);
}

function labelk(last) {

    if (last) {
        generateText('k', klastx - 5.7, topMargin + nodeWidth + kLabelOffset, mathLabelSize, null, null, mathFont, null, null, 'font-style:italic');
        generateText('th', klastx + 4.4, topMargin + nodeWidth + kLabelOffset - 0.1, stickLabelSize);
        generateText('to last', klastx, topMargin + nodeWidth + kLabelOffset - 0.1 + 14, stickLabelSize);
    } else {
        generateText('k', kx - 5.7, topMargin + nodeWidth + kLabelOffset, mathLabelSize, null, null, mathFont, null, null, 'font-style:italic');
        generateText('th', kx + 4.4, topMargin + nodeWidth + kLabelOffset - 0.1, stickLabelSize);
    }
}

function drawLine(label, start, end, y) {

    generateLine(start, y, end, y, darkColor);

    var endHeight = 4.8;

    generateLine(start, y - endHeight, start, y + endHeight, darkColor);
    generateLine(end, y - endHeight, end, y + endHeight, darkColor);

    labelLine(label, (start + end) / 2, y);
}

function labelLine(label, x, y) {

    if (y < topMargin) {
        y = y - labelOffset;
    } else {
        y = y + bottomOffset;
    }

    generateText(label, x, y, mathLabelSize, null, null, mathFont, null, null, 'font-style:italic');
}



// generate diagrams

var nameSpace = 'kth_last_node';

var diagramFunctions = [

    function stickAtStart() {
        drawStick(0, 2);
        labelk(false);
    },
    function stickShifted() {
        drawStick(1, 3);
        labelk(false);
    },
    function stickAtEnd() {
        setSVGDimensions(svgWidth, stickLastHeight);
        drawStick(4, 6);
        labelk(true);
    },
    function NNodeList() {
        setSVGDimensions(svgWidth, nHeight);
        drawLine('n', listStartX, lineEndX, ny);
    },
    function KFromEnd() {
        setSVGDimensions(svgWidth, kHeight);
        labelk(true);
        drawLine('n', listStartX, lineEndX, ny);
        drawLine('k', klastx + bottomGap, lineEndX, ky);
    },
    function NMinusKFromStart() {
        setSVGDimensions(svgWidth, kHeight);
        labelk(true);
        drawLine('n', listStartX, lineEndX, ny);
        drawLine('k', klastx + bottomGap, lineEndX, ky);
        drawLine('n - k', listStartX, klastx - bottomGap, ky);
    },

];


function setUp() {
    drawNodes();
}

function tearDown() {
    // runs after every draw function
}


/*

Cheatsheet:

generateRect    ( x, y, width, height, [ borderRadius, fill, stroke, strokeWidth, transform, mask ])
generateCircle  ( cx, cy, r, [ fill, stroke, strokeWidth ])
generateText    ( content, x, y, fontSize, [ fontWeight, fill, fontFamily, textAnchor, transform, style, mask ])
generateLine    (x1, y1, x2, y2, [ stroke, strokeWidth, mask ])
generatePolygon (points, [ fill, stroke, strokeWidth ])
generateQuadraticPath(startx, starty, middlex, middley, endx, endy, [ stroke, strokeWidth, fill, isRelative ])
generateArc     (startx, starty, radiix, radiiy, rotationx, largeArc, sweep, endx, endy, [ isClosed, stroke, strokeWidth, fill ])
generateMask    (topY, width, height, [ isTop ])

*/
