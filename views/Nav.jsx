import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Paquetes from './Paquetes';

const Nav = () => {
  return (
    <View style={styles.container}>
      <Paquetes />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Nav