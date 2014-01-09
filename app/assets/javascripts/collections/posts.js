JournalApp.Collections.Posts = Backbone.Collection.extend({
  model: JournalApp.Models.Post,
  url: '/posts',

  initialize: function () {
    console.log("here it is");
  }
});