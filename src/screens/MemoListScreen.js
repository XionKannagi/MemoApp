import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import firebase from 'firebase';
import '@firebase/firestore';

import MemoList from '../components/MemoList';
import CircleButton from '../elements/CircleButton';


export default function MemoListScreen(props) {
  const [memoList, setMemoList] = useState([]);
  const { currentUser } = firebase.auth();
  const db = firebase.firestore();

  useEffect(() => {
    db.collection(`users/${currentUser.uid}/memos`)
      .onSnapshot((snapshot) => {
        const loadMemoList = [];
        snapshot.forEach((doc) => {
          loadMemoList.push({ ...doc.data(), key: doc.id });
        });
        setMemoList(loadMemoList);
      });
  }, [db]);

  /*
    .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          loadMemoList.push({ ...doc.data(), key: doc.id });
        });
        setMemoList(loadMemoList);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [db]);
  */

  const { navigation } = props;
  return (
    <View style={styles.container}>
      <MemoList navigation={navigation} memoList={memoList} />
      <CircleButton name="plus" onPress={() => { handlePress(navigation); }} />
    </View>
  );
}

function handlePress(navigation) {
  navigation.navigate('MemoCreate');
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
