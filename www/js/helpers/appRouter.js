(function() {
	//http://jsfiddle.net/2QYrk/1/
	window.App = window.App || {};
	App.routers = App.routers || {};

	App.mainRouters = Backbone.Marionette.AppRouter.extend({
		appRoutes: {
			'': 'index',
			'index': 'index',
			'book_details/:id': 'bookDetails'
		},

		route: function(route, name, callback) {
			return Backbone.Router.prototype.route.call(this, route, name, function() {
				this.trigger.apply(this, ['beforeroute:' + name].concat(_.toArray(arguments)));
				this.trigger.apply(this, ['onRoute'].concat(route, name, arguments));
				callback.apply(this, arguments);
			});
		},
	});
// });
})();