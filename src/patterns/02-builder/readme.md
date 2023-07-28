# Builder

> Позволяет создавать сложные объекты пошагово.

- Type: Creational
- Complexity: ⭐⭐

Пожалуйста, реализуйте методы `addPagination`, `addSort` и `addFilter`
класса `RequestBuilder`, к-е позволят создавать объекты запросов на сервер
различной конфигурации.

```js
const request = new RequestBuilder()
  .addPagination(10, 20)
  .addSort('name', 'asc')
  .addFilter('age', 18, 36);
```
