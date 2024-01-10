document.addEventListener("DOMContentLoaded", function () {
/*************на моб версии показать чат по клику на контакт чата************ */
const chatContacts = document.querySelectorAll('.chat-contacts-item');
if (chatContacts.length > 0) {
	for (let item of chatContacts) {
		item.addEventListener('click', function () {
			document.querySelector('.chat-window').classList.add('active');
		});
	}
}
});