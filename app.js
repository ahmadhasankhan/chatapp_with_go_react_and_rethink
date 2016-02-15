let channels = [
{name: 'Hardware Support'},
{name: 'Software Support'},
{name: 'IT Support'},
{name: 'Health Support'}];


class Channel extends React.Component{
    onClick(){
        console.log('I was clicked', this.props.name);
    }
    render(){
        return(
            <li onClick={this.onClick.bind(this)}>
                {this.props.name}
            </li>
        )
    }
}

class ChannelList extends React.Component{
    render(){
        return(
            <ul>
        {this.props.channels.map(channel => {
            return(
                <Channel key={channel.name} name = {channel.name} />
                )
            }
        )}
            </ul>
        )
    }
}


class ChannelForm extends React.Component{
    render(){
        return(
            <form>
                <input type= 'text' />
            </form>
        );
    }
}

class ChannelSection extends React.Component{
    render(){
        return(
            <div>
                <ChannelList channels={channels} />
                <ChannelForm />
            </div>
        )
    }
}


ReactDOM.render(<ChannelSection />,
  document.getElementById('app'));
