(function() {
	App.subController = App.subController || {};

	App.subController.bookDetails = Marionette.Controller.extend({
        initialize: function(options) {
            this.region = options.region;
			var id = options.urlParams.id;

			var model = new App.models.bookDetailsModel({
				id: id
			});

			var view = new App.views.bookDetailsView({
                model: model
            });

			App[this.region].show(view);
        },
    });
})();
