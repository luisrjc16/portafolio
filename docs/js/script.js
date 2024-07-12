let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
	menuIcon.classList.toggle('bx-x'); 
	navbar.classList.toggle('active');
};

/* Secciones */
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
	sections.forEach(sec => {
		let top = window.scrollY;
		let offset = sec.offsetTop - 150;
		let height = sec.offsetHeight;
		let id = sec.getAttribute('id');
		
		if(top >= offset && top < offset + height) {
			navLinks.forEach(links => {
				links.classList.remove('active');
				document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
			});
		};
	});
	
	menuIcon.classList.remove('bx-x');
	navbar.classList.remove('active');
	myFunction();
};

/*
	Transiciones
*/

window.addEventListener('scroll', reveal);
function reveal(){
	var reveals = document.querySelectorAll('.reveal');
	for(var i=0; i < reveals.length; i++){
		var windowheight = window.innerHeight;
		var revealtop = reveals[i].getBoundingClientRect().top;
		var revealpoint = 150;
		
		if(revealtop < windowheight - revealpoint) { 
			reveals[i].classList.add('active');
		}else{
			reveals[i].classList.remove('active');
		}
	}
}

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}