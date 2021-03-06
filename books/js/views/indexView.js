(function() {
	App.views = App.views || {};

	App.views.indexItemView = Backbone.Marionette.ItemView.extend({
		template: "index.item",
		tagName: "div",
		className: "book_info",
		childView: true,
		events: {
			'click': 'bookName'
		},

		initialize: function() {
			_.bindAll(this, 'bookName');
		},

		bookName: function(e) {
			e.preventDefault();

			var id = this.model.get('id');
			App.vent.trigger('callController', {
				controller: 'indexPage',
				func: 'test',
				id: id
			});
		}
	});

	App.views.indexView = Backbone.Marionette.CompositeView.extend({
		template: "index",
		itemView: App.views.indexItemView,
		customEl: 'show_book_details',
		tagName: 'div',
		className: 'books_listing',
		scrollArea: {
			applyScroll: false,
			element: '.show_book_details',
			adjust: 0,
			className: 'my_scroll'
		},
		initialize: function() {},
	});
})();