/*****************выбрать все чекбоксы************** */
const checkAllCheckbox = document.querySelector('#check-all');
const formInputCheckbox = document.querySelectorAll('.checkbox-item input[type="checkbox"]');
if (checkAllCheckbox) {
	checkAllCheckbox.addEventListener('click', function () {

		for (let item of formInputCheckbox) {

			if (item.checked !== true) item.checked = true;
			console.log(item.checked);
		}
	});
}