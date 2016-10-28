# Svg Generator

For making SVGs programmatically that are easy to manipulate.



## Getting started

[Fork and clone the repository.](https://help.github.com/articles/fork-a-repo/)

Start your local server:

    $ python -m SimpleHTTPServer

Open a diagram:

    $ open http://localhost:8000?diagram=<diagram file name>

Diagram files are in [diagrams/](diagrams/) so for example:

    $ open http://localhost:8000?diagram=linked-list-small



## Making a new diagram

Copy the template into a new diagram file:

    $ cp diagrams/template.js diagrams/<new-diagram-name>.js

Open your diagram:

    $ open http://localhost:8000?diagram=<new-diagram-name>

There are 3 sections in your new diagram file:

#### 1. dynamic values
For variables like `nodeHeight` or `labelFontSize`.

#### 2. functions for drawing diagrams
For functions like `drawBinaryTree(depth)` or `drawArrow(startX, startY, endX, endY)`.

#### 3. generate diagrams
Give your diagram a namespace and add a function for each diagram (if you only need one diagram, just leave one function).




## Sample diagram:

[linked-list-small.js](diagrams/linked-list-small.js)

    $ open http://localhost:8000?diagram=linked-list-small



## Generating elements

See cheetsheet at the bottom of the template and [SVG MDN documentation](https://developer.mozilla.org/en-US/docs/Web/SVG).



## Helper functions

#### `setSVGDimensions(width, height)`
If you need to change your diagram dimensions for an individual diagram.

#### `roundDown(number)`
Final numerical values in your diagram should be integers. All `x` and `y` arguments are automatically rounded down for you.

#### `xof(coordinates)` and`yof(coordinates)`**
If you're storing a set of coordinates:

```javascript
var coordinates = [
    // [x, y]
    [0, 1],
    [0, 4],
    [3, 1],
    [3, 4],
]
```

you can use `xof(2)` to get the `x` coordinate at index 2.

#### `randRange(lower, upper)`
Fet a random number in the range `lower..upper` inclusive.

#### `randSign()`
Randomly get 1 or -1.



## Default values

| variable            | value                        |
| ------------------- | ---------------------------- |
| `darkColor`         | `'#555'`                     |
| `lightColor`        | `'white'`                    |
| `icBlue`            | `'rgb(91, 192, 222)'`        |
| `icBlueTransparent` | `'rgba(91, 192, 222, 0.15)'` |
| `transparent`       | `'rgba(255, 255, 255, 0)'`   |
| `fill`              | `lightColor`                 |
| `stroke`            | `darkColor`                  |
| `strokeWidth`       | `1`                          |
| `borderRadius`      | `0`                          |
| `fontColor`         | `darkColor`                  |
| `fontWeight`        | `'normal'`                   |
| `textAnchor`        | `'middle'`                   |
| `mathFont`          | `'Droid Serif'`              |

You can override a default value in your diagram file and it will apply to all elements.

Use our transparent value, not the css value `transparent` (in browsers that don't support rgba, we want to default to white not black).

For text, we use our `stroke` value as a default for the text `fill` property.



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
