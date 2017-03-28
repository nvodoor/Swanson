import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';
import Count from './components/Count.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: []
    }
}

 

  componentDidMount() {
    $.ajax({
      url: '/items', 
      success: (data) => {
        this.setState({
          items: data
        });
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }
 
  count(num) {
    $.ajax({
      url: '/items/count',
      type: 'POST',
      data: JSON.stringify(num),
      success: function () {
        $.ajax({
          type: "GET",
          url: '/items',
          success: function (datas) {
            this.setState ({
              items: datas
            })
          }.bind(this),
          contentType: 'application/json'
          })
      }.bind(this),
      contentType: 'application/json'
    });
  }

  render () {
    return (<div>
      <h1>Swanson Proverbs</h1>
      <img src={'Swansonizer.jpg'}/> 
      <List items={this.state.items}/>
      <Count onCount={this.count.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));