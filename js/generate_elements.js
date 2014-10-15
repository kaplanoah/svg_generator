var svg = $('svg');

function generateRect(x, y, width, height, borderRadius, fill, stroke, strokeWidth){
    fill = fill     || defaultLightColor;
    stroke = stroke || defaultDarkColor;
    strokeWidth = strokeWidth   || 1;
    borderRadius = borderRadius || 0;
    var el = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    el.setAttribute('x', x);
    el.setAttribute('y', y);
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
    fill = fill     || defaultLightColor;
    stroke = stroke || defaultDarkColor;
    strokeWidth = strokeWidth || 1;
    var el = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    el.setAttribute('cx', cx);
    el.setAttribute('cy', cy);
    el.setAttribute('r', r);
    el.setAttribute('fill', fill);
    el.setAttribute('stroke', stroke);
    el.setAttribute('stroke-width', strokeWidth);
    svg.append(el);
};

function generateText(content, x, y, fontSize, fill, textAnchor){
    fill = fill || defaultDarkColor;
    textAnchor = textAnchor || 'middle';
    var el = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    el.setAttribute('x', x);
    el.setAttribute('y', y);
    el.setAttribute('font-size', fontSize);
    el.setAttribute('fill', fill);
    el.setAttribute('text-anchor', textAnchor);
    el.textContent = content;
    svg.append(el);
};

function generateLine(x1, y1, x2, y2, stroke, strokeWidth){
    stroke = stroke || defaultDarkColor;
    strokeWidth = strokeWidth || 1;
    var el = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    el.setAttribute('x1', x1);
    el.setAttribute('y1', y1);
    el.setAttribute('x2', x2);
    el.setAttribute('y2', y2);
    el.setAttribute('stroke', stroke);
    el.setAttribute('stroke-width', strokeWidth);
    svg.append(el);
};