# Notes
## CSS Variables
https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties

A common best practice is to define custom properties on the :root pseudo-class, so that it can be applied globally across your HTML document:
```
:root {
  --main-bg-color: brown;
}
```

> Параметры должны начинаться с --

You use the custom property value by specifying your custom property name inside the var() function, in place of a regular property value:
```
element {
  background-color: var(--main-bg-color);
}
```

## Псевдокласс :root
То же, что и корневой элемент \<html\>, правила здесь будут доступны всем элементам документа.

Их можно переопределить в каждом элементе отдельно.