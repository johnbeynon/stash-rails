var Resource = React.createClass({
  propTypes: {
    title: React.PropTypes.string,
    url: React.PropTypes.string,
    id: React.PropTypes.string
  },

  render: function() {
    console.log('resource: ', this.props);
    return (
      <div className="col-md-3 col-sm-6" key={this.props.resource.id}>
        <div className="thumbnail">
          <h4>{this.props.resource.title}</h4>
          <p>{this.props.resource.url}</p>
          <ResourceTags tags={this.props.resource.tags} />
          <small>somedomain.com</small>
        </div>
      </div>
    );
  }
});
