var nameSpace = 'cs_for_hackers';

var svgWidth  = 250;
var svgHeight = 320;

var topMargin = 30
var xOffset = 40;

// dynamic values

//table appearance
var rowHeight = 30;
var rowWidth = 110;
var fadeBottomRows = 2;

var tableContent = [];
var lightOutlineRows = []; // range of rows to outline lightly
var darkOutlineRows = []; // range of rows to outline darkly

// functions for drawing diagrams

function drawTable(tableNumber, numRows, lightOutlineRows = [], darkOutlineRows = []) {
  fillTable(tableNumber, numRows);

  for (i = 1; i < numRows+1; i++) { 
    var y = i * rowHeight;

    
    // fadeout bottom
    var mask;
    if (fadeBottomRows) {
      if (i === numRows - fadeBottomRows) {
        generateMask(y, svgWidth, rowHeight * fadeBottomRows);
      }
      if (i >= numRows - fadeBottomRows) {
        mask = 'bottom-transparent-fade';
      } else {
        mask = null;
      }
    }

    // draw row numbers
    generateText(i - 1, 20, i*rowHeight+19, 13, null, null, null, null, null, null, mask);

    // draw rows
    if (lightOutlineRows.length == 1 && lightOutlineRows[0] == i) {
      generateRect(xOffset, i*rowHeight, rowWidth, rowHeight, 0, null, null, 2, null, mask);
    } else if (darkOutlineRows.length == 1 && darkOutlineRows[0] == i) {
      generateRect(xOffset, i*rowHeight, rowWidth, rowHeight, 0, null, null, 3, null, mask);
    } else {
      generateRect(xOffset, i*rowHeight, rowWidth, rowHeight, 0, null, null, 1, null, mask);
    }

    // draw the table content
    generateText(tableContent[i], rowWidth - 15, i*rowHeight + 19, 13, null, null, null, null, null, null, mask);
  }
}

function fillTable(tableNumber, numRows) {
  switch(tableNumber) {
    case 1:
      for (i = 1; i < numRows+1; i++) { 
        tableContent[i] = '0 0 0 0 0 0 0 0';
      }
      break;

    case 2:
      tableContent[1] = '0 0 0 0 0 0 0 0';
      tableContent[2] = '0 0 0 0 0 0 0 1';
      tableContent[3] = '0 0 0 0 0 0 1 1';
      tableContent[4] = '0 0 0 0 0 0 1 1';
      tableContent[5] = '0 0 0 0 0 1 0 0';
      break;

    case 3:
      tableContent[1] = '0 0 0 0 0 0 0 0';
      tableContent[2] = '0 0 0 0 0 0 0 0';
      tableContent[3] = '0 0 0 0 0 1 1 0';
      tableContent[4] = '0 0 0 0 0 0 0 0';
      tableContent[5] = '0 0 0 0 0 0 0 0';
      break;
  }
}


// generate diagrams

var diagramFunctions = [

    function ramEmpty() {
      var numRows = 7;
      drawTable(1, numRows);
    },

    function ramBits() {
      var numRows = 7;
      drawTable(2, numRows);
    },

    function ramSingleInt() {
      var numRows = 7;
      var lightOutlineRows = [3];
      var darkOutlineRows = [4];
      drawTable(3, numRows, lightOutlineRows, darkOutlineRows);
    },

    function arrayBlank() {
      var numRows = 9;
      drawTable(1, numRows)
    },

    function array5Occupied() {
      var numRows = 9;
      drawTable(1, numRows)
    },

    function array5() {
      var numRows = 9;
      drawTable(1, numRows)
    }

];


function setUp() {
    drawTable();
}

function tearDown() {
    // runs after every diagram function
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
