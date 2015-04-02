var ResourceTags = React.createClass({

  render: function() {
    tags = [];
    this.props.tags.forEach(function(tag) {
      tags.push(<Tag key={tag.id} tag={tag} />)
      tags.push(<span>&nbsp;</span>)
    });
    return (
      <div>
        {tags}
      </div>
    )
  }
});
