document.addEventListener("DOMContentLoaded", function () {
	/*===================DROP FILTER====================*/
	const dropFilters = document.querySelectorAll('.custom-drop');
	if (dropFilters.length > 0) {
		for (let item of dropFilters) {
			const itemSelect = item.querySelector('.custom-drop__val');
			const itemDrop = item.querySelector('.custom-drop__list');
			// const itemDropItems = item.querySelectorAll('.drop-filter__item');

			item.addEventListener('click', function (e) {

				if (this.classList.contains('active')) {
					this.classList.remove('active');
				} else {
					this.classList.add('active');
				}
			});
			/********click Drop item******* */
			if (itemDrop) {
				itemDrop.addEventListener('click', function (e) {
					e.stopPropagation();
					const selectItemText = e.target.textContent;
					itemSelect.querySelector('input').value = selectItemText;
					item.classList.remove('active');
				});
			}
		}
	}
});