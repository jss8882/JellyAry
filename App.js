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

  const Goal = ({title, todos}) =>{


    return(
      <>
        <GoalContainer>
          <GoalCategory>{title}</GoalCategory>
          <Circle>
            <AddIcon>
              +
            </AddIcon>
          </Circle>
        </GoalContainer>
        {
          //javascript code
          todos.map( (todo)=>(
              <TodoContainer>
                <CompletedBox/>
                <ScheduleName>{todo}</ScheduleName>

              </TodoContainer>
          ))
        }
      </>
    )
  }

  //배열, 어플(컴포넌트)의 상태(State)
  //함수형 컴포넌트

  //숫자 1,2,3
  const myNumber = 1;

  //배열(Array) []
  const todos = ["빨래하기", "치킨먹기","혜미니 과외"];
  const myArray = []


  //함수(function) ()=>{}  ()=>()
  //함수는 인풋(paramter), 프로세싱(중괄호 안에 있는 코드), 아웃풋 (return안에)

  // const myFunction = (parameter) => {
  //   code
  // }


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
