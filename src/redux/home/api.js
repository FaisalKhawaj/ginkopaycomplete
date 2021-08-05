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


  getNews: async () => {

    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const response = await api('/news', options);
      switch (response.status) {
        case 200:
          return await response.json();
        case 401:
          Toast.show('Unauthorized', Toast.durations.SHORT);
          break
        default:
          throw new Error('Some error occured');
      }
    } catch (e) {
      console.log('e', e);
      throw e;
    }
  },

  getNewsDetails: async () => {

    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const response = await api('/news/${id}', options);
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


  getUser: async () => {

    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
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

  getCampaign: async () => {

    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
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



};


