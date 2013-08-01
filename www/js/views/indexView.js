(function() {
	App.views = App.views || {};

	App.views.indexItemView = Backbone.Marionette.ItemView.extend({
		template: "#individual_book-template",
		tagName: "div",
		className: "book_info",
		childView: true,
		events: {
			'click .book_info' : 'bookName'
		},

		initialize: function() {
			_.bindAll(this, 'bookName');
		},

		bookName: function(e) {
			e.preventDefault();
			var id = this.model.get('id');
			App.customRoutes.navigate('book_details/' + id, {
				trigger : true
			});
		}
	});

	App.views.indexView = Backbone.Marionette.CompositeView.extend({
		template: "#books_listing-template",
		itemView: App.views.indexItemView,
		customEl: 'show_book_details',
		tagName: 'div',
		className: 'books_listing',
		initialize: function() {
		},
	});
})();