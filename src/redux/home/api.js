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


  getNews: async (token) => {

    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token?.access_token}`,

      },
    };

    try {
      const response = await api('/news', options);
      switch (response.status) {
        case 200:
          return await response.json();
        case 401:
          Toast.show('Unauthorized', { textColor: 'grey', duration: Toast.durations.SHORT });
          break
        default:
          throw new Error('Some error occured');
      }
    } catch (e) {
      console.log('e', e);
      throw e;
    }
  },

  getNewsDetails: async (token, data) => {
    const id  = data
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token?.access_token}`,

      },
    };

    try {
      const response = await api(`/news/${id}`, options);
      switch (response.status) {
        case 200:
          return await response.json();
        default:
          throw new Error('Some error occured');
      }
    } catch (e) {
      console.log('e', e);
      throw e;
    }
  },


  getUser: async (token) => {

    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token?.access_token}`,

      },
    };

    try {
      const response = await api('/user/{id}', options);
      switch (response.status) {
        case 200:
          return await response.json();
        default:
          throw new Error('Some error occured');
      }
    } catch (e) {
      console.log('e', e);
      throw e;
    }
  },

  getCampaign: async (token) => {

    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token?.access_token}`,

      },
    };

    try {
      const response = await api('/campaign', options);
      switch (response.status) {
        case 200:
          return await response.json();
        default:
          throw new Error('Some error occured');
      }
    } catch (e) {
      console.log('e', e);
      throw e;
    }
  },

  getUserList: async (token) => {

    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token?.access_token}`,

      },
    };

    try {
      const response = await api('/user', options);
      switch (response.status) {
        case 200:
          return await response.json();
        default:
          throw new Error('Some error occured');
      }
    } catch (e) {
      console.log('e', e);
      throw e;
    }
  },

  changePassword: async (token, data) => {
    const password = data
    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token?.access_token}`,

      },
      body: JSON.stringify({
        password: password
      })
    };

    try {
      const response = await api('/user/updatePassword', options);
      switch (response.status) {
        case 200:
          return await response.json();
        default:
          throw new Error('Some error occured');
      }
    } catch (e) {
      console.log('e', e);
      throw e;
    }
  },

  availability: async (token, data) => {
    const {name, email} = data
    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token?.access_token}`,

      },
      body: JSON.stringify({
        userName: name,
        userEmail: email
      })
    };

    try {
      const response = await api('/user/availability', options);
      switch (response.status) {
        case 200:
          return await response.json();
        default:
          throw new Error('Some error occured');
      }
    } catch (e) {
      console.log('e', e);
      throw e;
    }
  },



};


