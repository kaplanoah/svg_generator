function generateRect(x, y, width, height, borderRadius, fill, stroke, strokeWidth, transform, mask){
    width = width   || rectWidth;
    height = height || rectHeight;
    if ( borderRadius !== 0 && !borderRadius) borderRadius = borderRadius || rectRadius;
    fill = fill     || defaultLightColor;
    stroke = stroke || defaultDarkColor;
    if ( strokeWidth !== 0 && !strokeWidth ) strokeWidth = 1;
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
    if ( transform ) el.setAttribute('transform', transform);
    if ( mask ) el.setAttribute('mask', getMaskUrl(mask));
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

function generateText(content, x, y, fontWeight, newFontSize, fill, fontFamily, textAnchor, transform, style, mask){
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
    if (fontFamily) el.setAttribute('font-family', fontFamily);
    el.setAttribute('text-anchor', textAnchor);
    if (transform) el.setAttribute('transform', transform);
    if (style) el.setAttribute('style', style);
    if ( mask ) el.setAttribute('mask', getMaskUrl(mask));
    el.textContent = content;
    svg.append(el);
};

function generateLine(x1, y1, x2, y2, stroke, strokeWidth, mask){
    stroke = stroke || '#999';
    strokeWidth = strokeWidth || 1;
    var el = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    el.setAttribute('x1', roundDown(x1));
    el.setAttribute('y1', roundDown(y1));
    el.setAttribute('x2', roundDown(x2));
    el.setAttribute('y2', roundDown(y2));
    el.setAttribute('stroke', stroke);
    el.setAttribute('stroke-width', strokeWidth);
    if ( mask ) el.setAttribute('mask', getMaskUrl(mask));
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

function generateMask(topY, width, height, isTop) {

    var maskEl = document.createElementNS('http://www.w3.org/2000/svg', 'mask');
    maskEl.setAttribute('maskUnits', 'userSpaceOnUse');
    maskEl.setAttribute('maskContentUnits', 'userSpaceOnUse');
    var maskID = (isTop ? 'top-transparent-fade' : 'bottom-transparent-fade');
    maskEl.setAttribute('id', maskID);

    var lindearGradientEl = document.createElementNS('http://www.w3.org/2000/svg', 'linearGradient');
    var linearGradientID = (isTop ? 'transparent-fade-fill-top' : 'transparent-fade-fill-bottom');
    lindearGradientEl.setAttribute('id', linearGradientID);
    lindearGradientEl.setAttribute('gradientUnits', 'objectBoundingBox');
    lindearGradientEl.setAttribute('x1', 0);
    lindearGradientEl.setAttribute('y1', 0);
    lindearGradientEl.setAttribute('x2', 0);
    lindearGradientEl.setAttribute('y2', 1);

    var stopElOpaque = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
    stopElOpaque.setAttribute('stop-color', 'white');
    var opaqueOffset = (isTop ? 1 : 0);
    stopElOpaque.setAttribute('offset', opaqueOffset);

    var stopElTransparent = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
    stopElTransparent.setAttribute('stop-color', 'white');
    stopElTransparent.setAttribute('stop-opacity', 0);
    var transparentOffset = (isTop ? 0 : 1);
    stopElTransparent.setAttribute('offset', transparentOffset);

    var rectEl = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    rectEl.setAttribute('x', 0);
    rectEl.setAttribute('y', topY);
    rectEl.setAttribute('width', width);
    rectEl.setAttribute('height', height);
    rectEl.setAttribute('stroke-width', 0);
    rectEl.setAttribute('fill', 'url(#' + linearGradientID + ')');

    if (isTop) {
        $(lindearGradientEl).append(stopElTransparent).append(stopElOpaque);
    } else {
        $(lindearGradientEl).append(stopElOpaque).append(stopElTransparent);
    }

    $(maskEl).append(lindearGradientEl, rectEl);

    svg.append(maskEl);

    // <mask maskUnits="userSpaceOnUse" maskContentUnits="userSpaceOnUse" id="top-transparent-fade">
    //     <linearGradient id="transparent-fade-fill-top" gradientUnits="objectBoundingBox" x1="0" y1="0" x2="0" y2="1">
    //         <stop stop-color="white" stop-opacity="0" offset="0"></stop>
    //         <stop stop-color="white" offset="1"></stop>
    //     </linearGradient>
    //     <rect x="0" y="20" width="300" height="56" stroke-width="0" fill="url(#transparent-fade-fill-top)"></rect>
    // </mask>

    // <mask maskUnits="userSpaceOnUse" maskContentUnits="userSpaceOnUse" id="bottom-transparent-fade">
    //     <linearGradient id="transparent-fade-fill-bottom" gradientUnits="objectBoundingBox" x1="0" y1="0" x2="0" y2="1">
    //         <stop stop-color="white" offset="0"></stop>
    //         <stop stop-color="white" stop-opacity="0" offset="1"></stop>
    //     </linearGradient>
    //     <rect x="0" y="215" width="300" height="56" stroke-width="0" fill="url(#transparent-fade-fill-bottom)"></rect>
    // </mask>

}
