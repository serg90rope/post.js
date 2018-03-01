# post.js
Here you find the separated post.js functions and might to find their html-code/styles.



### postDate(dateFormat, language, abbreviated);

Приймає три аргументи:
  ``` javascript
      dateFormat (string), language (string), abbreviated (bool). 
      Default: 'dd.mm.yyyy', 'ru', false
  ```

Додаємо клас "date-N", де N - кількість "відмотаних" днів. <br />
Наприклад, код нижче, "мотає" 0 днів назад (тобто, сьогодні).
``` html
  <span class="date-0"></span>
```
