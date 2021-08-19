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
    console.log('token', token);
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
    const id = data
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
      const response = await api(`/user/${token?.userId}`, options);
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
      const response = await api(`/user?size=${10}&page=${0}`, options);
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

  getBanner: async (token) => {

    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token?.access_token}`,

      },
    };

    try {
      const response = await api('/banner', options);
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

  getBannerById: async (token, data) => {
    console.log('dataa', data);
    const id = data
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token?.access_token}`,

      },
    };

    try {
      const response = await api(`/banner/ownerId`, options);
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
          Toast.show('Password has been changed', { textColor: 'grey', duration: Toast.durations.SHORT });
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
    const { name, email } = data
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Authorization: `Bearer ${token?.access_token}`,

      },
    };

    try {
      const response = await api(`/user/availability?userName=${name}&userEmail=${email}`, options);
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

  updateUser: async (token, data) => {
    const { webId,
      email,
      userNumber,
      firstName,
      lastName,
      surName,
      password,
      birthday,
      phoneNumber,
      phoneCarrier,
      gender,
      streetAddress,
      state,
      city,
      country,
      pictureUrl,
      currentLang,
      visibility,
      currencyConversion,
      privacyCurrency,
      privacyMode,
      partcpMetamatric,
      getTransactions,
      accountId,
      ethAddress,
      btcAddress } = data

    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token?.access_token}`,
      },
      body: JSON.stringify({
        webId: webId,
        email: email,
        userNumber: userNumber,
        firstName: firstName,
        lastName: lastName,
        surName: surName,
        password: password,
        birthday: birthday,
        phoneNumber: phoneNumber,
        phoneCarrier: '0',
        gender: gender,
        streetAddress: streetAddress,
        state: state,
        city: city,
        country: country,
        pictureUrl: pictureUrl,
        currentLang: currentLang,
        visibility: visibility,
        currencyConversion: currencyConversion,
        privacyCurrency: privacyCurrency,
        privacyMode: privacyMode,
        partcpMetamatric: partcpMetamatric,
        getTransactions: getTransactions,
        accountId: accountId,
        ethAddress: ethAddress,
        btcAddress: btcAddress
      })
    };

    try {
      const response = await api(`/user/${token?.userId}`, options);
      switch (response.status) {
        case 200:
          Toast.show('User has been Updated', { textColor: 'grey', duration: Toast.durations.SHORT });
          return await response.json();
        default:
          throw new Error('Some error occured');
      }
    } catch (e) {
      console.log('e', e);
      throw e;
    }
  },

  createBanner: async (token, data) => {
    const { name, description, walletAddress, pictureUrl } = data
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token?.access_token}`,

      },
      body: JSON.stringify({
        userName: name,
        description: description,
        walletAdder: walletAddress,
        pictureUrl: pictureUrl
      })
    };


    try {
      const response = await api(`/banner`, options);
      switch (response.status) {
        case 200:
          Toast.show('Banner has been created', { textColor: 'grey', duration: Toast.durations.SHORT });
          return await response.json();
        default:
          throw new Error('Some error occured');
      }
    } catch (e) {
      console.log('e', e);
      throw e;
    }
  },

  createCompaign: async (token, data) => {
    const { name, description, walletAddress, pictureUrl } = data
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token?.access_token}`,

      },
      body: JSON.stringify({
        userName: name,
        description: description,
        walletAdder: walletAddress,
        pictureUrl: pictureUrl
      })
    };


    try {
      const response = await api(`/campaign`, options);
      switch (response.status) {
        case 200:
          Toast.show('Campaign has been created', { textColor: 'grey', duration: Toast.durations.SHORT });
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


