(function() {
	App.collections = App.collections || {};

	App.collections.indexCollection = Backbone.Collection.extend({
		url: 'https://www.googleapis.com/books/v1/volumes?q=mobile',
		initialize: function() {
			this.fetch();
		},
		parse: function(resp) {
			return resp.items;
		}
	});
})();