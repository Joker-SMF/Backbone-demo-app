(function() {
	App.views = App.views || {};

	App.views.indexItemView = Backbone.Marionette.ItemView.extend({
		template: "index.item",
		tagName: "div",
		className: "flight_info",
		childView: true,

		initialize: function() {},

		serializeData: function() {
			var originCode = this.model.get('originCode'),
				destinationCode = this.model.get('destinationCode'),
				airlineCode = this.model.get('airlineCode'),
				price = this.model.get('price'),
				travelClass = this.model.get('class'),
				takeoffTime = moment(parseInt(this.model.get('takeoffTime'), 10)),
				landingTime = moment(parseInt(this.model.get('landingTime'), 10)),
				difference = moment.duration(landingTime.diff(takeoffTime)),
				hourDiff = parseInt(difference.asHours(), 10),
				minuteDiff = parseInt(difference.asMinutes(), 10) - hourDiff * 60;

			return {
				originCode: originCode,
				destinationCode: destinationCode,
				airlineCode: airlineCode,
				price: price,
				travelClass: travelClass,
				takeoffTime: moment(takeoffTime).format('MM/DD/YYYY HH:mm'),
				landingTime: moment(landingTime).format('MM/DD/YYYY HH:mm'),
				hourDiff: hourDiff,
				minuteDiff: minuteDiff
			};
		}
	});

	App.views.indexView = Backbone.Marionette.CompositeView.extend({
		template: "index",
		itemView: App.views.indexItemView,
		customEl: 'show_flight_details',
		tagName: 'div',
		className: 'books_listing',
		scrollArea: {
			applyScroll: false,
			element: '.show_flight_details',
			adjust: 0,
			className: 'my_scroll'
		},

		initialize: function() {}
	});
})();
