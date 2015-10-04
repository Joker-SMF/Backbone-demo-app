window.App = window.App || {};

App.controller = {
	initialize: function() {},

	subController: function(params) {
		var defaults = {
			region: 'mainRegion'
		};

		var args = $.extend({}, defaults, params);
		App.currentController[params.name] = new App.subController[params.name](args);
	},

	indexController: function() {
		App.controller.subController({
			name: 'indexPage'
		});
	}
};
