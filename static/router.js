define(["backbone"], function(Backbone) {
  return Backbone.Router.extend({
    routes : {
      "" : "index"
    },
    index : function() {
      console.log("hello world");
    }
  });
});
