define(["sortable"], function(sortable) {
  return {
    componentDidMount: function () {
      var component = this;
      this.props.tasks.fetch();
      $('.items').sortable({
        forcePlaceholderSize: true,
      }).bind('sortupdate', function(e, ui) {
        $('input:first').focus();
        var maxSort = component.props.tasks.length - 1;

        ui.endparent.children().each(function(e) {
          var id = $(this).data('id');
          component.props.tasks.get(id).set('sortOrder', maxSort - $(this).index());
        });
      });
      this.props.tasks.on('add remove change',
        this.forceUpdate.bind(this, null)
      );
    },
    componentDidUpdate: function () {
      $('.items').sortable('reload');
      this.props.tasks.forEach(function (t) {
        if (t.hasChanged()) t.save();
      });
    },
  }
});
