import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { borderColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

export default function App() {
  return (
    <>
     <View style={{
      borderColor:"blue",
      borderWidth:3,
      flex: 1,
      justifyContent:"center",
    }}>
      <Text
      style={{
        borderColor:"black",
        borderWidth:1,
        textAlign:"center",
      }}
      >Jelliary!</Text>
    </View>
    <View
      style={{
        borderColor: "black",
        borderWidth: 5,
        height: 70,
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      <View
       style={{
         borderColor: "red",
         borderWidth: 5,
         height: 50,
         width: 50,
       }}
       />
      <View
      style={{
         borderColor: "red",
         borderWidth: 5,
         height: 50,
         width: 50,
       }}
       />
      <View
      style={{
         borderColor: "red",
         borderWidth: 5,
         height: 50,
         width: 50,
       }}
       />
    </View>
   

    </>
  );
}