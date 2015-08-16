var ResourceList = React.createClass({

  getInitialState: function() {
    console.log("Initial state");
    return ({ resources: [] });
  },

  componentDidMount: function() {
    this.loadResources();
  },

  loadResources: function() {
    console.log("Loading resources...");
    $.ajax({
      url: window.Config.endpoint + '/collections/' + window.Config.collection_id + '/resources',
      success: function(resources) {
        this.setState({resources: resources});
      }.bind(this)
    });
  },

  render: function() {
    var resourceNodes = this.state.resources.map(function (resource) {
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
