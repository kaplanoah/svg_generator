var svg = $('svg');

function generateRect(x, y, width, height, borderRadius, fill, stroke, strokeWidth){
    width = width   || rectWidth;
    height = height || rectHeight;
    borderRadius = borderRadius || rectRadius;
    fill = fill     || defaultLightColor;
    stroke = stroke || defaultDarkColor;
    strokeWidth = strokeWidth   || 1;
    var el = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    el.setAttribute('x', Math.round(x*10) / 10);
    el.setAttribute('y', Math.round(y*10) / 10);
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
    el.setAttribute('cx', Math.round(cx*10) / 10);
    el.setAttribute('cy', Math.round(cy*10) / 10);
    el.setAttribute('r', r);
    el.setAttribute('fill', fill);
    el.setAttribute('stroke', stroke);
    el.setAttribute('stroke-width', strokeWidth);
    svg.append(el);
};

function generateText(content, x, y, fontWeight, newFontSize, fill, textAnchor){
    fontWeight  = fontWeight  || 'normal'
    newFontSize = newFontSize || fontSize;
    fill = fill || defaultDarkColor;
    textAnchor = textAnchor || 'middle';
    var el = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    el.setAttribute('x', Math.round(x*10) / 10);
    el.setAttribute('y', Math.round(y*10) / 10);
    el.setAttribute('font-weight', fontWeight);
    el.setAttribute('font-size', newFontSize);
    el.setAttribute('fill', fill);
    el.setAttribute('text-anchor', textAnchor);
    el.textContent = content;
    svg.append(el);
};

function generateLine(x1, y1, x2, y2, stroke, strokeWidth){
    stroke = stroke || '#999';
    strokeWidth = strokeWidth || 1;
    var el = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    el.setAttribute('x1', Math.round(x1*10) / 10);
    el.setAttribute('y1', Math.round(y1*10) / 10);
    el.setAttribute('x2', Math.round(x2*10) / 10);
    el.setAttribute('y2', Math.round(y2*10) / 10);
    el.setAttribute('stroke', stroke);
    el.setAttribute('stroke-width', strokeWidth);
    svg.append(el);
};