define([], function() {
  return {
    componentDidMount: function () {
      this.props.tasks.fetch();
      this.props.tasks.on('add remove change',
        this.forceUpdate.bind(this, null)
      );
    },
    componentDidUpdate: function () {
      this.props.tasks.forEach(function (t) {
        if (t.hasChanged()) t.save();
      });
    },
  }
});
