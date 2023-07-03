# Notes
## Transition
Свойство перехода из одного состояния в другое (не для анимации).
https://developer.mozilla.org/ru/docs/Web/CSS/transition

Синтаксис:
```
transition: <property> <duration> <timing-function> <delay>;
```
1. Property - свойство, которое хотим менять плавно
2. Duration - длительность перехода (в ms, s и т.п.)
3. Timing-function - описывает сам переход (с ускорением в начале или конце и т.п.). Можно описывать свои способы перехода.
4. Delay - время, на которое откладываем переход.

> Не все свойство могут быть анимированы.
## Transform
Одно из двух лучших свойств на анимирования (второе opacity), т.к. их анимация выполняется в самый последний момент отрисовки элементов (что улучшает производительность).

Свойство позволяет поворачивать, масштабировать, наклонять или переводить (перемещать) элемент (меняет координатное пространство).
https://developer.mozilla.org/en-US/docs/Web/CSS/transform

`translate` - позволяет перемещать элементы.https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/translate

`rotate` - поворачивает элементы https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/rotate.

`transform-origin` - sets the origin for an element's transformations (вокруг какой точки происходит изменение, по дефолту - центр). Возможные значения - top left bottom right, 50px и т.п. https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin



