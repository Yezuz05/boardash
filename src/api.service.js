import Axios from 'axios';

export default {
  getAllUsers() {
    return Axios.get('/users');
  },
  getUserData(username) {
    return Axios.get(`/users/${username}`);
  }
};
