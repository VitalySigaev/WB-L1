// Посчитайте сколько раз можно вызвать функцию document.write() внутри document.write(). Объясните результат.

// Функция document.write() используется в JavaScript для вывода текста или HTML-кода непосредственно в документ. Однако есть важное замечание: если она вызывается после того, как браузер уже полностью загрузил и отобразил HTML-документ, то она переписывает весь документ. Это может вызвать нежелательные последствия, такие как потеря данных или поломку отображения.
// Когда document.write() вызывается внутри другого document.write(), это приводит к рекурсивному вызову функции. В зависимости от браузера и настроек безопасности, количество рекурсивных вызовов document.write() может быть ограничено, и после достижения этого ограничения браузер может перестать реагировать на вызовы document.write().

// Пробовал вычислить экспериментально с помощью рекурсии, но браузер просто зависал.