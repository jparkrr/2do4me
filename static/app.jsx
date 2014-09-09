define(
  ["jsx!task", "react", "backbone-updater"],
function(Task, React, BackboneMixin) {
  return React.createClass({
    mixins: [BackboneMixin],

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
        <div>
          <div>{items}</div>
        </div>
      );
    }
  });
});
