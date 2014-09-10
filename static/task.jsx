define(["react"], function(React) {
  return React.createClass({
    getInitialState: function () {
      return {editText: this.props.task.get('text')};
    },
    render: function () {
      return (
        <div className="task">
        <label>
          <input
            type="checkbox"
            checked={this.props.task.get('done')}
            onChange={this.props.onToggle} />
          <div className={this.props.task.get('done')?'checked':'unchecked'}>
            {this.state.editText}
          </div>
          </label>
        </div>
      );
    }
  });
});
