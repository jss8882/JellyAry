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
    align-items: center;
  `;

  const GoalContainer = styled.View`
    background-color: #efefef;
    border-radius: 8px;
    width: 100px;
    height: 35px;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    padding-left: 10px;
    padding-right: 10px;

    margin-top: 25px;

  `

  const GoalCategory = styled.Text`

  `

  const Circle = styled.View`
    width: 15px;
    height: 15px;
    background-color: white;
    border-radius: 7.5px;
    align-items: center;
    justify-content: center;
  `

  const AddIcon = styled.Text`
    width: 15px;
    height: 15px;
    text-align: center;
    font-size: 15px;
    line-height: 15px;
  `

  const TodoContainer = styled.View`
    flex-direction: row;
    margin-top: 10px;

  `

  const CompletedBox = styled.View`
    width: 20px;
    height: 20px;
    border-radius: 5px;
    background-color: green;
  `

  const IncompletedBox = styled.View`
    width: 20px;
    height: 20px;
    border-radius: 5px;
    background-color: #efefef;
  `

  const ScheduleName = styled.Text`
    margin-left: 10px;
    align-self: center;

  `




  //return안에 있는거는 보여지는 코드
  //IOS의 경우에는
  return (
      <Container>
        <GoalContainer>
          <GoalCategory>✔️🔥🗒</GoalCategory>
          <Circle>
            <AddIcon>
              +
            </AddIcon>
          </Circle>
        </GoalContainer>

        <TodoContainer>
          <CompletedBox/>
          <ScheduleName>빨래하기</ScheduleName>
        </TodoContainer>

        <TodoContainer>
          <IncompletedBox/>
          <ScheduleName>치킨먹기</ScheduleName>
        </TodoContainer>

        <GoalContainer>
          <GoalCategory>혜미니👻</GoalCategory>
          <Circle>
            <AddIcon>
              +
            </AddIcon>
          </Circle>
        </GoalContainer>

        <TodoContainer>
          <CompletedBox/>
          <ScheduleName>공덕가기이잉이ㅣ</ScheduleName>
        </TodoContainer>

        <TodoContainer>
          <IncompletedBox/>
          <ScheduleName>해장국 뇸뇸</ScheduleName>
        </TodoContainer>

        <TodoContainer>
          <IncompletedBox/>
          <ScheduleName>순대국 뇸뇸</ScheduleName>
        </TodoContainer>

      </Container>
  );
}
