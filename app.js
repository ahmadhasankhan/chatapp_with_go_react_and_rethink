let channels = [
{name: 'Hardware Support'},
{name: 'Software Support'},
{name: 'IT Support'},
{name: 'Health Support'},
]
var Channel = React.createClass({
  
  onClick(){
  	console.log('I was clicked', this.props.name);
  },

  render: function() {
    return (
      <li onClick={this.onClick}>
        {this.props.name} 
      </li>
    );
  }
});

var ChannelList= React.createClass({
  render: function() {
    return (
      <ul>
        {this.props.channels.map(channel => {
        		return(
        			<Channel name = {channel.name} />

        		)
        	}
        )}
      </ul>
    );
  }
});


ReactDOM.render(
  <ChannelList channels = {channels} />,
  document.getElementById('app')
);