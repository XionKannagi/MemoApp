import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';

export default function BodyText(props) {
  const { children } = props;
  return (
    <View style={styles.text}>
      <Text>{ children }</Text>
    </View>
  );
}

BodyText.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = StyleSheet.create({
  text: {
    color: '#ddd',
    backgroundColor: '#eee',
  },
});
