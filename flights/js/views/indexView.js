(function() {
	App.views = App.views || {};

	App.views.indexItemView = Backbone.Marionette.ItemView.extend({
		template: "index.item",
		tagName: "div",
		className: "flight_info",
		childView: true,

		initialize: function() {},

		serializeData: function() {
			var originCode = this.model.get('originCode'),
				destinationCode = this.model.get('destinationCode'),
				airlineCode = this.model.get('airlineCode'),
				price = this.model.get('price'),
				travelClass = this.model.get('class'),
				takeoffTime = moment(parseInt(this.model.get('takeoffTime'), 10)),
				landingTime = moment(parseInt(this.model.get('landingTime'), 10)),
				difference = moment.duration(landingTime.diff(takeoffTime)),
				hourDiff = parseInt(difference.asHours(), 10),
				minuteDiff = parseInt(difference.asMinutes(), 10) - hourDiff * 60;

			return {
				originCode: originCode,
				destinationCode: destinationCode,
				airlineCode: airlineCode,
				price: price,
				travelClass: travelClass,
				takeoffTime: moment(takeoffTime).format('MM/DD/YYYY HH:mm'),
				landingTime: moment(landingTime).format('MM/DD/YYYY HH:mm'),
				hourDiff: hourDiff,
				minuteDiff: minuteDiff
			};
		}
	});

	App.views.indexView = Backbone.Marionette.CompositeView.extend({
		template: "index",
		itemView: App.views.indexItemView,
		customEl: 'show_flight_details',
		tagName: 'div',
		className: 'books_listing',
		scrollArea: {
			applyScroll: false,
			element: '.show_flight_details',
			adjust: 0,
			className: 'my_scroll'
		},

		events: {
			'keyup .searchInput': 'searchInput'
		},

		initialize: function() {
			this.originalCollection = null;
			this.searchTerms = {
				'airlineCode': '',
				'class': ''
			};
			_.bindAll(this, 'searchInput');
		},

		searchInput: function(event) {
			if (_.isNumber(event.which) && event.which > 0) {
				var searchTerm = $(event.target).val(),
					searchFilter = $(event.target).data('type'),
					filterChanged = false,
					results;

				this.copyCollection();
				this.searchTerms[searchFilter] = searchTerm;

				if (this.searchTerms.airlineCode === '' && this.searchTerms.class === '') {
					this.collection.set(this.originalCollection.models);
				} else {
					if (this.searchTerms[searchFilter] === '') {
						filterChanged = true;
						if (searchFilter === 'airlineCode') {
							searchFilter = 'class';
						} else {
							searchFilter = 'airlineCode';
						}
						searchTerm = this.searchTerms[searchFilter];
					}

					results = this[filterChanged ? 'originalCollection' : 'collection'].filter(function(data) {
						var val = data.attributes[searchFilter].toLowerCase();
						return val.match(new RegExp(searchTerm));
					});
					this.collection.reset(results);
				}
			}
		},

		copyCollection: function() {
			if (this.originalCollection === null) {
				this.originalCollection = this.collection.clone();
			}
		}
	});
})();
