define(["react"], function(React) {
  return React.createClass({
    getInitialState: function () {
      return {editText: this.props.task.get('text')};
    },
    render: function () {
      return (
        <div>
          <input
            type="checkbox"
            checked={this.props.task.get('done')}
            onChange={this.props.onToggle} />
          <span>
            {this.state.editText}
            ({this.props.task.get('sortOrder')})
          </span>
        </div>
      );
    }
  });
});
