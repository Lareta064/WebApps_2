document.addEventListener("DOMContentLoaded", function () {
	//====== OPEN HEADER MENU ========
	const menuToggle = document.querySelector('.menu-toggle');
	const headerMenu = document.querySelector('#header-menu');
	const bodyEl = document.querySelector('body');
	menuToggle.addEventListener('click', function () {
		if (menuToggle.classList.contains('active')) {
			this.classList.remove('active');
			headerMenu.classList.remove('active');
			bodyEl.classList.remove('lock');
		} else {
			this.classList.add('active');
			headerMenu.classList.add('active');
			bodyEl.classList.add('lock');
		}

	});
});