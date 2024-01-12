
document.addEventListener("DOMContentLoaded", function () { 
	//====== each group and toggle active class ========
	const tabs = document.querySelectorAll('.tabs');
	const tabsInner = document.querySelectorAll('.tabs-inner');
	function customTab(parentArr, btnCl, contentCl) {
		for (let item of parentArr) {
			const itemBtns = item.querySelectorAll(btnCl);
			const itemContents = item.querySelectorAll(contentCl);
			if (itemBtns.length <= 0 || itemContents.length <= 0) return;

			for (let itBtn of itemBtns) {
				itBtn.addEventListener('click', function (e) {
					e.stopPropagation();
					if (!e.target.hasAttribute('tab-btn')) return;
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
				});
			}

		}
	}
	if (tabs.length > 0) {
		customTab(document.querySelectorAll('.tabs'), '.tabs-btn', '.tabs-body');
		customTab(document.querySelectorAll('.tabs-inner'), '.tabs-inner-btn', '.tabs-inner-body');

	}

});