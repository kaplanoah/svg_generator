function generateRect(x, y, width, height, borderRadiusParam, fillParam, strokeParam, strokeWidthParam, transform, mask) {

    var el = document.createElementNS('http://www.w3.org/2000/svg', 'rect');

    el.setAttribute('x', round(x));
    el.setAttribute('y', round(y));
    el.setAttribute('width', width);
    el.setAttribute('height', height);
    el.setAttribute('rx', paramOrDefault(borderRadiusParam, borderRadius));
    el.setAttribute('ry', paramOrDefault(borderRadiusParam, borderRadius));
    el.setAttribute('fill', paramOrDefault(fillParam, fill));
    el.setAttribute('stroke', paramOrDefault(strokeParam, stroke));
    el.setAttribute('stroke-width', paramOrDefault(strokeWidthParam, strokeWidth));

    if (isArgument(transform)) el.setAttribute('transform', transform);
    if (isArgument(mask))      el.setAttribute('mask', getUrl(mask));

    svg.append(el);
};

function generateCircle(cx, cy, r, fillParam, strokeParam, strokeWidthParam){

    var el = document.createElementNS('http://www.w3.org/2000/svg', 'circle');

    el.setAttribute('cx', round(cx));
    el.setAttribute('cy', round(cy));
    el.setAttribute('r', r);
    el.setAttribute('fill', paramOrDefault(fillParam, fill));
    el.setAttribute('stroke', paramOrDefault(strokeParam, stroke));
    el.setAttribute('stroke-width', paramOrDefault(strokeWidthParam, strokeWidth));

    svg.append(el);
};

function generateText(content, x, y, fontSize, fontWeightParam, fillParam, fontFamily, textAnchorParam, transform, style, mask) {

    var el = document.createElementNS('http://www.w3.org/2000/svg', 'text');

    el.textContent = content;

    el.setAttribute('x', round(x));
    el.setAttribute('y', round(y));
    el.setAttribute('font-size', fontSize);
    el.setAttribute('font-weight', paramOrDefault(fontWeightParam, fontWeight));
    el.setAttribute('fill', paramOrDefault(fillParam, fontColor));
    el.setAttribute('text-anchor', paramOrDefault(textAnchorParam , textAnchor));

    if (isArgument(fontFamily)) el.setAttribute('font-family', fontFamily);
    if (isArgument(transform))  el.setAttribute('transform', transform);
    if (isArgument(style))      el.setAttribute('style', style);
    if (isArgument(mask))       el.setAttribute('mask', getUrl(mask));

    svg.append(el);
};

function generateLine(x1, y1, x2, y2, strokeParam, strokeWidthParam, mask) {

    var el = document.createElementNS('http://www.w3.org/2000/svg', 'line');

    el.setAttribute('x1', round(x1));
    el.setAttribute('y1', round(y1));
    el.setAttribute('x2', round(x2));
    el.setAttribute('y2', round(y2));
    el.setAttribute('stroke', paramOrDefault(strokeParam, stroke));
    el.setAttribute('stroke-width', paramOrDefault(strokeWidthParam, strokeWidth));

    if (isArgument(mask)) el.setAttribute('mask', getUrl(mask));

    svg.append(el);
};

function generatePolygon(points, fillParam, strokeParam, strokeWidthParam) {

    var el = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');

    el.setAttribute('points', points);
    el.setAttribute('fill', paramOrDefault(fillParam, fill));
    el.setAttribute('stroke', paramOrDefault(strokeParam, stroke));
    el.setAttribute('stroke-width', paramOrDefault(strokeWidthParam, strokeWidth));

    svg.append(el);
};

function generateQuadraticPath(startx, starty, middlex, middley, endx, endy, strokeParam, strokeWidthParam, fillParam, isRelative) {

    var d = 'M' +
            round(startx) + ',' +
            round(starty) + ' ' +
            (isRelative ? 'q' : 'Q') +
            round(middlex) + ',' +
            round(middley) + ' ' +
            round(endx) + ',' +
            round(endy);

    var el = document.createElementNS('http://www.w3.org/2000/svg', 'path');

    el.setAttribute('d', d);
    el.setAttribute('stroke', paramOrDefault(strokeParam, stroke));
    el.setAttribute('stroke-width', paramOrDefault(strokeWidthParam, strokeWidth));
    el.setAttribute('fill', paramOrDefault(fillParam, transparent));

    svg.append(el);
};

function generateArc(startx, starty, radiix, radiiy, rotationx, largeArc, sweep, endx, endy, isClosed, strokeParam, strokeWidthParam, fillParam) {

    var d = 'M' +
            round(startx) + ',' +
            round(starty) +
            ' A' +
            round(radiix) + ',' +
            round(radiiy) + ' ' +
            round(rotationx) + ' ' +
            largeArc + ',' +
            sweep + ' ' +
            round(endx) + ',' +
            round(endy);

    if (isClosed) d = d + ' z';

    var el = document.createElementNS('http://www.w3.org/2000/svg', 'path');

    el.setAttribute('d', d);
    el.setAttribute('stroke', paramOrDefault(strokeParam, stroke));
    el.setAttribute('stroke-width', paramOrDefault(strokeWidthParam, strokeWidth));
    el.setAttribute('fill', paramOrDefault(fillParam, transparent));

    svg.append(el);
};

function generateMask(topY, width, height, isTop) {

    var maskEl = document.createElementNS('http://www.w3.org/2000/svg', 'mask');

    maskEl.setAttribute('maskUnits', 'userSpaceOnUse');
    maskEl.setAttribute('maskContentUnits', 'userSpaceOnUse');
    maskEl.setAttribute('id', isTop ? 'top-transparent-fade' : 'bottom-transparent-fade');

    var linearGradientEl = document.createElementNS('http://www.w3.org/2000/svg', 'linearGradient');
    var linearGradientID = isTop ? 'transparent-fade-fill-top' : 'transparent-fade-fill-bottom';

    linearGradientEl.setAttribute('id', linearGradientID);
    linearGradientEl.setAttribute('gradientUnits', 'objectBoundingBox');
    linearGradientEl.setAttribute('x1', 0);
    linearGradientEl.setAttribute('y1', 0);
    linearGradientEl.setAttribute('x2', 0);
    linearGradientEl.setAttribute('y2', 1);

    var stopElOpaque = document.createElementNS('http://www.w3.org/2000/svg', 'stop');

    stopElOpaque.setAttribute('stop-color', 'white');
    stopElOpaque.setAttribute('offset', isTop ? 1 : 0);

    var stopElTransparent = document.createElementNS('http://www.w3.org/2000/svg', 'stop');

    stopElTransparent.setAttribute('stop-color', 'white');
    stopElTransparent.setAttribute('stop-opacity', 0);
    stopElTransparent.setAttribute('offset', isTop ? 0 : 1);

    var rectEl = document.createElementNS('http://www.w3.org/2000/svg', 'rect');

    rectEl.setAttribute('x', 0);
    rectEl.setAttribute('y', topY);
    rectEl.setAttribute('width', width);
    rectEl.setAttribute('height', height);
    rectEl.setAttribute('stroke-width', 0);
    rectEl.setAttribute('fill', getUrl(linearGradientID));

    if (isTop) {
        $(linearGradientEl).append(stopElTransparent).append(stopElOpaque);
    } else {
        $(linearGradientEl).append(stopElOpaque).append(stopElTransparent);
    }

    $(maskEl).append(linearGradientEl, rectEl);

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
