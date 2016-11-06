var nameSpace = 'ram';

var svgWidth  = 250;
var svgHeight = 250;

var xOffset = 40;


//table appearance
var rowHeight = 30;
var rowWidth = 110;
var numRows = 6;

var tableContent = [];
var lightOutlineRows = []; // range of rows to outline lightly
var darkOutlineRows = []; // range of rows to outline darkly

// functions for drawing diagrams

function drawTable(tableNumber, lightOutlineRows = [], darkOutlineRows = []) {
  fillTable(tableNumber);

  for (i = 1; i < numRows+1; i++) { 
      // draw row numbers
      generateText(i - 1, 20, i*rowHeight + 19, 13);
      // draw rows
      if (lightOutlineRows.length == 1 && lightOutlineRows[0] == i) {
        generateRect(xOffset, i*rowHeight, rowWidth, rowHeight, 0, null, null, 2);
      } else if (darkOutlineRows.length == 1 && darkOutlineRows[0] == i) {
        generateRect(xOffset, i*rowHeight, rowWidth, rowHeight, 0, null, null, 3);
      } else {
        generateRect(xOffset, i*rowHeight, rowWidth, rowHeight, 0, null, null, 1);
      }
      generateText(tableContent[i], rowWidth - 15, i*rowHeight + 19, 13);
      // if (i == numRows) {
        // generateMask(100, 500, rowHeight, true);
      // }
  }
}

function fillTable(tableNumber) {
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
      drawTable(1);
    },

    function ramBits() {
      drawTable(2);
    },

    function ramSingleInt() {
      var lightOutlineRows = [3];
      var darkOutlineRows = [4];
      drawTable(3, lightOutlineRows, darkOutlineRows);
    },

    function arrayBlank() {
      
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
