import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Colors from "@/constants/Colors";
import { Stack } from "expo-router";

const transcations = () => {
  return (
    <>
    <Stack.Screen options={{headerShown:false}}/>
    <View style={styles.container}>
      <Text style={styles.text}>transcations</Text>
    </View>
    </>
  );
};

export default transcations;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.black,
  },
  text: {
    color: Colors.white,
  },
});
