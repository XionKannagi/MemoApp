import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  FlatList,
} from 'react-native';
import PropTypes from 'prop-types';
import { dateString } from '../utils';

export default function MemoList(props) {
  const { navigation, memoList } = props;

  return (
    <View style={styles.memoList}>
      <FlatList
        data={memoList}
        renderItem={({ item }) => (
          <TouchableHighlight onPress={() => { navigation.navigate('MemoDetail', { memo: item }); }}>
            <View style={styles.memoListItem}>
              <Text style={styles.memoTitle}>{item.body.substring(0, 10)}</Text>
              <Text style={styles.memoDate}>{ dateString(item.createdOn.toDate()) }</Text>
            </View>
          </TouchableHighlight>
        )}
      />
    </View>
  );
}

const MemoListType = PropTypes.shape({
  body: PropTypes.string,
  createdOn: PropTypes.shape(),
});

MemoList.propTypes = {
  navigation: PropTypes.shape().isRequired,
  memoList: PropTypes.arrayOf(MemoListType).isRequired,
};

const styles = StyleSheet.create({
  memoList: {
    width: '100%',
    flex: 1,
  },
  memoListItem: {
    padding: 16,
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
    backgroundColor: '#fff',
  },
  memoTitle: {
    fontSize: 18,
    marginBottom: 4,
  },
  memoDate: {
    fontSize: 12,
    color: '#a2a2a2',
  },
});
