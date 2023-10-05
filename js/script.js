const loader = document.querySelector('#loader')
let paddingSpoiler = 10

window.onload = function(){

	loader.remove()

/* обсервер  /---/---/---/---/---/---/---/---/---/--- */

	let options = {
		root: null,
		rootMargin: "5px",
		threshold: 0.5,
	};

	const observer = new IntersectionObserver((entries, observer) => {
		// для каждой записи-целевого элемента
		entries.forEach(entry => {
			// если элемент является наблюдаемым
			if (entry.isIntersecting) {
				const elemAnim = entry.target
				// меняем класс
				// entry.isIntersecting ? entry.target.classList.replace('active', 'activeBack') : entry.target.classList.replace('activeBack', 'active')
				elemAnim.classList.add('active')
				// прекращаем наблюдение
				observer.unobserve(elemAnim)
			}
		})
	}, options)

	// с помощью цикла следим за всеми классами anim на странице
	const animations = document.querySelectorAll('.anim')
	animations.forEach(animation => {
		observer.observe(animation)
	})
}

/* скролл к нужным блокам  /---/---/---/---/---/---/---/---/---/--- */

function scrollToBlock(element, option="center"){
	document.querySelector(element).scrollIntoView({ behavior: "smooth", block: option, inline: "nearest" });
}

/* аккордеон-спойлер  /---/---/---/---/---/---/---/---/---/--- */

document.querySelectorAll(".spoiler__title").forEach((elem) => {
	// console.log(elem);
	elem.addEventListener('click', function(){
		// console.log(this);
		let text = this.nextElementSibling

		if(text.style.maxHeight){
			document.querySelectorAll(".spoiler__text").forEach((elem) => {
				elem.style.paddingTop = '0'
				elem.style.paddingBottom = '0'
				elem.style.maxHeight = null
				elem.classList.remove('open')
				elem.previousElementSibling.classList.remove('open')
			})
		} else{
			document.querySelectorAll(".spoiler__text").forEach((elem) => {
				elem.style.paddingTop = '0'
				elem.style.paddingBottom = '0'
				elem.style.maxHeight = null
				elem.classList.remove('open')
				elem.previousElementSibling.classList.remove('open')
			})
			text.style.paddingTop = paddingSpoiler + "px"
			text.style.paddingBottom = paddingSpoiler + "px"
			text.style.maxHeight = text.scrollHeight + (paddingSpoiler*2) + "px"  //Переменная?
			elem.nextElementSibling.classList.add('open')
			elem.classList.add('open')
		}
	})
})

/* слайдер свайпер  /---/---/---/---/---/---/---/---/---/--- */

const swiper = new Swiper('.swiper', {
	effect: 'coverflow',
	coverflowEffect: {
	  rotate: 30,
	//   slideShadows: false,
	  depth: 100,
	  modifier: 1,
	  slideShadows: true,
	},
  });

// const swiper = new Swiper('.swiper', {
// 	effect: `cards`,
// 	cardsEffect: {
// 		perSlideOffset: 5,
// 		perSlideRotate:2,
// 		rotate: true,
// 		slideShadows:true,
// 	},
//   });

/* стрелочка вверх  /---/---/---/---/---/---/---/---/---/--- */

const btnUp = {
    el: document.querySelector('.btn-up'),
    show() {
      this.el.classList.remove('btn-up_hide');
    },
    hide() {
      this.el.classList.add('btn-up_hide');
    },
    addEventListener() {
      window.addEventListener('scroll', () => {
        const scrollY = window.scrollY || document.documentElement.scrollTop;
        scrollY > 400 ? this.show() : this.hide();
      });
      document.querySelector('.btn-up').onclick = () => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
      }
    }
  }
  
  btnUp.addEventListener();