const controller = document.getElementById("controller")
const Stars = document.getElementById("starImage")

window.addEventListener('scroll', function(){
	let value = window.scrollY;
	controller.style.right  = value *1 +"px";
	controller.style.top  = value *1 +"px";
	Stars.style.right = value *.5 +"px"
})