# Notes
Анимации с помощью @keyframes. Сначала анимацию необходимо определить:
```
@keyframes <name> {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(90deg);
    }
}
```

Чтобы применить анимацию к элементу, используются следующие свойства:
```
animation-name: <name>; *самое важное
animation-duration: 2s; *
animation-iteration-count: infinite/<number>; // количество повторений анимации
animation-direction: alternate; // можно поменять направление анимации (сделать ее со 100% до 0% например)
animation-delay: 1s;
animation-timing-function: ease-in-out;
```

Иной способ написания:
```
@keyframes <name> {
    0% { // from - значит 0%, аналогично с to
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(90deg);
    }
}
```

Если шаги для разных этапов анимации одинаковые, их можно объединить через запятую
```
@keyframes up-and-down {
    0%, 100% {
        transform: translateY(0px);
    }
    50% {
        transform: translateY(-25px);
    }
}
```

## Animation-Fill-Mode Property
Определяет, как анимация CSS применяет стили к элементу до и после ее выполнения.
1. `animation-fill-mode: none` - дефолтное значение, возвращает элемент к исходному состоянию
2. `: forwards` - элемент остается в том положении, которое было на 100% момент.
3. `: backwards` - в начале, при наличии delay, элемент остается в положении 0%.