// $(document).ready(function() {
// 	App.start();
// });

// <script type="text/javascript" src="js/controllers/indexController.js"></script>
// <script type="text/javascript" src="js/views/indexView.js"></script>
// <script type="text/javascript" src="js/models/indexModel.js"></script>
// <script type="text/javascript" src="js/collections/indexCollection.js"></script>
// <script type="text/javascript" src="js/controllers/bookDetailsController.js"></script>
// <script type="text/javascript" src="js/views/bookDetailsView.js"></script>
// <script type="text/javascript" src="js/models/bookDetailsModel.js"></script>


require.config({
	paths: {
		jquery: 'js/libs/jquery',
		underscore: 'js/libs/underscore',
		Backbone: 'js/libs/backbone',
		json2: 'js/libs/json2',
		backboneNested: 'js/libs/backbone-nested',
		backboneEventbinder: 'js/libs/backbone.eventbinder',
		backboneWreqr: 'js/libs/backbone.wreqr',
		backboneMarionette: 'js/libs/backbone.marionette',
		iScroll: 'js/libs/iscroll',
		application: 'js/application',
		appRouter: 'js/helpers/appRouter',
		settings: 'js/helpers/settings',
		appController: 'js/appController',
		templateManager: 'js/helpers/templateManager'
	},
	shim: {
		underscore: {
			exports: '_'
		},
		Backbone: {
			deps: ['underscore', 'jquery'],
			exports: 'Backbone'
		},
		backboneNested: {
			deps: ['Backbone'],
		},
		backboneEventbinder: {
			deps: ['Backbone'],
		},
		backboneWreqr: {
			deps: ['Backbone'],
		},
		backboneMarionette: {
			deps: ['Backbone'],
		},
		application: {
			deps: ['Backbone', 'backboneMarionette'],
		},
		appRouter: {
			deps: ['Backbone', 'application'],
		},
		settings: {
			deps: ['application']
		},
		templateManager: {
			deps: ['Backbone', 'backboneMarionette'],
		},
	}
});

require(['jquery', 'underscore', 'Backbone', 'json2', 'backboneNested', 'backboneEventbinder', 'backboneWreqr', 'backboneMarionette', 'iScroll', 'application', 'appRouter', 'settings', 'appController', 'templateManager'], function($, _, Backbone, json2, backboneNested, backboneEventbinder, backboneWreqr, backboneMarionette, scroll, application, appRouter, settings, appController, templateManager) {
	App.start();
});