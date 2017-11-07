import request from 'reqwest';
import when from 'when';
// import {loginauth_url} from '../../config'
import em from '../components/em'
var login_url = require('../../config').loginauth_url;


class AuthService {

  login(username, password) {
    return when(request({
      url: '/login',
      method: 'POST',
      crossOrigin: true,
      type: 'json',
      data: {
         username: username,
         password: password
      }
    })).then(function(response) {
        const status = response.status;
        const search = window.location.search
        if(status == 'ok'){
          em.emit('login', username, search);
          return true;
        }
      });;
  }
}

export default new AuthService()