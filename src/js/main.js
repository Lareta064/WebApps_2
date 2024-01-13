document.addEventListener("DOMContentLoaded", function (){
	
	//====== OPEN HEADER MENU ========
	const menuToggle = document.querySelector('.menu-toggle');
	const headerMenu = document.querySelector('#header-menu');
	const bodyEl = document.querySelector('body');
	menuToggle.addEventListener('click', function(){
		if (menuToggle.classList.contains('active')){
			this.classList.remove('active');
			headerMenu.classList.remove('active');
			bodyEl.classList.remove('lock');
		}else{
			this.classList.add('active');
			headerMenu.classList.add('active');
			bodyEl.classList.add('lock');
		}
		
	});

	//====== each group and toggle active class ========
	const tabs = document.querySelectorAll('.tabs');
	const tabsInner = document.querySelectorAll('.tabs-inner');
	function customTab(parentArr, btnCl, contentCl){
		for (let item of parentArr) {
			const itemBtns = item.querySelectorAll(btnCl);
			const itemContents = item.querySelectorAll(contentCl);
			if (itemBtns.length <= 0 || itemContents.length <= 0) return ;
				
			for (let itBtn of itemBtns){
				itBtn.addEventListener('click', function (e) {
					e.stopPropagation();
					if (!e.target.hasAttribute('tab-btn')) return ;
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
	if (tabs.length >0){
		customTab(document.querySelectorAll('.tabs'), '.tabs-btn', '.tabs-body' );
		customTab(document.querySelectorAll('.tabs-inner'), '.tabs-inner-btn', '.tabs-inner-body');

	}

	/*===================DROP FILTER====================*/
	const dropFilters = document.querySelectorAll('.custom-drop');
	if (dropFilters.length > 0){
		for (let item of dropFilters){
			const itemSelect = item.querySelector('.custom-drop__val');
			const itemDrop = item.querySelector('.custom-drop__list');
			// const itemDropItems = item.querySelectorAll('.drop-filter__item');

			item.addEventListener('click', function(e){
				
               if(this.classList.contains('active')){
				   this.classList.remove('active');
			   }else{
				   this.classList.add('active');
			   }
			});
			/********click Drop item******* */
			if (itemDrop){
				itemDrop.addEventListener('click', function (e) {
				e.stopPropagation();
				const selectItemText = e.target.textContent;
				itemSelect.querySelector('input').value = selectItemText;
				item.classList.remove('active');
				});
		   }
		}
	}

	/* =============== modal с атрибутом frame-modal ===============*/
	const modalFramesOpen = document.querySelectorAll('[frame-btn]');
	const modalFrames = document.querySelectorAll('[frame-modal]');
	if (modalFrames.length > 0) {
		const modalFramesClose = document.querySelectorAll('[frame-close]');

		for (let item of modalFramesOpen) {
			item.addEventListener('click', function (e) {
				for (let item of modalFrames) {
					item.classList.remove('visible');

					bodyEl.classList.remove('lock');
				}
				e.preventDefault();
				const itemAttr = item.getAttribute('frame-btn');

				for (let frame of modalFrames) {
					const frameAttr = frame.getAttribute('frame-modal');
					if (frameAttr == itemAttr) {
						frame.classList.add('visible');
						bodyEl.classList.add('lock');

					}
				}
			});
		}
		/*==  закрыть модалки  frame-modal по клику на крестик ======*/
		for (let item of modalFramesClose) {
			item.addEventListener('click', function (e) {
				e.preventDefault();
				item.closest('[frame-modal]').classList.remove('visible');
				bodyEl.classList.remove('lock');


			});
		}
		/*=============== закрыть модалки по клику вне ===============*/
		for (let frame of modalFrames) {
			frame.addEventListener('click', function (e) {
				if (e.target === e.currentTarget) {
					this.classList.remove(`visible`);
					bodyEl.classList.remove('lock');
				}
			});
		}
	}
    /*==========линия прогресса закарасить на определенный процент======*/
	const progressBlocks = document.querySelectorAll('.task-progress');
	if (progressBlocks.length > 0) {
		for (let item of progressBlocks) {
			const itemProgressVal = item.querySelector('[data-percent]').getAttribute('data-percent');
			item.querySelector('.progress-indicator').setAttribute('style', `width: ${itemProgressVal}%`);
		}
	}

	/************круговой прогресс бар************* */
	const donuts = document.querySelectorAll(".loading-donut");
	if (donuts.length >0){
		function updateProgress() {
			

			donuts.forEach(donut => {
				const donutSegment = donut.querySelector(".donut-segment");
				const progressValue = +donut.getAttribute('data-progress') || 0;
				const circumference = 2 * Math.PI * parseFloat(donutSegment.getAttribute("r"));

				const progressOffset = (100 - progressValue) / 100 * circumference;
				donutSegment.style.strokeDasharray = `${circumference} ${circumference}`;
				donutSegment.style.strokeDashoffset = progressOffset;

				donut.dataset.progress = progressValue; // Update data attribute
			});
		};

		//- Invoke update progress
		updateProgress();
	}
	/*********************CHAT PAGE ***********************/
	const chatContacts = document.querySelectorAll('.chat-contacts-item');
	if (chatContacts.length > 0) {
		const chatWindow = document.querySelector('.chat-window');
		for (let item of chatContacts) {
			item.addEventListener('click', function () {
				chatWindow.classList.add('active');
			});
		}
		chatWindow.querySelector('.back-icon').addEventListener('click', (e) => {
			e.preventDefault();
			chatWindow.classList.remove('active');
		})
	}
});
