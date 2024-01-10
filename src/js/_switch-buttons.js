document.addEventListener("DOMContentLoaded", function () {
	//======for switch item  ========
	const itemsGroup = document.querySelectorAll('.js-group');
	if (itemsGroup.length > 0) {
		for (let item of itemsGroup) {
			const itemsGroupChilds = item.querySelectorAll('.js-group-item');
			item.addEventListener('click', function (e) {
				for (let el of itemsGroupChilds) {
					el.classList.remove('active');
				}
				e.target.classList.add('active');
			});
		}
	}
});