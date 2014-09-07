(function (window) {
	'use strict';

	// Установка иконки, заголовка и вывод сообщения в консоли
	// в режиме отладки на локальном сервере
	if (/localhost|127\.0\.0\.1/.test(window.location.hostname)) {
		var document = window.document,
			title = document.getElementById('title'),
			titleText = 'DEBUG — ' + title.innerText;

		title.innerText = titleText;

		console.info(titleText);

		document.getElementById('favicon').href = '/debug.ico';
	}
})(window);
