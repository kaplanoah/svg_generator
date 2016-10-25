# Svg Generator

A tool for making SVGs that are easy to manipulate.

## How it works

**svg-generator-template.html** (in diagrams > templates) contains an empty element:

```html
<div class="diagram image">
    <svg></svg>
</div>
```

**generate-elements.js** (in js) contains functions that:

1. take arguments for styling and position
1. creates svg elements
1. appends them inside the svg tag

Dynamic variables for styling and position (cooridnates, offsets, colors, widths) set in **svg-generator-template.html** can easily be used to allow significant changes to an svg with very little changes to the code.

For viewing Interview Cake on phones, SVGs with widths greater than 300 are automatically given a class 'diagram-large'.

When the svg is ready, copy the div surrouding the svg from the developer console, and paste it into your file.


## Setup

```
cp diagrams/template.js diagrams/<new-diagram>.js

python -m SimpleHTTPServer

open http://localhost:8000?diagram=<new-diagram>
```


## Static variables

```
defaultDarkColor
defaultLightColor
mathFont
icBlue
icBlueLight
transparent
```


## Adding your diagrams

`settings.py`
