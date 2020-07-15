// side-menu
const selectElement = (element) => document.querySelector(element);

const header = selectElement('header');
const mainContent = selectElement('article');
selectElement('.bar-btn').addEventListener('click',() => {
    header.classList.toggle('active');
    mainContent.classList.toggle('active');
    
});
selectElement('.closebtn').addEventListener('click',() => {
    header.classList.toggle('active');
    mainContent.classList.toggle('active');
    
});

window.onclick = (event) => {
    if(event.target.matches('.active')){
        if(header.classList.contains('active')){
             header.classList.remove('active');
                mainContent.classList.remove('active');
        }
    }
};

$('.slider-section, .testimonial').owlCarousel({
    loop:true,
    nav:false,
    margin:5,
    autoplay:true,
    responsive:{
        0:{
            items:1
        }
    }
})

//mix it up

var mixer = mixitup('.productss');

//popup div


$(function () {
	$('.popup-modal').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#username',
		modal: true
	});
	$(document).on('click', '.popup-modal-dismiss', function (e) {
		e.preventDefault();
		$.magnificPopup.close();
	});
});
//mobile menu 
$(document).ready(function(){
    $('#menu-bar').click(function(){
        $('.main-menu').toggle(500);
    });
});
//smooth menu 
var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 500
});










