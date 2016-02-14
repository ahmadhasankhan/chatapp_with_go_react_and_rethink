var Channel = React.createClass({
  render: function() {
    return (
      <li>
        Channel Name
      </li>
    );
  }
});
ReactDOM.render(
  <Channel />,
  document.getElementById('app')
);