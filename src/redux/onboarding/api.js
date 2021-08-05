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
// Basic YnZibnZuYjpibW5ibm0=
export const Api = {

  loginUser: async (data) => {
    var { email, password } = data
    const options = {

      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: email, password: password }),
    };

    try {
      const response = await api(`/login/`, options);
      switch (response.status) {
        case 200:
          return await response.json();
        case 400:
        case 401:
          Toast.show('Invalid credentials', Toast.durations.SHORT);
          break;
        case 404:
          Toast.show('User not found', Toast.durations.SHORT);
          break;
        default:
          var e = new Error("Something went wrong");
          throw e;
      }
    }
    catch (error) {
      console.log('errords', error.message.toString());
      // Toast.show(error.message.toString(), Toast.durations.SHORT);
    }
  },

  registerUser: async (email, password, name, address, district, phone, image) => {
    const formData = new FormData();

    formData.append(
      "image",
      {
        uri: image.uri,
        type: 'image/jpeg',
        name: 'image'
      }
    );

    formData.append("data", JSON.stringify({
      email: email,
      password: password,
      address: address,
      name: name,
      district: district,
      phone_number: phone,
    }));
    const options = {
      method: 'POST',
      headers: {
        "Content-Type": "multipart/form-data",
      },
      body: formData,
    };
   
    try {
      const response = await api('/register/user', options);
      switch (response.status) {
        case 201:
          Toast.show('User has been registered', Toast.durations.SHORT);
          return await response;
        case 409:
          Toast.show('User with email is already registered', Toast.durations.SHORT);
          break
        default:
          throw new Error('Some error occured');
      }
    } catch (e) {
      console.log('e', e);
      throw e;
    }
  },


  registerBusiness: async (name, town, email, password, businessType, address, phone, image, description) => {
    const formData = new FormData();

    // Update the formData object 

    formData.append(
      "image",
      {
        uri: image.uri,
        type: 'image/jpeg',
        name: 'image'
      }
    );

    formData.append("data", JSON.stringify({
      name: name,
      town: town,
      email: email,
      password: password,
      address: address,
      businessType: businessType,
      phone_number: phone,
      description: description,
    }));
    const options = {
      method: 'POST',
      headers: {
        "Content-Type": "multipart/form-data",
      },
      body: formData,
    };

    try {
      const response = await api('/register/business', options);
      switch (response.status) {
        case 201:
          Toast.show('Business has been registered', Toast.durations.SHORT);
          return await response;
        case 409:
          Toast.show('User with email is already registered', Toast.durations.SHORT);
          break
        default:
          throw new Error('Some error occured');
      }
    } catch (e) {
      console.log('e', e);
      throw e;
    }
  },



};


