
// Кнопка поиска

	$('.btn-search').on('click', function(e) {
		e.preventDefault();
		$('#searchform, .btn-search').toggleClass('btn-search-active');
		$('#myinput').focus();
	});


// Кнопка меню

$(document).ready(function() {
	$('.menu-btn').on('click', function(e) {
		e.preventDefault();
		$('.menu-btn, .header__menu, .modal').toggleClass('show');
	});
});



// Отключение меню по нажатию пустой области

document.documentElement.addEventListener("click", function(e) {
	if (e.target.closest('.modal')) {
		let nav_toggle = document.querySelector('.header__menu');
		let nav_btn = document.querySelector('.menu-btn');
		let nav_modal = document.querySelector('.modal');
		nav_toggle.classList.remove('show');
		nav_btn.classList.remove('show');
		nav_modal.classList.remove('show');
	}
});