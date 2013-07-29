(function() {
	App.views = App.views || {};

	App.views.bookDetailsView = Backbone.Marionette.ItemView.extend({
		template: "#book_details-template",
		tagName: 'div',
		className: 'book_details',
		initialize: function() {
			var _this = this;
		},
	});
})();