(function() {
    App.subController = App.subController || {};

    App.subController.indexPage = Marionette.Controller.extend({
        initialize: function(options) {
            this.region = options.region;
            collection = new App.collections.indexCollection;

            view = new App.views.indexView({
                collection: collection
            });
            App[this.region].show(view);
        }
    });
})();
