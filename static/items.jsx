define(["jsx!task", "react"], function(Task, React) {
  return React.createClass({
    render: function () {
      var items = this.props.tasks.map(function (t) {
        return (
          <Task
            key={t.get('id')}
            task={t}
            onToggle={t.toggle.bind(t)} />
        );
      });

      return (
        <div className="items">
          {items}
        </div>
      );
    }
  });
});
