# Notes
## Universal selector
`*` - selects every element on a page. Usually used for making padding and margin 0 for all elements. 
## Attribute selector
`tag[attr_name="value"] {}`. For example:
```
input[type="number"] {
    background-color: gold;
}
```
You can also match pattern instead of exact values:
```
a[href^="#"] {
    // style for links which start on #
}
```
`$, *` - other possible patterns.
## Grouping selector
By using comma you can select multiple elements.
```
h1\*,\* h2 {}
```
## Descendant combinator
Select h2 inside div (at any level):
```
div h2 {}
```
## Child combinator
`>` selects elements that are direct children of the first element.
```
<ul>
    <li>First</li>
    <ol>
        <li>Second</li>
    </ol>
</ul>
```
`ul > li` selects only the First element. `ul li` selects all li elements.
## Compound selector
Select div with class special:
```
div.special
```
