
document.addEventListener("DOMContentLoaded", function () { 
	//====== each group and toggle active class ========
	const tabs = document.querySelectorAll('.tabs');
	console.log(tabs);
	if (tabs.length > 0) {
		for (let item of tabs) {
			const itemBtns = item.querySelectorAll('[tab-btn]');
			const itemContents = item.querySelectorAll('[tab-body]');
			const tabOptions = item.querySelector('.tabs-body__options');
			if (itemBtns.length > 0 || itemContents.length > 0) {
				item.addEventListener('click', function (e) {
					// e.stopPropagation();
					if (e.target.hasAttribute('tab-btn')) {
						for (let btn of itemBtns) {
							btn.classList.remove('active');
						}
						e.target.classList.add('active');

						const btnData = e.target.getAttribute('tab-btn');

						for (let content of itemContents) {

							content.classList.remove('active');

							const contentData = content.getAttribute('tab-body');
							if (contentData == btnData) {
								content.classList.add('active');
							}
						}
						
					}
				});
			}
		}
	}

});