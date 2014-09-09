define(["react"], function(React) {
  return React.createClass({
    render: function () {
      return (
        <div>
          <span>{this.props.count} items left</span>
          <a href="#" onClick={this.props.removeComplete}>
            Remove completed
          </a>
          <span> | </span>
          <a href="#" onClick={this.props.markAll}>
            Mark all as complete
          </a>
        </div>
      );
    }
  });
});
