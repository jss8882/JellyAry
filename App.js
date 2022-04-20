import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { borderColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
import styled from "styled-components/native";
import Goal from "./Goal";

export default function App() {

  const Container = styled.View`
    border: 3px solid blue;
    flex: 1;
    justify-content: center;
    align-items: center;
  `;

  //State: 상태
  // const [상태의_이름, 상태를_바꿀때_사용하는_함수 ] = useState("초기값")

  return (
    <Container>
        <Goal title={"✔️🔥🗒"}/>
    </Container>
  );
}
