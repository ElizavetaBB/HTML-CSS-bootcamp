# Notes
## Flex свойство
Применяется к отдельному элементу - определяет, как flex-элемент будет увеличиваться или уменьшаться, чтобы соответствовать пространству, доступному в его flex-контейнере. https://developer.mozilla.org/en-US/docs/Web/CSS/flex

```
flex: <flex-grow> <flex-shrink> <flex-basis>
```

### flex-grow
Задает коэффициент увеличения гибкости, который указывает, какая часть оставшегося пространства гибкого контейнера должна быть назначена основному размеру гибкого элемента. 
https://developer.mozilla.org/en-US/docs/Web/CSS/flex-grow 

### flex-shrink
Задает коэффициент сжатия гибкого элемента. Если размер всех flex-элементов больше, чем flex-контейнер, элементы сжимаются в соответствии с этим параметром. https://developer.mozilla.org/en-US/docs/Web/CSS/flex-shrink

## flex-basis
Устанавливает начальный основной размер гибкого элемента. Он устанавливает размер блока содержимого, если иное не установлено с помощью box-sizing. https://developer.mozilla.org/en-US/docs/Web/CSS/flex-basis

## Order свойство
Задает порядок размещения элемента в контейнере flex или grid. Элементы в контейнере сортируются по возрастанию значения, а затем по порядку их исходного кода. https://developer.mozilla.org/en-US/docs/Web/CSS/order.

Для чего используется https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items#use_cases_for_order