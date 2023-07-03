# Notes
## Background images
Можно использовать сразу несколько изображений. Если в изображении задний фон отсутствует, то заодно можно использовать background color

https://developer.mozilla.org/en-US/docs/Web/CSS/background-image

Чтобы выключить повторение изображения (когда контейнер больше изображения), необходимо написать:
```
background-repeat: no-repeat;
```
https://developer.mozilla.org/en-US/docs/Web/CSS/background-repeat
 
`background-clip` - задает, выходит ли фон элемента за его рамку
https://developer.mozilla.org/en-US/docs/Web/CSS/background-clip

`background-size` - регулирует размер изображения в контейнере. `=cover` - полностью заполняет контейнер по возможности. `=contain` - вставляет изображение в полном размере, и если оно не вписывается в контейнер, повторяет его. 
https://developer.mozilla.org/en-US/docs/Web/CSS/background-size
## Gradients
Значения градиента вставляется в `background-image`

`linear-gradient()` - переход между 2 и более цветами по прямой линии. Угол линии можно менять.
https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/linear-gradient

`radial-gradient()` - переход между 2 и более цветами от точки в центре по окружности.
https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/radial-gradient

`conic-gradient()` - переход между 2 и более цветами из центра по окружности (т.е. rafial-gradient исходит из центра несколькими кругами, в то время как conic и центра одной окружностью)
https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/conic-gradient
## Background Shorthand Property
https://developer.mozilla.org/en-US/docs/Web/CSS/background
## Filters
`filter` property applies graphical effects like blur or color shift to an element. Filters are commonly used to adjust the rendering of images, backgrounds, and borders.

https://developer.mozilla.org/en-US/docs/Web/CSS/filter