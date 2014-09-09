define(["backbone"], function(Backbone) {
  return Backbone.Model.extend({
    defaults: {
        text: '',
        done: false
    },
    toggle: function () {
        this.save({
            done: !this.get('done')
        });
    }
  });
});
