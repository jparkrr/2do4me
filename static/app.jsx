define(
  ["jsx!task", "react", "jsx!header", "jsx!footer", "backbone-updater"],
function(Task, React, Header, Footer, BackboneMixin) {
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
          <h1>Todos</h1>
          <div className="content">
            <Header onTaskSubmit={this.handleTaskSubmit} />
            <div className="items">{items}</div>
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
