define(
  ["jsx!task", "react", "jsx!header", "backbone-updater"],
function(Task, React, Header, BackboneMixin) {
  return React.createClass({
    mixins: [BackboneMixin],

    handleTaskSubmit: function(text) {
      this.props.tasks.create({
        text: text
      }, {wait: true});
    },

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
          <Header onTaskSubmit={this.handleTaskSubmit} />

          <div>{items}</div>
        </div>
      );
    }
  });
});
