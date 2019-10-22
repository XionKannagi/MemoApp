import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import CircleButton from '../elements/CircleButton';

export default function MemoDetailScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.memoHeader}>
        <View>
          <Text style={styles.memoHeaderTitle}>講座のアイデア</Text>
          <Text style={styles.memoHeaderDate}>2019/10/15</Text>
        </View>
      </View>
      <View style={styles.memoContents}>
        <Text>
          これはメモの内容です
        </Text>
      </View>
      <CircleButton color="white" style={styles.editButton}>
        {'\uf067'}
      </CircleButton>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  memoHeader: {
    height: 100,
    backgroundColor: '#17313c',
    justifyContent: 'center',
    padding: 10,
    marginBottom: 4,
  },
  memoHeaderTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  memoHeaderDate: {
    fontSize: 12,
    color: '#fff',
  },
  memoContents: {
    paddingTop: 30,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    backgroundColor: '#ddd',
    flex: 1,
  },
  editButton: {
    top: 75,
  },
});
