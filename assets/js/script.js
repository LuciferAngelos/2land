window.onload = (function () {
	//выбор языка по браузеру, обрезаются первые 2 символа и закидывается
	//в локалсторейдж
	var language = window.navigator ? (window.navigator.language ||
		window.navigator.systemLanguage ||
		window.navigator.userLanguage) : "ru";
	language = language.substr(0, 2).toLowerCase();
	localStorage.setItem('lang', language);

	let htmlLang = document.querySelector('#language')
	htmlLang.setAttribute('value', language)

	var $html = $('html'),
		$currLang = $('.curr_lang'),
		lang = localStorage.lang,
		langList = ['en', 'de',
			//  'pt', 'pl', 'ru', 'fi', 'es', 'ro', 'hu', 
			'fr',
			//  'jp', 'in', 'cz', 'vn', 'ph', 'th', 'lt', 'lv', 'default'
		];

	if (!lang) {
		// default lang
		var countryToLang = {
			'en': 'en',
			// 'br': 'pt',
			// 'pt': 'pt',
			'de': 'de',
			// 'pl': 'pl',
			// 'ru': 'ru',
			// 'fi': 'fi',
			// 'es': 'es',
			// 'ro': 'ro',
			// 'hu': 'hu',
			'fr': 'fr',
			// 'ca': 'en',
			// 'jp': 'jp',
			// 'by': 'en',
			// 'az': 'en',
			// 'am': 'en',
			// 'ge': 'en',
			// 'md': 'en',
			// 'mn': 'en',
			// 'tm': 'en',
			// 'kg': 'en',
			// 'tj': 'en',
			// 'kz': 'ru',
			// 'cl': 'es',
			// 'pe': 'es',
			// 'mx': 'es',
			// 'co': 'es',
			// 'ph': 'ph',
			// 'vn': 'vn',
			// 'th': 'th',
			// 'in': 'en',
			// 'no': 'en',
			// 'se': 'en',
			// 'lt': 'lt',
			// 'lv': 'lv',
			// 'cz': 'cz',
			'default': 'en'
		};
		var country = $html.attr('data-country'),
			lang = countryToLang[country] || countryToLang['default'];
		localStorage.lang = lang;
	}

	if ($html.attr('data-country') === 'ca') {
		$html.addClass('cur_cad');
	}
	if ($html.attr('data-country') === 'in') {
		$html.addClass('cur_inr');
	}
	if ($html.attr('data-country') === 'no') {
		$html.addClass('cur_nok');
	}
	if ($html.attr('data-country') === 'se') {
		$html.addClass('cur_sek');
	}
	if ($html.attr('data-country') === 'br') {
		$html.addClass('cur_brl');
	}
	if ($html.attr('data-country') === 'co') {
		$html.addClass('cur_cop');
	}
	if ($html.attr('data-country') === 'mx') {
		$html.addClass('cur_mxn');
	}
	if ($html.attr('data-country') === 'pe') {
		$html.addClass('cur_pen');
	}
	if ($html.attr('data-country') === 'cl') {
		$html.addClass('cur_clp');
	}
	if ($html.attr('data-country') === 'by' ||
		$html.attr('data-country') === 'az' ||
		$html.attr('data-country') === 'am' ||
		$html.attr('data-country') === 'ge' ||
		$html.attr('data-country') === 'md' ||
		$html.attr('data-country') === 'mn' ||
		$html.attr('data-country') === 'tm' ||
		$html.attr('data-country') === 'kg' ||
		$html.attr('data-country') === 'tj'
	) {
		$html.addClass('cur_usd');
	}

	langList.forEach(function (element) {
		$html.removeClass(element).addClass(lang);
	});


	$('.lang_list_item[data-lang="' + lang + '"]')
		.addClass('curr')
		.siblings()
		.removeClass('curr');
	$currLang.html($('.lang_list_item[data-lang="' + lang + '"]').html());

	var langListData = 0;

	for (i = 0; i < langList.length; i++) {
		if (lang === langList[i]) {
			langListData = 1;
		}
	}

	if (langListData === 0) {
		$html.removeClass();
		$html.addClass('en');
		lang = 'en';
		$currLang.html($('.lang_list_item[data-lang="' + lang + '"]').html());
	}


	(function () {
		const items = [
			{
				id: 0,
				src: 'assets/img/reels-imgs/blue-pot.png',
				winner: false
			},
			{
				id: 1,
				src: 'assets/img/reels-imgs/golden-girl.png',
				winner: false
			},
			{
				id: 2,
				src: 'assets/img/reels-imgs/green-eye.png',
				winner: false
			},
			{
				id: 3,
				src: 'assets/img/reels-imgs/pharaon.png',
				winner: false
			},
			{
				id: 4,
				src: 'assets/img/reels-imgs/pot-of-gold.png',
				winner: true
			},
			{
				id: 5,
				src: 'assets/img/reels-imgs/red-ankh.png',
				winner: false
			},
			{
				id: 6,
				src: 'assets/img/reels-imgs/blue-pot.png',
				winner: false
			},
			{
				id: 7,
				src: 'assets/img/reels-imgs/golden-girl.png',
				winner: false
			},
			{
				id: 8,
				src: 'assets/img/reels-imgs/green-eye.png',
				winner: false
			},
			{
				id: 9,
				src: 'assets/img/reels-imgs/pharaon.png',
				winner: false
			},
			{
				id: 10,
				src: 'assets/img/reels-imgs/pot-of-gold.png',
				winner: true
			},
			{
				id: 11,
				src: 'assets/img/reels-imgs/red-ankh.png',
				winner: false
			},
			{
				id: 12,
				src: 'assets/img/reels-imgs/blue-pot.png',
				winner: false
			},
			{
				id: 13,
				src: 'assets/img/reels-imgs/golden-girl.png',
				winner: false
			},
			{
				id: 14,
				src: 'assets/img/reels-imgs/green-eye.png',
				winner: false
			},
			{
				id: 15,
				src: 'assets/img/reels-imgs/pharaon.png',
				winner: false
			},
			{
				id: 16,
				src: 'assets/img/reels-imgs/pot-of-gold.png',
				winner: true
			},
			{
				id: 17,
				src: 'assets/img/reels-imgs/red-ankh.png',
				winner: false
			},
			{
				id: 18,
				src: 'assets/img/reels-imgs/blue-pot.png',
				winner: false
			},
			{
				id: 19,
				src: 'assets/img/reels-imgs/golden-girl.png',
				winner: false
			},
			{
				id: 20,
				src: 'assets/img/reels-imgs/green-eye.png',
				winner: false
			},
			{
				id: 21,
				src: 'assets/img/reels-imgs/pharaon.png',
				winner: false
			},
			{
				id: 22,
				src: 'assets/img/reels-imgs/pot-of-gold.png',
				winner: true
			},
			{
				id: 23,
				src: 'assets/img/reels-imgs/red-ankh.png',
				winner: false
			},

		];

		const doors = document.querySelectorAll('.door');
		const spinBtn = document.querySelector('#spinner');
		const attemptsCounter = document.querySelectorAll('.atCount');
		const lever = document.querySelector('#lever');
		let atCount = 2;


		spinBtn.addEventListener('click', spin);


		let generalBoxesClone,
			poolHeight,
			boxHeight,
			spinCount = 1;

		function init(groups = 4, duration = 3) {
			for (const door of doors) {
				const boxes = door.querySelector('.boxes');
				const boxesClone = boxes.cloneNode(false);
				const pool = [];

				const arr = [];
				for (let n = 0; n < (groups > 0 ? groups : 1); n++) {
					arr.push(...items);
				}
				pool.push(...shuffle(arr));

				poolLength = pool.length

				boxesClone.addEventListener(
					'transitionstart',
					function () {
						door.dataset.spinned = '1';
						this.querySelectorAll('.box').forEach((box) => {
							box.style.filter = 'blur(1px)';
						});
					},
					{ once: true }
				);

				boxesClone.addEventListener(
					'transitionend',
					function () {
						this.querySelectorAll('.box').forEach((box, index) => {
							box.style.filter = 'blur(0)';

						});
					},
					{ once: true }
				);

				for (let i = pool.length - 1; i >= 0; i--) {
					const box = document.createElement('div');
					const img = document.createElement('img');
					box.classList.add('box');
					img.classList.add('reel-img');
					img.src = pool[i].src;
					box.style.width = door.clientWidth + 'px';
					box.style.height = door.clientHeight + 'px';
					box.dataset.doNotLookHere = pool[i].winner;
					box.dataset.id = pool[i].id
					box.appendChild(img);
					boxesClone.appendChild(box);
				}

				const boxHght = door.clientHeight
				boxHeight = boxHght / 2;
				boxesClone.style.transitionDuration = `${duration > 0 ? duration : 1}s`;
				boxesClone.style.transform = `translateY(-${(door.clientHeight * (pool.length - 1))}px)`;
				poolHeight = door.clientHeight * (pool.length - 1);

				door.replaceChild(boxesClone, boxes);
				generalBoxes = boxes;

				generalBoxesClone = boxesClone;
			}
			attemptsCounter.forEach(at => at.innerText = ` ${atCount}`);
		}

		async function spin() {
			atCount -= 1;
			attemptsCounter.forEach(at => at.innerText = ` ${atCount}`);
			lever.classList.add('active');
			poolHeight = (poolHeight / 2) + (boxHeight);

			for (const door of doors) {
				const boxes = door.querySelector('.boxes');
				const duration = parseInt(boxes.style.transitionDuration);
				boxes.style.transform = !door.dataset.spinned ? `translateY(-${poolHeight / 2}px)` : `translateY(0)`

				await new Promise((resolve) => setTimeout(resolve, duration * 10));

				generalBoxesClone.addEventListener(
					'transitionstart',
					function () {
						spinBtn.classList.add('active');
						this.querySelectorAll('.box').forEach((box) => {
							box.style.filter = 'blur(1px)';
						});
					},
					{ once: true }
				)

				generalBoxesClone.addEventListener(
					'transitionend',
					function () {
						this.querySelectorAll('.box').forEach((box, index) => {
							box.style.filter = 'blur(0)';
							box.dataset.spinned = '1';
							box.dataset.doNotLookHere = items.find(el => el.id === +box.dataset.id).winner
						});
					},
					{ once: true }
				);
			}

			const leftBlock = document.querySelector("#app > div:nth-child(2) > div:nth-child(1)").querySelectorAll('.boxes > .box')[24]
			const middleBlock = document.querySelector("#app > div:nth-child(2) > div:nth-child(2)").querySelectorAll('.boxes > .box')[24];
			const rightBlock = document.querySelector("#app > div:nth-child(2) > div:nth-child(3)").querySelectorAll('.boxes > .box')[24];
			const lastDoor = document.querySelectorAll('.doors')[2].querySelectorAll('.door')[2];

			lastDoor.addEventListener(
				'transitionend',
				function () {
					spinBtn.classList.remove('active');
					lever.classList.remove('active');
					if (spinCount === 3) {
						alert('Achievement unlocked! Попасть 2 раза подряд по кнопке! Ты выиграл! Вот твои тыщу спинов и тыщу якорей в задницу!')
						return
					} else {
						if (leftBlock.dataset.doNotLookHere === 'true' &&
							middleBlock.dataset.doNotLookHere === 'true' &&
							rightBlock.dataset.doNotLookHere === 'true') {
							alert('Честная победа, чо!')
						}
						return
					}
				},
				{ once: true }
			);
			spinCount += 1;
		}

		function shuffle([...arr]) {
			let m = arr.length;
			while (m) {
				const i = Math.floor(Math.random() * m--);
				[arr[m], arr[i]] = [arr[i], arr[m]];
			}
			return arr;
		}

		init();
	})();

});

