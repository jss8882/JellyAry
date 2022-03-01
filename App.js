import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { borderColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
import styled from "styled-components/native";
import Goal from "./Goal";

export default function App() {
  console.log("Starting App");

  const Container = styled.View`
    border: 3px solid blue;
    flex: 1;
    justify-content: center;
    align-items: center;
  `;

  
  //return안에 있는거는 보여지는 코드
  //IOS의 경우에는
  return (
      <Container>

        <Goal title={"✔️🔥🗒"} todos={["빨래하기", "치킨먹기", "혜미니 영통"]}/>
        <Goal title={"혜미니👻"} todos={["공덕가기이이이ㅣ", "해장국 뇸뇸", "순대국 뇸뇸"]}/>
        <Goal title={"개인공부👻"} todos={["김브래인씨ㅣ", "논문"]}/>

      </Container>
  );
}
