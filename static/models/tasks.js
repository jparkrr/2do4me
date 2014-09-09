define(["backbone", "models/model"], function(Backbone, Model) {
  return Backbone.Collection.extend({
    model: Model,
    url: '/api/task',
    parse: function(res) {
      return res.objects;
    },
    comparator: function(e) {return e.get('sortOrder')*-1; }
  });
});
