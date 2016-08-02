import React from 'react';
import axios from 'axios';

class App extends React.Component {
  getUserInfo(){
    return axios.get(`https://api.github.com/users/panlinna`)
      .then((res) => ({
        bio: res.data
      }))
  }
  constructor(){
    super();
    this.state={
      info:{}
    }
  }
  componentDidMount(){
    this.getUserInfo().then((data) => {
        console.log(data.bio)
        this.setState({
          info:data.bio
        })
    })
  }
  render () {
    return(
      <div>
      {this.state.info.email}
      <img src={this.state.info.avatar_url} />
      </div>
    )
  }
}

export default App;
