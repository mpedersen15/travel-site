import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll {
	constructor(selector, offset){
		this.offset = offset;
		this.itemsToReveal = selector;
		this.hideInitially();
		this.createWaypoints();
	}
	
	hideInitially(){
		this.itemsToReveal.addClass('reveal-item');
	}
	
	createWaypoints(){
		var that = this;
		this.itemsToReveal.each(function(){
			var currentItem = this;
			new Waypoint({
				element: currentItem,
				handler: function(){
					$(currentItem).addClass('reveal-item--is-visible');
				},
				offset: that.offset
			})
		});
	}
}

export default RevealOnScroll;