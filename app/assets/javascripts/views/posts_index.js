JournalApp.Views.PostsIndex = Backbone.View.extend({
  initialize: function (options) {
          this.listenTo(
            this.collection,
            'add remove reset change:title',
            this.render
          )
  },

  events: {
    "click .delete" : "deletePost",
    "click .show" : "showPost"
  },

  template: JST["posts/index"],

  render: function() {
    this.$el.html(this.template({ collection: this.collection }));
    return this;
  },

  deletePost: function (event) {
    var postId = $(event.currentTarget).data('id');
    this.collection.get(postId).destroy();
  },

  showPost: function (event) {
    var postId = $(event.currentTarget).data('id');
    var view = new JournalApp.Views.PostShow({ model: this.collection.model });
    this.$el.html(view.render());
    view.render
  }

});