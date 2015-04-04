var Resource = React.createClass({
  propTypes: {
    title: React.PropTypes.string,
    url: React.PropTypes.string,
    id: React.PropTypes.string
  },

  openURL: function() {
    window.open(this.props.resource.url,'_blank');
  },

  render: function() {
    return (
      <div className="resource col-md-3 col-sm-6" key={this.props.resource.id} onClick={this.openURL}>
        <div className="thumbnail">
          <span className="title">
            <h4>{this.props.resource.title}</h4>
          </span>
          <span className="excerpt">
            some copy here
          </span>
          <span className="foot">
            <ResourceTags tags={this.props.resource.tags} />
            <small>{this.props.resource.domain}</small>
          </span>
        </div>
      </div>
    );
  }
});
