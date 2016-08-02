import axios from 'axios';

export default function getUserInfo(){
    return axios.get(`https://api.github.com/users/panlinna`)
      .then((res) => ({
        bio: res.data
      }))
  }
