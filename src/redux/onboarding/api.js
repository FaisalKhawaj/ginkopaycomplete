import Constants from './../../constants/index';
import Toast from 'react-native-root-toast';

const SERVER_URL = Constants.SERVER_URL + '/api';

const api = async (url, options) => {
  try {
    return await fetch(`${SERVER_URL}${url}`, options);
  } catch (e) {
    throw e;
  }
};

export const Api = {

  loginUser: async (data) => {
    var { email, password } = data
    const formData = new FormData();


    formData.append("username", email);
    formData.append("password", password);
    formData.append("grant_type", "password");
    const options = {

      method: 'POST',
      headers: {
        Authorization: 'Basic Y2xpZW50OnBhc3N3b3Jk'
      },
      body: formData,
    };

    try {
      const response = await fetch('https://ginkopay-crypto.herokuapp.com/oauth/token', options);
      switch (response.status) {
        case 200:
          return await response.json();
        case 400:
        case 401:
          Toast.show('Invalid credentials', { textColor: 'grey', duration: Toast.durations.SHORT });
          break;
        case 404:
          Toast.show('User not found', { textColor: 'grey', duration: Toast.durations.SHORT });
          break;
        default:
          var e = new Error("Something went wrong");
          throw e;
      }
    }
    catch (error) {
      console.log('errords', error.message.toString());
    }
  },
  loginUserTest: async (data) => {
    var { email, password } = data
    const formData = new FormData();


    formData.append("username", email);
    formData.append("password", password);
    formData.append("grant_type", "password");
    const options = {

      method: 'POST',
      headers: {
        Authorization: 'Basic Y2xpZW50OnBhc3N3b3Jk'
      },
      body: formData,
    };

    try {
      const response = await fetch('https://ginkopay-crypto.herokuapp.com/oauth/token', options);
      switch (response.status) {
        case 200:
          return await response.json();
        case 400:
        case 401:
          Toast.show('Invalid credentials', { textColor: 'grey', duration: Toast.durations.SHORT });
          break;
        case 404:
          Toast.show('User not found', { textColor: 'grey', duration: Toast.durations.SHORT });
          break;
        default:
          var e = new Error("Something went wrong");
          throw e;
      }
    }
    catch (error) {
      console.log('errords', error.message.toString());
    }
  },

  registerUser: async (email, password, name) => {
    
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
        userName: name
      }),
    };

    try {
      const response = await api('/user/signUp', options);
      switch (response.status) {
        case 200:
          Toast.show('User has been registered', { textColor: 'grey', duration: Toast.durations.SHORT });
          return await response;
        default:
          throw new Error('Some error occured');
      }
    } catch (e) {
      console.log('e', e);
      throw e;
    }
  },

};


