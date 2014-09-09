define(["react"], function(React) {
  return React.createClass({
    render: function () {
      return (
        <div className="footer">
          <span className="count">{this.props.count} items left</span>
          <span className="click" onClick={this.props.removeComplete}>
            Remove completed
          </span>
          <span> | </span>
          <span className="click" onClick={this.props.markAll}>
            Mark all as complete
          </span>
        </div>
      );
    }
  });
});
