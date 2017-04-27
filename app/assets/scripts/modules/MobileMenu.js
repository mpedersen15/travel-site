import $ from 'jquery';

class MobileMenu {
	constructor(){
		this.menuIcon = $(".site-header__menu-icon");
		this.menuContent = $(".site-header__menu-content");
		this.events();
	}
	
	events(){
		console.log('this 1', this);
		this.menuIcon.click(this.toggleTheMenu.bind(this));
	}
	
	toggleTheMenu(){
		console.log('this 2', this);
		console.log('time to toggle the menu');
		this.menuContent.toggleClass("site-header__menu-content--is-visible");
	}
}

export default MobileMenu;