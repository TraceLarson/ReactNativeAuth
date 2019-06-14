import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';

import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: `${process.env.FIREBASE_API_KEY}`,
      authDomain: 'fir-auth-db0f4.firebaseapp.com',
      databaseURL: 'https://fir-auth-db0f4.firebaseio.com',
      projectId: 'fir-auth-db0f4',
      storageBucket: 'fir-auth-db0f4.appspot.com',
      messagingSenderId: '131434181687',
      appId: '1:131434181687:web:a58ab0071a7db5e4',
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Firebase Auth " />
        <LoginForm />
      </View>
    );
  }
}

export default App;
