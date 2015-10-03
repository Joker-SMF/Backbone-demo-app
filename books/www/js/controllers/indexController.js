define(['js/collections/indexCollection', 'js/models/indexModel', 'js/views/indexView'], function(indexc, indexv) {
    App.subController = App.subController || {};

    App.subController.indexPage = Marionette.Controller.extend({
        initialize: function(options) {
            this.region = options.region;
            collection = new App.collections.indexCollection;

            view = new App.views.indexView({
                collection: collection
            });
            App[this.region].show(view);
        },

        test: function(obj) {
            App.customRoutes.navigate('book_details/' + obj.id, {
                trigger: true
            });
        }
    });
});