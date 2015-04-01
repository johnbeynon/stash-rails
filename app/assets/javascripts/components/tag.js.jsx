var Tag = React.createClass({
  propTypes: {
    name: React.PropTypes.string
  },

  render: function() {
    return (
        <li><a href="#">{this.props.tag.name}</a></li>
    );
  }
});
