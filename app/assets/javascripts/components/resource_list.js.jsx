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
      url: "http://127.0.0.1:5000/collections/fc924dc8-1cc1-4810-85b4-edad944efd61/resources",
      success: function(resources) {
        console.log('Got them!');
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
