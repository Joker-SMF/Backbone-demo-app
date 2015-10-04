(function() {
	Backbone.Marionette.TemplateCache.prototype.load = function() {
		if (this.compiledTemplate) {
			return this.compiledTemplate;
		} else {
			var template = this.loadTemplate(this.templateId);
			this.compiledTemplate = this.compileTemplate(template);
		}
		return this.compiledTemplate;
	};

	Backbone.Marionette.TemplateCache.prototype.loadTemplate = function(templateId) {
		var template, templateUrl;

		templateUrl = 'templates/' + templateId + '.template.html';
		$.ajax({
			url: templateUrl,
			dataType: 'text',
			data: {},
			async: false,
			success: function(data) {
				template = data;
			},
			error: function(error) {
				console.log('Error loading Template from: ' + templateUrl);
			}
		});
		if (!template || template.length === 0) {
			throw 'Error loading Template from: ' + templateUrl;
		}
		return template;
	};

	Backbone.Marionette.TemplateCache.prototype.compileTemplate = function(rawTemplate) {
		return _.template(rawTemplate);
	};
})();
