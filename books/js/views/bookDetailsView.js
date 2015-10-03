(function() {
	App.views = App.views || {};

	App.views.bookDetailsView = Backbone.Marionette.ItemView.extend({
		template: "bookDetails",
		tagName: 'div',
		className: 'scroll_class',
		scrollArea: {
			applyScroll: false,
			element: '.scroll_class',
			adjust: 0,
		},

		initialize: function() {
			var _this = this;
		},
	});
})();