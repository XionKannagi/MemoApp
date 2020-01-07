import React from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import MemoList from '../components/MemoList';
import CircleButton from '../elements/CircleButton';

export default function MemoListScreen(props) {
  const { navigation } = props;
  return (
    <View style={styles.container}>
      <MemoList navigation={navigation} />
      <CircleButton name="plus" onPress={() => { navigation.navigate('MemoEdit'); }} />
    </View>
  );
}

MemoListScreen.propTypes = {
  navigation: PropTypes.shape().isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
});