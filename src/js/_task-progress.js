document.addEventListener("DOMContentLoaded", function () {
	/*==========линия прогресса закрасить на определенный процент========*/
	const progressBlocks = document.querySelectorAll('.task-progress');
	if (progressBlocks.length>0){
		for (let item of progressBlocks) {
			const itemProgressVal = item.querySelector('[data-percent]').getAttribute('data-percent');
			item.querySelector('.progress-indicator').setAttribute('style', `width: ${itemProgressVal}%`);
		}
	}
});