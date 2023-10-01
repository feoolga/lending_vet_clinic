const loader = document.querySelector('#loader')
let paddingSpoiler = 10

window.onload = function(){
	loader.remove()
}

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
			})
		} else{
			document.querySelectorAll(".spoiler__text").forEach((elem) => {
				elem.style.paddingTop = '0'
				elem.style.paddingBottom = '0'
				elem.style.maxHeight = null
				elem.classList.remove('open')
			})
			text.style.paddingTop = paddingSpoiler + "px"
			text.style.paddingBottom = paddingSpoiler + "px"
			text.style.maxHeight = text.scrollHeight + (paddingSpoiler*2) + "px"  //Переменная?
			elem.nextElementSibling.classList.add('open')
		}
	})
})