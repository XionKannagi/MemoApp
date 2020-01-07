import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableHighlight } from 'react-native';
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
      />
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={(value) => setPassword(value)}
      />
      <TouchableHighlight style={styles.button} onPress={() => { navigation.navigate('Home'); }} underlayColor="#C70F66">
        <Text style={styles.buttonTitle}>ログインする</Text>
      </TouchableHighlight>
    </View>
  );
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
});
