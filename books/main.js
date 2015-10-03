require.config({
	paths: {
		jquery: 'js/libs/jquery',
		underscore: 'js/libs/underscore',
		Backbone: 'js/libs/backbone',
		json2: 'js/libs/json2',
		backboneNested: 'js/libs/backbone-nested',
		backboneMarionette: 'js/libs/backbone.marionette',
		iScroll: 'js/libs/iscroll',
		application: 'js/application',
		appRouter: 'js/helpers/appRouter',
		settings: 'js/helpers/settings',
		appController: 'js/appController',
		templateManager: 'js/helpers/templateManager',
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
			deps: ['Backbone']
		},
		backboneMarionette: {
			deps: ['Backbone']
		},
		application: {
			deps: ['Backbone', 'backboneMarionette']
		},
		appController: {
			deps: ['Backbone', 'application']
		},
		appRouter: {
			deps: ['appController']
		},
		settings: {
			deps: ['application']
		},
		templateManager: {
			deps: ['Backbone', 'backboneMarionette']
		}
	}
});

require(['jquery', 'underscore', 'Backbone', 'json2', 'backboneNested', 'backboneMarionette', 'iScroll', 'application', 'appRouter', 'settings', 'appController', 'templateManager'], function($, _, Backbone, json2, backboneNested, backboneMarionette, scroll, application, appRouter, settings, appController, templateManager) {
	App.start();
});