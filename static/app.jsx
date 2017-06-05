define(
  ["jsx!task", "react", "jsx!taskInput", "jsx!items", "jsx!footer", "backbone-updater"],
function(Task, React, TaskInput, Items, Footer, BackboneMixin) {
  return React.createClass({
    mixins: [BackboneMixin],
    removeComplete: function() {
      this.props.tasks.where({done: true}).forEach(function(t) {
        t.destroy();
      })
    },

    markAll: function() {
      this.props.tasks.forEach(function(t) {
        t.set({done: true});
      })
    },

    handleTaskSubmit: function(text) {
      this.props.tasks.create({
        text: text
      }, {wait: true});
    },

    render: function () {

      return (
        <div>
          <h1>Todos</h1>
          <div className="content">
            <TaskInput onTaskSubmit={this.handleTaskSubmit} />
            <Items tasks={this.props.tasks} />
          </div>
          <Footer
            count={this.props.tasks.where({done: false}).length}
            removeComplete={this.removeComplete}
            markAll={this.markAll} />
        </div>
      );
    }
  });
});
