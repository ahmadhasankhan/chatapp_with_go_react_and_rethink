var Channel = React.createClass({
  
  onClick(){
  	console.log('I was clicked', this.props.name);
  },

  render: function() {
    return (
      <li onClick={this.onClick.bind(this)}>
        {this.props.name} 
      </li>
    );
  }
});
ReactDOM.render(
  <Channel name =  'Hardware Support'/>,
  document.getElementById('app')
);