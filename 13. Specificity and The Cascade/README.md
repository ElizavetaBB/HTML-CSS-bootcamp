# Notes
## Sibling Combinator
### Adjacent sibling combinator
```
h1 + p {}
```
The + combinator selects elements that are directly after the first element.
### General sibling combinator
https://developer.mozilla.org/en-US/docs/Web/CSS/General_sibling_combinator
```
img ~ p {}
```
The ~ combinator selects siblings. The 2nd element must follow the 1st (immediately or not), and they must have the same parent.
## Pseudo-classes
https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes
Example - `:hover`
## Pseudo elements
A keyword added to a selector that lets you style a specific part of the selected element(s). For example, `::first-line` can be used to change the font of the first line of a paragraph.
## Specificity
Priority (when setting the same property):
1. Inline styles
2. ID selectors
3. Class | Attribute | Pseudo-Class
4. Type | Pseudo-Elements
## Specificity calculating
IDs + Class|Attribute|Pseudo-Class + Type|Pseudo-Elements.
## Importance and The Cascade
Which rule whins - The CSS Cascade https://2019.wattenberger.com/blog/css-cascade
1. Importance:
    1. transition
    2. !important
    3. animation
    4. normal
2. Origin:
    1. website
    2. user
    3. browser
3. Specificity
4. Position - the latest wins

`!important` - mark a declaration as important to ignore the specificity