import React from 'react';
import axios from 'axios';
import CircularProgress from 'material-ui/CircularProgress';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import github from './utils/github';

class App extends React.Component {
  getChildContext() {
    return {muiTheme: getMuiTheme()};
  }
  constructor(){
    super();
    this.state={
      info:{},
      wait:true
    }
  }
  componentDidMount(){
    github().then((data) => {
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
