var nameSpace = 'cs_for_hackers';

var svgWidth  = 250;
var svgHeight = 320;

var topMargin = 30
var leftMargin = 90;

// dynamic values

//table appearance
var rowHeight = 30;
var rowWidth = 110;
var fadeBottomRows = 2;

var tableContent = [];

// functions for drawing diagrams

function drawTable(tableNumber, numRows) {
  fillTable(tableNumber, numRows);

  for (i = 1; i < numRows+1; i++) { 
    var y = i * rowHeight;
    
    // generate mask
    var mask;
    if (tableNumber != 6) {
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
    }

    // draw row numbers
    generateText(i - 1, leftMargin-15, i*rowHeight+19, 13, null, null, null, null, null, null, mask);

    // draw rows
    generateRect(leftMargin, i*rowHeight, rowWidth, rowHeight, 0, null, null, 1, null, mask);

    // draw table content
    generateText(tableContent[i], leftMargin+(rowWidth/2), i*rowHeight + 19, 13, null, null, null, null, null, null, mask);
  }
}

function fillTable(tableNumber, numRows) {
  switch(tableNumber) {
    case 1:
      // for (i = 1; i < numRows+1; i++) { 
      //   tableContent[i] = '0 0 0 0 0 0 0 0';
      // }
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

    case 4:
      for (i = 1; i < numRows+1; i++) { 
        tableContent[i] = '0 0 0 0 0 0 0 0';
      }
      break;
  }
}

function drawBorder(color, start, end, size = 2) {
  end = end || start;

  var y = topMargin + start * rowHeight;
  var height = (end - start + 1) * rowHeight;

  generateRect(leftMargin, y, rowWidth, height, 0, transparent, color, size)
}

function drawBracket(start, end) {
  end = end || start;
  numRows = end - start + 1;

  var x = leftMargin - 40;
  var x2 = x + 8;
  var y1 = topMargin + start * rowHeight;
  var y2 = y1 + ((end - start + 1) * rowHeight);

  // draw bracket
  generateLine(x, y1, x, y2);
  generateLine(x, y1, x2, y1);
  generateLine(x, y2, x2, y2);

  // draw row numbers
  y = y1;
  for (i = 1; i <= numRows; i++) {
    generateText(i - 1, x-15, y+(rowHeight-11), 13);
    y = y+rowHeight;
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
      drawTable(3, numRows);
      drawBorder('black', 3);
    },

    function arrayBlank() {
      var numRows = 9;
      drawTable(4, numRows);
    },

    function array5Occupied() {
      var numRows = 9;
      drawTable(4, numRows);
      drawBorder('black', 3);
    },

    function array5() {
      var numRows = 9;
      drawTable(6, numRows);
      drawBorder('black', 3, null, 3);
      drawBorder('black', 3, 8, 2);
      drawBracket(3, 7);
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
