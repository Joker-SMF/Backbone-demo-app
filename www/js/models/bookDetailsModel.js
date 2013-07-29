(function() {
    App.models = App.models || {};

    App.models.bookDetailsModel = Backbone.NestedModel.extend({
        url: function() {
            console.log('https://www.googleapis.com/books/v1/volumes/' + this.id);
            return 'https://www.googleapis.com/books/v1/volumes/' + this.id;
        },

        initialize: function() {
            this.fetch();
        }
    });
})();