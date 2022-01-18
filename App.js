import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { borderColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
import styled from "styled-components/native";

export default function App() {
  const Container = styled.View`
    border: 3px solid blue;
    flex: 1;
    justify-content: center;
  `;

  const JelliText = styled.Text`
    border: 1px solid black;
    text-align: center;
  `;

  // //내부에있는 요소들을 가로로 배치하겠다
  // flexDirection: "row",
  // //내부에있는 요소들을 주축(flex Direction의 축)으로 동일한 간격으로 배치하겠다
  // justifyContent: "space-evenly",
  // //내부에있는 요소들을 주축의 직각축으로 가운데 정렬을 하겠다.
  // alignItems: "center",
  const HomeNavigation = styled.View`
    border: 5px solid black;
    height: 70px;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
  `;

  const HomeIcon = styled.View`
    border: 5px solid red;
    height: 50px;
    width: 50px;
  `

  //return안에 있는거는 보여지는 코드
  return (
    <>
      <Container>
        <JelliText>Jelly!!!</JelliText>
      </Container>

      <HomeNavigation>
        <HomeIcon/>
        <HomeIcon/>
        <HomeIcon/>
        <HomeIcon/>
      </HomeNavigation>
    </>
  );
}
