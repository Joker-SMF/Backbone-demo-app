(function() {
    window.App = window.App || {};

    App = new Backbone.Marionette.Application();

    App.controller = App.controller || {};
    App.collections = App.collections || {};
    App.views = App.views || {};
    App.models = App.models || {};
    App.routers = App.routers || {};
    App.subController = App.subController || {};

    App.addRegions({
        mainRegion: "#content"
    });

    App.addInitializer(function(options) {
        App.customRoutes = new App.mainRouters({
			controller : App.controller.routeFuncs
		});
        App.customRoutes.on('beforeroute', App.controller.beforeRoute);
		App.customRoutes.on('onRoute', App.controller.onRoute);
    });
    
    App.bind('initialize:after', function(options) {
		if(Backbone.history) {
			Backbone.history.start();
		}
	});
})();