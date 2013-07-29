(function() {
	App.views = App.views || {};

	App.views.indexItemView = Backbone.Marionette.ItemView.extend({
		template: "#individual_book-template",
		tagName: 'tr',
		events: {
			'click .book_name' : 'bookName'
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
		tagName: "table",
		id: "books_listing",
		template: "#books_listing-template",
		itemView: App.views.indexItemView,
		customEl: 'tbody.individual_book',

		initialize: function() {
		},
	});
})();