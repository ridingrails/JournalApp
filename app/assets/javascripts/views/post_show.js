JournalApp.Views.PostShow = Backbone.View.extend({

  template: JST["posts/show"],

  events: {
    "click .back" : "back"
  },

  render: function() {
    this.$el.html(this.template({ post: this.model }));
    return this;
  },

  back: function(event) {
    event.preventDefault();
    Backbone.history.navigate('/posts',{ trigger: true });
  }

});