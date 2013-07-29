(function() {
	App.views = App.views || {};

	App.views.bookDetailsView = Backbone.Marionette.ItemView.extend({
		template: "#book_details-template",
		tagName: 'div',
		className: 'book_details',
		initialize: function() {
			var _this = this;
			_.bindAll(this, 'render');
			this.listenTo(this.model, 'change', this.render);
		},
	});

	/*App.views.indexView = Backbone.Marionette.CompositeView.extend({
		tagName: "table",
		id: "books_listing",
		template: "#books_listing-template",
		itemView: App.views.indexItemView,
		customEl: 'tbody.individual_book',

		initialize: function() {
		},
	});*/
})();