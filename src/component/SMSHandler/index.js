import React from 'react';
import {View, StyleSheet} from 'react-native';
import SMSHandler from './SMSHandler';

const Index = (props) => {
  return (
    <View style={styles.screen}>
      <SMSHandler {...props} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default Index;
