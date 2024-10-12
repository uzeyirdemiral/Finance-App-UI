import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '@/constants/Colors';

const index = () => {
  return (
    <View style={styles.container}>
      <Text>index</Text>
    </View>
  )
}

export default index;


const styles= StyleSheet.create({
  container:{
  flex:1,
  backgroundColor:Colors.black
  }
})