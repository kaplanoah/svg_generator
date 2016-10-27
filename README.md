# Svg Generator

For making SVGs programmatically that are easy to manipulate.



## Getting started

[Fork and clone this repository](https://help.github.com/articles/fork-a-repo/)

Start your local server:

    $ python -m SimpleHTTPServer

View the template:

    $ open http://localhost:8000?diagram=template



## Making a new diagram

Copy the template into a new script:

    $ cp diagrams/template.js diagrams/<new-diagram-name>.js

Open your diagram:

    $ open http://localhost:8000?diagram=<new-diagram-name>



## Sample diagram:

[linked-list-small.js](diagrams/linked-list-small.js)

    $ open http://localhost:8000?diagram=linked-list-small



## Generating elements

See cheetsheet at the bottom of the template and [SVG MDN documentation](https://developer.mozilla.org/en-US/docs/Web/SVG).



## Available functions

```
setSVGDimensions

roundDown (x and y coordinates are rounded down for you)

xof

yof

randRange (inclusive)

randSign
```



## Default values

```
var darkColor  = '#555';
var lightColor = 'white';

var icBlue            = 'rgb(91, 192, 222)';
var icBlueTransparent = 'rgba(91, 192, 222, 0.15)';
var transparent       = 'rgba(255, 255, 255, 0)';

var fill = lightColor;
var stroke = darkColor;
var strokeWidth = 1;
var borderRadius = 0;

var fontColor  = darkColor;
var fontWeight = 'normal';
var textAnchor = 'middle';

var mathFont = 'Droid Serif';
```

Use our transparent value, not the css value `transparent` (in browsers that don't support rgba, we want to default to white not black).

You can override a default value and it will apply to all elements.



## Submitting your diagram to Interview Cake

Add the svg page

Add the data in settings

Add a description

Include on the page using the tag



## Style guide

One pen

Tight margines, diagram should be nearly at the edge of the diagram

Think about how you'd draw it on paper



## Planned features

- load a specific diagram function by passing an index or function name in the query string
- generate and display the dictionary of data for settings to copy
- make old diagrams compatible with new version
- testing and error messages
