define(["react"], function(React) {
  return React.createClass({
    render: function () {
      return (
        <div className="footer">
          <span className="count">{this.props.count} items left</span>
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
