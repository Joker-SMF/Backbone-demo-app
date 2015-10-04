(function() {
	App.collections = App.collections || {};

	App.collections.indexCollection = Backbone.Collection.extend({
		url: "data.json",
		model: App.models.indexModel,
		sortKey: '',

		initialize: function() {
			this.fetch();
		},

		parse: function(resp) {
			App.data = {
				'airlineMap': resp.airlineMap,
				'airportMap': resp.airportMap
			};

			_.each(resp.flightsData, function(data) {
				data.price = parseInt(data.price, 10);
				data.takeoffTime = parseInt(data.takeoffTime, 10);
				data.landingTime = parseInt(data.landingTime, 10);
			});
			return resp.flightsData;
		},

		comparator: function(item) {
			return item.get(this.sortKey);
		},

		reverseSortBy: function(sortByFunction) {
			return function(left, right) {
				var l = sortByFunction(left);
				var r = sortByFunction(right);

				if (l === void 0) return -1;
				if (r === void 0) return 1;

				return l < r ? 1 : l > r ? -1 : 0;
			};
		},

		sortCollection: function(params) {
			this.sortKey = params.sortKey;
			this.sort();

			if (!params.isAsc) {
				this.models.reverse();
			}
		}
	});
})();
