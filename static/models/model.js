define(["backbone"], function(Backbone) {
  return Backbone.Model.extend({
    defaults: {
        text: ''
    },
    toggle: function () {
        this.save({
            done: !this.get('done')
        });
    }
  });
});
