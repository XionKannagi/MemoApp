import React, { useState } from 'react';
import { StackActions, NavigationActions } from 'react-navigation';
import firebase from 'firebase';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';

export default function LoginScreen(props) {
  const { navigation } = props;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        ログイン
      </Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={(value) => setEmail(value)}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Email Address"
      />
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={(value) => setPassword(value)}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Password"
        secureTextEntry
      />
      <TouchableHighlight style={styles.button} onPress={() => { handleSubmit(email, password, navigation); }} underlayColor="#C70F66">
        <Text style={styles.buttonTitle}>ログインする</Text>
      </TouchableHighlight>

      <TouchableOpacity style={styles.siginup} onPress={() => { handlePress(navigation); }} underlayColor="#C70F66">
        <Text style={styles.siginupText}>メンバー登録する</Text>
      </TouchableOpacity>
    </View>
  );
}

function handleSubmit(email, password, navigation) {
  // login
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(() => {
      const resetAction = StackActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({ routeName: 'Home' }),
        ],
      });
      navigation.dispatch(resetAction);
    })
    .catch((error) => {
      console.log(error);
    });
}

function handlePress(navigation) {
  navigation.navigate('Signup');
}

LoginScreen.propTypes = {
  navigation: PropTypes.shape().isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    padding: 24,
    backgroundColor: '#fff',
  },
  input: {
    backgroundColor: '#ddd',
    height: 48,
    marginBottom: 16,
    borderBottomWidth: 1,
    borderColor: '#DDD',
    padding: 8,
  },
  title: {
    fontSize: 28,
    alignSelf: 'center',
    marginBottom: 24,
  },
  button: {
    backgroundColor: '#E31676',
    height: 48,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    width: '70%',
    alignSelf: 'center',
  },
  buttonTitle: {
    color: '#fff',
    fontSize: 18,
  },
  siginup: {
    marginTop: 16,
    alignSelf: 'center',
  },
  siginupText: {
    fontSize: 16,
  },
});
