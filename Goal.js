import React from "react";
import { Pressable, TextInput} from "react-native";
import styled from "styled-components/native";

const Goal = ({ title, todos }) => {
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
  `;

  const GoalCategory = styled.Text``;

  const Circle = styled.View`
    width: 15px;
    height: 15px;
    background-color: white;
    border-radius: 7.5px;
    align-items: center;
    justify-content: center;
  `;

  const AddIcon = styled.Text`
    width: 15px;
    height: 15px;
    text-align: center;
    font-size: 15px;
    line-height: 15px;
  `;

  const TodoContainer = styled.View`
    flex-direction: row;
    margin-top: 10px;
  `;

  const CompletedBox = styled.View`
    width: 20px;
    height: 20px;
    border-radius: 5px;
    background-color: green;
  `;

  const IncompletedBox = styled.View`
    width: 20px;
    height: 20px;
    border-radius: 5px;
    background-color: #efefef;
  `;

  const ScheduleName = styled.Text`
    margin-left: 10px;
    align-self: center;
  `;


  const NewTodo = styled.TextInput`
    width: 100px;
    height: 20px;
    border: 1px solid black;
    
  `

  //Function
  //   ()=>{

  //   }

  // const a = "my "
  // const b = "name"

  // a+b // my name

  // "aa"
  // 'aa'
  // `aa`
  // `${}`

  return (
    <>
      {/* <Pressable onPress={함수}> */}
      <Pressable
        onPress={() => {
          //   console.log(title + " Pressed");
          console.log(`${title} Pressed`);
        }}
      >
        <GoalContainer>
          <GoalCategory>{title}</GoalCategory>
          <Circle>
            <AddIcon>+</AddIcon>
          </Circle>
        </GoalContainer>
      </Pressable>
      {
        //javascript code
        //배열크기만큼 반복하는 코드 (todos에 해야할일이 3개가 있으면 3번반복, 2개 있으면 2번 반복)
        todos.map((todo) => (
          <Pressable onPress={()=>{
              console.log(`${todo} is completed`)
          }}>
            <TodoContainer>
              <CompletedBox />
              <ScheduleName>{todo}</ScheduleName>
            </TodoContainer>
          </Pressable>
        ))
      }
      <NewTodo/>
    </>
  );
};

export default Goal;
