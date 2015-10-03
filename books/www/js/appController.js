window.App = window.App || {};

App.controller = {
	initialize: function() {},

	beforeRoute: function(e, args) {
		console.log('beforeroute');
	},

	onRoute: function(route, linkedCall, params) {
		console.log('onRoute params: ', params);
	},

	subController: function(params) {
		var defaults = {
			region: 'mainRegion'
		};

		var args = $.extend({}, defaults, params);
		App.currentController[params.name] = new App.subController[params.name](args);
	},

	routeFuncs: {
		index: function() {
			App.controller.subController({
				name: 'indexPage'
			});
		},

		bookDetails: function(id) {
			App.controller.subController({
				name: 'bookDetails',
				urlParams: {
					id: id
				}
			});
		}
	}
};