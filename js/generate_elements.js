var svg = $('svg');

function generateRect(x, y, width, height, borderRadius, fill, stroke, strokeWidth){
    width = width   || rectWidth;
    height = height || rectHeight;
    if ( borderRadius !== 0 && !borderRadius) { borderRadius = borderRadius || rectRadius };
    fill = fill     || defaultLightColor;
    stroke = stroke || defaultDarkColor;
    if ( strokeWidth !== 0 && !strokeWidth ) { strokeWidth = 1 }
    var el = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    el.setAttribute('x', roundDown(x));
    el.setAttribute('y', roundDown(y));
    el.setAttribute('width', width);
    el.setAttribute('height', height);
    el.setAttribute('rx', borderRadius);
    el.setAttribute('ry', borderRadius);
    el.setAttribute('fill', fill);
    el.setAttribute('stroke', stroke);
    el.setAttribute('stroke-width', strokeWidth);
    svg.append(el);

};

function generateCircle(cx, cy, r, fill, stroke, strokeWidth){
    r = r           || circleRadius;
    fill = fill     || defaultLightColor;
    stroke = stroke || defaultDarkColor;
    strokeWidth = strokeWidth || 1;
    var el = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    el.setAttribute('cx', roundDown(cx));
    el.setAttribute('cy', roundDown(cy));
    el.setAttribute('r', r);
    el.setAttribute('fill', fill);
    el.setAttribute('stroke', stroke);
    el.setAttribute('stroke-width', strokeWidth);
    svg.append(el);
};

function generateText(content, x, y, fontWeight, newFontSize, fill, fontFamily, textAnchor, transform, style){
    fontWeight  = fontWeight  || 'normal'
    newFontSize = newFontSize || fontSize;
    fill = fill || defaultDarkColor;
    textAnchor = textAnchor || 'middle';
    var el = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    el.setAttribute('x', roundDown(x));
    el.setAttribute('y', roundDown(y));
    el.setAttribute('font-weight', fontWeight);
    el.setAttribute('font-size', newFontSize);
    el.setAttribute('fill', fill);
    if (fontFamily) { el.setAttribute('font-family', fontFamily); }
    el.setAttribute('text-anchor', textAnchor);
    if (transform) { el.setAttribute('transform', transform); }
    if (style) { el.setAttribute('style', style); }
    el.textContent = content;
    svg.append(el);
};

function generateLine(x1, y1, x2, y2, stroke, strokeWidth){
    stroke = stroke || '#999';
    strokeWidth = strokeWidth || 1;
    var el = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    el.setAttribute('x1', roundDown(x1));
    el.setAttribute('y1', roundDown(y1));
    el.setAttribute('x2', roundDown(x2));
    el.setAttribute('y2', roundDown(y2));
    el.setAttribute('stroke', stroke);
    el.setAttribute('stroke-width', strokeWidth);
    svg.append(el);
};

function generatePolygon(points, fill, stroke, strokeWidth){
    fill   = fill   || defaultLightColor;
    stroke = stroke || defaultDarkColor;
    strokeWidth = strokeWidth || 1;
    var el = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
    el.setAttribute('points', points);
    el.setAttribute('fill', fill);
    el.setAttribute('stroke', stroke);
    el.setAttribute('stroke-width', strokeWidth);
    svg.append(el);
};

function generateQuadraticPath(startx, starty, middlex, middley, endx, endy, strokeWidth, stroke, fill, isRelative){
    stroke = stroke || defaultDarkColor;
    strokeWidth = strokeWidth || 1;
    fill   = fill || 'rgba(255, 255, 255, 0)';
    var relative;
    isRelative ? relative = 'q' : relative = 'Q';
    var d = 'M' + roundDown(startx) + ',' + roundDown(starty) + ' ' + relative + roundDown(middlex) + ',' + roundDown(middley) + ' ' + roundDown(endx) + ',' + roundDown(endy);
    var el = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    el.setAttribute('d', d);
    el.setAttribute('stroke', stroke);
    el.setAttribute('stroke-width', strokeWidth);
    el.setAttribute('fill', fill);
    svg.append(el);
};

function generateArc(startx, starty, radiix, radiiy, rotationx, largeArc, sweep, endx, endy, closed, stroke, fill){
    var d = 'M' + roundDown(startx) + ',' + roundDown(starty) + ' A' + roundDown(radiix) + ',' + roundDown(radiiy) + ' ' + roundDown(rotationx) + ' ' + largeArc + ',' + sweep + ' ' + roundDown(endx) + ',' + roundDown(endy);
    if (closed) d = d + ' z';
    var el = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    el.setAttribute('d', d);
    el.setAttribute('stroke', defaultDarkColor);
    el.setAttribute('fill', 'rgba(255, 255, 255, 0)');
    svg.append(el);
};