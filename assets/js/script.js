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
		const atBlocks = document.querySelectorAll('.attempts');
		const attemptsCounter = document.querySelectorAll('.atCount');
		const lever = document.querySelector('#lever');
		const bigWin = document.querySelector('.big-win');
		const bigWinImg = document.querySelector('#big-win-img-modal');
		const lBarrel = document.querySelector('#lBarrel');
		const mBarrel = document.querySelector('#mBarrel');
		const rBarrel = document.querySelector('#rBarrel');
		const overlay = document.querySelector('.modal-overlay');
		const wrapper = document.querySelector('.modal-wrapper');
		const modal = document.querySelector('.modal');
		const fireball = document.querySelector('#fireball');
		const container = document.querySelector('.fireworks');
		const sound = document.querySelector('.sound')
		const fireworks = new Fireworks.default(container, {
			autoresize: true,
			opacity: 0.5,
			acceleration: 1.45,
			friction: 0.97,
			gravity: 1.5,
			particles: 200,
			traceLength: 1,
			traceSpeed: 10,
			explosion: 10,
			intensity: 30,
			flickering: 50,
			lineStyle: 'round',
			hue: {
				min: 0,
				max: 360
			},
			delay: {
				min: 30,
				max: 60
			},
			rocketsPoint: {
				min: 50,
				max: 50
			},
			lineWidth: {
				explosion: {
					min: 1,
					max: 10
				},
				trace: {
					min: 1,
					max: 1
				}
			},
			brightness: {
				min: 50,
				max: 80
			},
			decay: {
				min: 0.015,
				max: 0.03
			},
			mouse: {
				click: false,
				move: false,
				max: 1
			},
			// sound: {
			// 	enabled: true
			// }
		});

		// let macAudio = document.querySelector('#mac')
		// window.addEventListener('click', () => {
		// 	macAudio.load();
		// })
		// window.addEventListener('touchstart', () => {
		// 	macAudio.load();
		// })

		let macAudio = new Audio();
		macAudio.autoplay = true;
		macAudio.src = "data:audio/mpeg;base64,SUQzBAAAAAABEVRYWFgAAAAtAAADY29tbWVudABCaWdTb3VuZEJhbmsuY29tIC8gTGFTb25vdGhlcXVlLm9yZwBURU5DAAAAHQAAA1N3aXRjaCBQbHVzIMKpIE5DSCBTb2Z0d2FyZQBUSVQyAAAABgAAAzIyMzUAVFNTRQAAAA8AAANMYXZmNTcuODMuMTAwAAAAAAAAAAAAAAD/80DEAAAAA0gAAAAATEFNRTMuMTAwVVVVVVVVVVVVVUxBTUUzLjEwMFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/zQsRbAAADSAAAAABVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/zQMSkAAADSAAAAABVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV";
		macAudio.src = '../../assets/audio/win.mp3';

		let macBGSound = new Audio();
		macBGSound.src = "data:audio/mpeg;base64,SUQzBAAAAAABEVRYWFgAAAAtAAADY29tbWVudABCaWdTb3VuZEJhbmsuY29tIC8gTGFTb25vdGhlcXVlLm9yZwBURU5DAAAAHQAAA1N3aXRjaCBQbHVzIMKpIE5DSCBTb2Z0d2FyZQBUSVQyAAAABgAAAzIyMzUAVFNTRQAAAA8AAANMYXZmNTcuODMuMTAwAAAAAAAAAAAAAAD/80DEAAAAA0gAAAAATEFNRTMuMTAwVVVVVVVVVVVVVUxBTUUzLjEwMFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/zQsRbAAADSAAAAABVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/zQMSkAAADSAAAAABVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV";
		macBGSound.src = '../../assets/audio/bg-sound.mp3';
		macBGSound.volume = 0.2;
		macBGSound.loop = true;
		macBGSound.load();

		let atCount = 2;
		let disabled = false;

		spinBtn.addEventListener('click', spin);
		lever.addEventListener('click', spin);
		sound.addEventListener('click', toggleSound)

		let generalBoxesClone,
			poolHeight,
			boxHeight,
			spinCount = 1;

		function toggleSound() {
			sound.classList.toggle('on');
			if (sound.classList.contains('on')) {
				sound.src = '../assets/img/sound-on.svg'
				macBGSound.play();
			} else {
				sound.src = '../assets/img/sound-off.svg';
				macBGSound.pause();
			}
		}

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
			if (!disabled) {
				if (atCount === 1) {
					spinBtn.classList.remove('pulseAnim');
					atBlocks.forEach(block => block.classList.remove('pulseAnim'));
				}

				atCount -= 1;
				disabled = true;
				attemptsCounter.forEach(at => at.innerText = ` ${atCount}`);
				poolHeight = (poolHeight / 2) + (boxHeight);

				lever.classList.add('active');
				spinBtn.classList.add('active');
				fireball.classList.add('active');

				setTimeout(() => {
					spinBtn.classList.remove('active');
					lever.classList.remove('active');
				}, 400);

				for (const door of doors) {
					const boxes = door.querySelector('.boxes');
					const duration = parseInt(boxes.style.transitionDuration);
					boxes.style.transform = !door.dataset.spinned ? `translateY(-${poolHeight / 2}px)` : `translateY(0)`

					await new Promise((resolve) => setTimeout(resolve, duration * 10));

					generalBoxesClone.addEventListener(
						'transitionstart',
						function () {
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
								// box.dataset.doNotLookHere = items.find(el => el.id === +box.dataset.id).winner
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
						disabled = false;

						fireball.classList.remove('active')

						//pulse after 1 spin
						spinBtn.classList.add('pulseAnim');
						atBlocks.forEach(block => block.classList.add('pulseAnim'));

						if (spinCount === 3) {
							macAudio.play();
							fireworks.start();

							spinBtn.classList.remove('pulseAnim');
							atBlocks.forEach(block => block.classList.remove('pulseAnim'));

							overlay.classList.add('active');
							wrapper.classList.add('active');
							modal.classList.add('active');
							return
						} else {
							if (leftBlock.dataset.doNotLookHere === 'true' &&
								middleBlock.dataset.doNotLookHere === 'true' &&
								rightBlock.dataset.doNotLookHere === 'true') {
								spinBtn.classList.remove('pulseAnim');
								atBlocks.forEach(block => block.classList.remove('pulseAnim'));

								bigWin.classList.add('active')
								bigWinImg.classList.add('active');

								setTimeout(() => {
									lBarrel.classList.add('active');
								}, 200);
								setTimeout(() => {
									mBarrel.classList.add('active');
								}, 400);
								setTimeout(() => {
									rBarrel.classList.add('active');
								}, 600);

								setTimeout(() => {
									bigWin.classList.remove('active')
									bigWinImg.classList.remove('active');
									lBarrel.classList.remove('active');
									mBarrel.classList.remove('active');
									rBarrel.classList.remove('active');

									macAudio.play();
									fireworks.start();
									overlay.classList.add('active');
									wrapper.classList.add('active');
									modal.classList.add('active');

								}, 2000);

							}
							return
						}
					},
					{ once: true }
				);
				spinCount += 1;
			}
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