import React from 'react'
import { StyleSheet, View } from 'react-native';
import { Separator } from "@vega-ui/react-native";

export default function HomeScreen() {
  return (
    <View style={{ marginTop: 200 }}>
      <Separator />
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
