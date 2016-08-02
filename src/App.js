import React from 'react';
import axios from 'axios';
import CircularProgress from 'material-ui/CircularProgress';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

class App extends React.Component {
  getChildContext() {
    return {muiTheme: getMuiTheme()};
  }
  getUserInfo(){
    return axios.get(`https://api.github.com/users/panlinna`)
      .then((res) => ({
        bio: res.data
      }))
  }
  constructor(){
    super();
    this.state={
      info:{},
      wait:true
    }
  }
  componentDidMount(){
    this.getUserInfo().then((data) => {
        console.log(data.bio)
        this.setState({
          info:data.bio,
          wait:false
        })
    })
  }
  render () {
    return(
      <div>
        {
          this.state.wait ?  <CircularProgress /> :
          <div>
          {this.state.info.email}
          <img src={this.state.info.avatar_url} />
          </div>
        }
      </div>
    )
  }
}
App.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};
export default App;
