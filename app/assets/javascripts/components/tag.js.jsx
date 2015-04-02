var Tag = React.createClass({
  propTypes: {
    name: React.PropTypes.string
  },

  render: function() {
    return (
      <span className="label label-danger">{this.props.tag.name}</span>
    );
  }
});
