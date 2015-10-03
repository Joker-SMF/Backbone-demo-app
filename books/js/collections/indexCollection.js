(function() {
	App.collections = App.collections || {};

	App.collections.indexCollection = Backbone.Collection.extend({
		url: 'https://www.googleapis.com/books/v1/volumes?q=mobile&maxResults=30',
		initialize: function() {
			this.fetch();
		},
		parse: function(resp) {
			return resp.items;
		}
	});
})();
