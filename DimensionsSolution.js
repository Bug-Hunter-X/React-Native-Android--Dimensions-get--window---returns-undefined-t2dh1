import React, { useEffect, useState } from 'react';
import { Dimensions, StyleSheet, View, Text } from 'react-native';

const DimensionsSolution = () => {
  const [windowWidth, setWindowWidth] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({ window }) => {
      setWindowWidth(window.width);
      setWindowHeight(window.height);
    });
    Dimensions.get('window').then(({width, height})=>{
        setWindowWidth(width);
        setWindowHeight(height);
    })
    return () => subscription?.remove();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Window Width: {windowWidth}</Text>
      <Text>Window Height: {windowHeight}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default DimensionsSolution; 