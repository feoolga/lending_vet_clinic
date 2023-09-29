const loader = document.querySelector('#loader')

window.onload = function(){
	loader.remove()
}


const spoilers = document.querySelectorAll(".spoiler")

spoilers.forEach(function(elem){
	// console.log(elem);
	elem.addEventListener('click', () => {
		// console.log(this);
		// spoilers.forEach(function(elem){
		// 	elem.nextElementSibling.classList.remove('open')
		// })
		elem.nextElementSibling.classList.toggle('open')
	})
})