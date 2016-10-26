
// Dynamic values

var svgWidth  = 300;
var svgHeight = 100;

var fontSize = '15px';
var textOffset;

var rectWidth  = 20;
var rectHeight = 20;
var rectRadius = 3;
var rectXoffset;
var rectYoffset;

var circleRadius = 10;
var circleXoffset;
var circleYoffset;

var topMargin = 10;
var leftMargin = 10;


// Draw diagram here




var name;








// generate diagrams

var nameSpace = 'playing_cards__';

function setUp() {
    // runs before every draw function
}

function tearDown() {
    // runs after every draw function
}

var drawFunctions = [

    function firstDiagram() {
        name = 'first';
        generateText('Hello', 25, 20, null, null, null, mathFont);
    },

    function secondDiagram() {
        name = nameSpace + 'second';
        generateText('Hello 2', 25, 20, null, null, null, mathFont);
    },
];

/*

Cheatsheet:

generateRect   ( x, y, [ width, height, borderRadius, fill, stroke, strokeWidth, transform, mask ])
generateCircle ( cx, cy, [ r, fill, stroke, strokeWidth ])
generateText   ( content, x, y, [ fontWeight, newFontSize, fill, fontFamily, textAnchor, transform, style, mask ])
generateLine   (x1, y1, x2, y2, [ stroke, strokeWidth, mask ])
generatePolygon(points, [ fill, stroke, strokeWidth ])
generateQuadraticPath(startx, starty, middlex, middley, endx, endy, [ strokeWidth, stroke, fill, isRelative ])
generateArc    (startx, starty, radiix, radiiy, rotationx, largeArc, sweep, endx, endy, [ closed, stroke, fill ])
generateMask   (topY, width, height, [ isTop ])

*/
