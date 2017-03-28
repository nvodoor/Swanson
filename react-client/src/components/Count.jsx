import React from 'react';

const divStyle = {
	fontStyle: 'italic',
	color: 'brown',
};

class Count extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			num: ''
		}
	}

	onChange (n) {
		console.log(n.target.value)
		this.setState({
			num: n.target.value
		});
	}

	count () {
		console.log("hello")
		this.props.onCount(this.state.num)
	}

	render () {
		return (<div>
		<h3 style={divStyle}>Swanson Quotes</h3>
		Query or que random quotes (numbers only): <input type="number" input value={this.state.num} onChange={this.onChange.bind(this)}/>
		<button onClick={this.count.bind(this)}>QUOTES!</button>
		</div>)
	}
}


export default Count;