import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function BodyText() {
  return (
    <View style={styles.container}>
      <Text>Hello!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: '#000000',
  },
});
