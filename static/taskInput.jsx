define(["react"], function(React) {
  return React.createClass({
    componentDidMount: function() {
      this.refs.text.getDOMNode().focus();
    },

    handleTaskSubmit: function(text) {
      this.props.tasks.create({
        text: text
      }, {wait: true});
    },

    handleSubmit: function(e) {
      e.preventDefault();
      var text = this.refs.text.getDOMNode().value.trim();
      if (!text) return;

      this.handleTaskSubmit(text);
      this.refs.text.getDOMNode().value = '';
      return;
    },

    render: function () {
      return (
        <div className="input">
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
