(function() {
	App.models = App.models || {};

	App.models.bookDetailsModel = Backbone.NestedModel.extend({
		url: function() {
			return 'https://www.googleapis.com/books/v1/volumes/' + this.id;
		},

		initialize: function() {
			this.fetch();
		}
	});
})();