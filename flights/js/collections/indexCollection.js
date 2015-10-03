(function() {
	App.collections = App.collections || {};

	App.collections.indexCollection = Backbone.Collection.extend({
		initialize: function() {
			var _this = this;
			_this.fetch({
				url: "data.json",
				success: function() {
					console.log("JSON file load was successful", _this);
				},
				error: function() {
					console.log('There was some error in loading and processing the JSON file');
				}
			});
		},

		parse: function(resp) {
			return resp.flightsData;
		}
	});
})();