$(document).ready(function () {
	let htmlLang = document.querySelector('#language')

	var $langSwitcher = $('.lang_switcher'),
		$langList = $('.lang_list'),
		$langListItem = $('.lang_list_item'),
		$html = $('html'),
		$preloader = $('.preloader'),
		$currLang = $('.curr_lang');

	$langSwitcher.click(function () {
		$langList.toggleClass('act');
	});

	$langListItem.click(function () {
		$preloader.fadeIn();
		$html.removeClass('hide');
		setTimeout(function () {
			$preloader.fadeOut();
			$html.addClass('hide');
			htmlLang.value = lang;
			htmlLang.click();
		}, 200);
		var lang = $(this).data('lang');
		var langs = $('.lang_list_item').map(function (i, el) {
			return $(el).data('lang');
		}).toArray().join(" ");
		$html.removeClass(langs).addClass(lang);
		localStorage.lang = lang;
		$('.lang_list_item[data-lang="' + lang + '"]')
			.addClass('curr')
			.siblings()
			.removeClass('curr');
		$currLang.html($(this).html());


	});

	$(document).mouseup(function (e) {
		if (!$langSwitcher.is(e.target)
			&& $langSwitcher.has(e.target).length === 0) {
			$langList.removeClass('act');
		}
	});

});