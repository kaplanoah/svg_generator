var nameSpace = 'ram_start';

var svgWidth  = 210;
var svgHeight = 305;


// dynamic values

var numRows = 5;
var firstRowNumber = 2;
var contents = {};

var fadeTopRows = 2;
var fadeBottomRows = 2;

var fontSize = '10px';
var contentFontSize = '12px';
var rowLableFontSize = '12px';

var mathFont = 'Droid Serif';
var icBlue   = 'rgba(91, 192, 222, 1)';

var topMargin = 20;
var leftMargin = 50;

var containerWidth = 110;
var containerHeight = 28;
var containerColor = darkColor;
var containerStrokeWidth = 1;

var rowLabelMargin = 7;
var rowLabelVerticalOffset = 5;

var contentVerticalOffset = 2/3 * containerHeight;
var contentCharSpacing = 10;
var contentColumnOffset = 0;

var rowBorderThickness = 3;


// drawing functions

function drawRamContainers(numRows) {
    numRows = numRows + fadeTopRows + fadeBottomRows;

    for (var i=0; i<numRows; i++) {
        var x = leftMargin;
        var y = topMargin + i * containerHeight;

        var mask;
        if (fadeTopRows) {
            if (i === 0) {
                generateMask(y, svgWidth, containerHeight * fadeTopRows, true);
            }
            if (i < fadeTopRows) {
                mask = 'top-transparent-fade';
            } else {
                mask = null;
            }
        }
        if (fadeBottomRows) {
            if (i === numRows - fadeBottomRows) {
                generateMask(y - 1, svgWidth, containerHeight * fadeBottomRows);
            }
            if (i >= numRows - fadeBottomRows) {
                mask = 'bottom-transparent-fade';
            } else {
                mask == null;
            }
        }

        generateLine(leftMargin, y, leftMargin, y + containerHeight, containerColor, containerStrokeWidth, mask);
        generateLine(leftMargin, y, leftMargin + containerWidth, y, containerColor, containerStrokeWidth, mask);
        generateLine(leftMargin + containerWidth, y, leftMargin + containerWidth, y + containerHeight, containerColor, containerStrokeWidth, mask);

        var number = i + firstRowNumber - fadeTopRows;
        x = x - rowLabelMargin;
        y = y + containerHeight / 2 + rowLabelVerticalOffset;
        generateText(number, x, y, null, rowLableFontSize, null, null, 'end', null, null, mask);
    }

}

function drawContents(numRows) {
    numRows = numRows + fadeTopRows + fadeBottomRows;

    var columnStarts = [
        (containerWidth - 2 * contentCharSpacing * 3) / 3 - contentColumnOffset,
        (containerWidth - 2 * contentCharSpacing * 3) / 3 * 2 + contentCharSpacing * 3 + contentColumnOffset,
    ];

    for (var row=0; row<numRows; row++) {
        for (var column=0; column<2; column++) {

            var content;
            try {
                content = contents[row][column];
            }
            catch(err) {
                content = '0000';
            }

            var x = columnStarts[column] + leftMargin; //  - (contentCharSpacing * 3 / 2);
            var y = topMargin + row * containerHeight + contentVerticalOffset;

            var mask;
            if (row > fadeTopRows - 1 && row < numRows - fadeBottomRows) {
                mask = null;
            }
            else if (row >= numRows - fadeBottomRows) {
                mask = 'bottom-transparent-fade';
            } else if (row <= numRows - fadeTopRows) {
                mask = 'top-transparent-fade';
            }

            for (var i=0; i<4; i++) {
                generateText(content[i], x, y, null, contentFontSize, null, mathFont, 'middle', null, null, mask);
                x += contentCharSpacing;
            }
        }
    }
}

function drawBorder(color, start, end) {
    end = end || start;

    var y = topMargin + start * containerHeight;
    var height = (end - start + 1) * containerHeight;

    generateRect(leftMargin, y, containerWidth, height, 0, transparent, color, rowBorderThickness)
}


// generate diagrams

var diagramFunctions = [

    function ramEmpty() {
        // no contents
    },
    function ramFull() {
        drawContents(numRows);
    },
    function border() {
        drawContents(numRows);
        drawBorder('black', 2, 4);
    }
];


function setUp() {
    drawRamContainers(numRows);
}

function tearDown() {
    // runs after every diagram function
}


/*

Cheatsheet:

generateRect    ( x, y, width, height, [ borderRadius, fill, stroke, strokeWidth, transform, mask ])
generateCircle  ( cx, cy, r, [ fill, stroke, strokeWidth ])
generateText    ( content, x, y, fontSize, [ fontWeight, fill, fontFamily, textAnchor, transform, style, mask ])
generateLine    ( x1, y1, x2, y2, [ stroke, strokeWidth, mask ])
generatePolygon ( points, [ fill, stroke, strokeWidth ])
generateQuadraticPath( startx, starty, middlex, middley, endx, endy, [ stroke, strokeWidth, fill, isRelative ])
generateArc     ( startx, starty, radiix, radiiy, rotationx, largeArc, sweep, endx, endy, [ isClosed, stroke, strokeWidth, fill ])
generateMask    ( topY, width, height, [ isTop ])

*/
