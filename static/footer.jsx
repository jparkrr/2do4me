define(["react"], function(React) {
  return React.createClass({
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

    getCount: function() {
      return this.props.tasks.where({done: false}).length;
    },

    render: function () {
      return (
        <div className="footer">
          <span className="count">{this.getCount()} items left</span>
          <span className="click" onClick={this.removeComplete}>
            Remove completed
          </span>
          <span> | </span>
          <span className="click" onClick={this.markAll}>
            Mark all as complete
          </span>
        </div>
      );
    }
  });
});
