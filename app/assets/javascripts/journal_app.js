window.JournalApp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    alert('Hello from Backbone!');
    JournalApp.posts = new JournalApp.Collections.Posts();
    new JournalApp.Routers.PostRouter({
          "$rootEl": $("#content")
    });
    Backbone.history.start();
  }
};

$(document).ready(function(){
  JournalApp.initialize();
});
