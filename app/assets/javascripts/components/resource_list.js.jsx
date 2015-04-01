var ResourceList = React.createClass({

  render: function() {
    var resourceNodes = this.props.resources.map(function (resource) {
      return (
        <Resource resource={resource} />
      );
    });
    return (
      <div className="row">
        {resourceNodes}
      </div>
    );
  }
});
