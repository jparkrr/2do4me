define(
  ["jsx!task", "react", "jsx!taskInput", "jsx!items", "jsx!footer", "backbone-updater"],
function(Task, React, TaskInput, Items, Footer, BackboneMixin) {
  return React.createClass({
    mixins: [BackboneMixin],

    render: function () {
      return (
        <div>
          <h1>Todos</h1>
          <div className="content">
            <TaskInput tasks={this.tasks} />
            <Items tasks={this.props.tasks} />
          </div>
          <Footer tasks={this.props.tasks} />
        </div>
      );
    }
  });
});
