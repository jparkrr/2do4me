define(["react"], function(React) {
  return React.createClass({
    handleSubmit: function(e) {
      e.preventDefault();
      var text = this.refs.text.getDOMNode().value.trim();
      if (!text) return;

      this.props.onTaskSubmit(text);
      this.refs.text.getDOMNode().value = '';
      return;
    },
    render: function () {
      return (
        <div>
          <h1>Todos</h1>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              ref="text"
              placeholder="What needs to be done?" />
            <input type="submit" value="Add Todo" />
          </form>
        </div>
      );
    }
  });
});
