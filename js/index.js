function toggleBorder() {
	$('.diagram-frame').toggleClass('border');
}

function replaceSVG() {
	$('.diagram-frame').empty();
	$('.diagram-frame').append('<div class="diagram image">\n\t<svg></svg>\n</div>')
	svg = $('svg');
}

function displayName(name) {
	$('#current-diagram').text(name);
}