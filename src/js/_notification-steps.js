
document.addEventListener("DOMContentLoaded", function () {
	/*************стр УВЕДОМЛЕНИЯ  переключение этапов************ */
	const notifyPage = document.querySelector('.notification-page');
	if (notifyPage) {
		const nextStepBtn = notifyPage.querySelector('[data-next]');
		const prevStepBtn = notifyPage.querySelector('[data-prev]');

		nextStepBtn.addEventListener('click', function (e) {
			this.closest('.notification-step-one').classList.remove('active');
			notifyPage.querySelector('.notification-step-two').classList.add('active');
		});

		prevStepBtn.addEventListener('click', function (e) {
			this.closest('.notification-step-two').classList.remove('active');
			notifyPage.querySelector('.notification-step-one').classList.add('active');
		});
	}
});