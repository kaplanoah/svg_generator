window.onload = function(){

	svg.attr({'width': svgWidth, 'height': svgHeight});
	if ( svgWidth > 300 ) {
		$('.diagram').addClass('diagram-large');
	}

	document.body.style.backgroundColor = pageBackground;
	document.body.style.fontFamily = 'Open Sans';

};