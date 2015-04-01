var TagList = React.createClass({

  render: function() {
    var tagNodes = this.props.tags.map(function (tag) {
      return (
        <Tag key={tag.id} tag={tag} />
      );
    });
    return (
        null
    );
  }
});
