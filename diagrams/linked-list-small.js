
// Dynamic styles and attributes

var svgWidth  = 365;
var svgHeight = 105;

var fontSize = '12px';
var textOffset;

var nodeWidth = 13;
var nodeSpacing = 40;
var nodeRadius = 4;
var nodeCircleOffset = 1;

var arrowCurve = 6;
var arrowSpacingStart = 2;
var arrowSpacingEnd = 3;
var arrowWidth = 1;
var arrowOffset = 1;
var arrowPointAngle = 151;
var arrowPointLength = 5;

var stickEndWidth = 8;
var stickOffset = 17;
var stickEndRadius = 1;

var circleRadius = 10;
var circleXoffset;
var circleYoffset;

var mathFont = 'serif';
var icBlue   = 'rgba(91, 192, 222, 1)';
var icBlueLight = 'rgba(91, 192, 222, 0.15)';
var transparent = 'rgba(255, 255, 255, 0)';

var topMargin = 40;
var leftMargin = 10;

var arrowPadding = 6.5;
var arrowHeadSize = 3.7;
var arrowWidth = 1;
var arrowDetail = 0.3;

var stickOffset = 17;
var stickEndRadius = 1.5;
var stickColor = darkColor;
var stickLabelOffset = 6;
var lineLabelSize = '10px';
var stickLabelSize = '11px';
var mathLabelSize = '14px';

var kLabelOffset = stickOffset + 0;

// Draw diagram here

// nodes
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

// stick
function drawStick(startNode, endNode) {
	var stickStart = leftMargin + startNode * nodeSpacing + nodeWidth / 2;
    var stickEnd   = leftMargin + endNode   * nodeSpacing + nodeWidth / 2;
	var y = topMargin - stickOffset;
	generateText('STICK', (stickStart + stickEnd) / 2, topMargin - stickOffset - stickLabelOffset, lineLabelSize);
	// generateLine(stickStart, y, stickEnd, y, darkColor, 1);
	// generateCircle(stickStart, y, stickEndRadius, defaultLightColor, stickColor, 0);
	// generateCircle(stickEnd, y, stickEndRadius, defaultLightColor, stickColor, 0);

	var ends = [stickStart, stickEnd];
	for (var i=0; i < 2; i++) {
		generateRect(ends[i] - stickEndWidth / 2, y - stickEndWidth / 2, stickEndWidth, stickEndWidth, stickEndRadius, darkColor);
	}

	generateLine(stickStart, y, stickEnd, y, darkColor);

}

// k
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

// lines
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

var startx = leftMargin;
var endx = leftMargin + nodeWidth + 6 * nodeSpacing;
var kx = leftMargin + 2 * nodeSpacing + nodeWidth / 2;
var klastx = leftMargin + 6 * nodeSpacing + nodeWidth / 2 - 2 * nodeSpacing;

var ny = topMargin - 15;
var ky = topMargin + nodeWidth + 47;
var bottomGap = 2.4;
var labelOffset = 9;
var bottomOffset = labelOffset + 10;

var nameSpace = 'kth_last_node';
var name;

function setUp() {
	setSVGDimensions(width, stickHeight);
	drawNodes();
}

function tearDown() {
    // runs after every draw function
}

var width = 274;
var stickHeight = 80;
var stickLastHeight = 93;
var nHeight = 62;
var kHeight = 126;

var drawFunctions = [

    function stickAtStart() {
        drawStick(0, 2);
        labelk(false);
    },
    function stickShifted() {
        drawStick(1, 3);
        labelk(false);
    },
    function stickAtEnd() {
        setSVGDimensions(width, stickLastHeight);
        drawStick(4, 6);
        labelk(true);
    },

    function NNodeList() {
        setSVGDimensions(width, nHeight);
        drawLine('n', startx, endx, ny);
    },
    function KFromEnd() {
        setSVGDimensions(width, kHeight);
        labelk(true);
        drawLine('n', startx, endx, ny);
        drawLine('k', klastx + bottomGap, endx, ky);
    },
    function NMinusKFromStart() {
        setSVGDimensions(width, kHeight);
        labelk(true);
        drawLine('n', startx, endx, ny);
        drawLine('k', klastx + bottomGap, endx, ky);
        drawLine('n - k', startx, klastx - bottomGap, ky);
    },

];

/*

Cheatsheet:

generateRect   ( x, y, [ width, height, borderRadius, fill, stroke, strokeWidth ])
generateCircle ( cx, cy, [ r, fill, stroke, strokeWidth ])
generateText   ( content, x, y, [ fontWeight, newFontSize, fill, fontFamily, textAnchor, transform, style ])
generateLine   (x1, y1, x2, y2, [ stroke, strokeWidth ])
generatePolygon(points, [ fill, stroke, strokeWidth ])

*/

