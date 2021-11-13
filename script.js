let menuToggle = document.querySelector(".hamburger");
let navBar = document.querySelector(".navbar");


menuToggle.addEventListener("click", function(){
	menuToggle.classList.toggle("hamburger-active");
	navBar.classList.toggle("navbar-active");

});
 

//check if the we are past the mobile breakpoints, and if so remove any active classes from the navbar/hamburger
window.addEventListener("resize", function(){
	if( window.innerWidth > 766) {
		navBar.classList.remove("navbar-active");
		menuToggle.classList.remove("hamburger-active");
	}
});


//verify the current scroll height, compare it to each section's height, and when the user 
//is scrolling past a certain section that certain's section navbar item would become active
window.addEventListener('scroll', function(){
	let homePage = document.querySelector("#home").offsetHeight;
	let aboutPage = document.querySelector("#about").offsetHeight;
	let workPage = document.querySelector("#work").offsetHeight;
	let contactPage = document.querySelector("#contact").offsetHeight;

	let listItems = document.querySelectorAll(".navbar-item")

	let currentScroll = document.documentElement.scrollTop;
 	
 	function removeActiveClass(){
 		listItems.forEach(e => e.classList.remove("currentMenuItem"));
 	}

	if(currentScroll < homePage) {
		removeActiveClass();
		listItems[0].classList.add("currentMenuItem");
	} else if(currentScroll < homePage + aboutPage) {
		removeActiveClass();
		listItems[1].classList.add("currentMenuItem");

	} else if(currentScroll < homePage + aboutPage + workPage) {
		removeActiveClass();
		listItems[2].classList.add("currentMenuItem");

	} else if(currentScroll < homePage + aboutPage + workPage + contactPage) {
		removeActiveClass();
		listItems[3].classList.add("currentMenuItem");

	}
   
});
 