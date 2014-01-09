JournalApp.Routers.PostRouter = Backbone.Router.extend({

  initialize: function ($rootEl, posts) {
    this.$el = $rootEl;
    this.posts = posts;
  },

  routes: {
    '': 'index',
    '#/posts/:id': 'show'
  },

  index: function () {
    console.log("in index");
    var view = new JournalApp.Views.PostsIndex({ collection: this.posts })

    this.$el.html(view.render().$el);
  },

  show: function (id) {
    var view = new JournalApp.Views.PostShow(this.posts.get('id'));

    this.$el.html(view.render().$el);
  }
});