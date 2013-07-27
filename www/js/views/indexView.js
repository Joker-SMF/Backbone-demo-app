(function() {
	App.views = App.views || {};

	App.views.indexItemView = Backbone.Marionette.ItemView.extend({
		template: "#individual_book-template",
		tagName: 'tr',

		initialize: function(){},
	});

	App.views.indexView = Backbone.Marionette.CompositeView.extend({
		tagName: "table",
		id: "books_listing",
		template: "#books_listing-template",
		itemView: App.views.indexItemView,

		initialize: function() {
		},

		appendHtml: function(collectionView, itemView){
			collectionView.$("tbody").append(itemView.el);
		}
	});
})();