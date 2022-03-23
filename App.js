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
  const [todos, setTodos] = useState([])

  //펼침 연산자 : 배열이나 객체를 펼쳐주는 친구
  // const my_list = [1,2,3,4,5]
  // 1,2,3,4,5를 배열로 만들었어요
  // [1,2,3,4,5] 이걸 다시 원래대로 풀고싶어요
  // ...[1,2,3,4,5] > 1,2,3,4,5
  // [...[1,2,3,4,5],6] > [1,2,3,4,5,6]
  // console.log(...my_list)
  // console.log("my list is ",my_list)

  //펼침연산자의 활용
  //복사
  //아래 처럼 단순하게 할당해주는 코드로는 "얕은 복사"

  // const new_list = my_list
  // console.log("new list is ",new_list)
  // new_list.push(6)
  // console.log("new list is ",new_list)
  // console.log("my list is ",my_list)

  //우리가 원하는건 두개의 다른 변수가 두개의 다른 주소를 가리키게 하는것
  // const new_list = [...my_list]
  // console.log(...my_list) 
  // console.log([...my_list])

  // new_list.push(6)
  // console.log(new_list)
  // console.log(my_list)









  return (
    <Container>


      <Pressable
        onPress={()=>{
          //기존의 todo 배열을 새로운 임시배열 깊은 복사를 한다열
          //첫번째 방식
          //임시배열에 새로운 일정을 push한다.
          //임시배열을 setTodos해서 새로운 todos로 바꾼다
          //상태를 업데이트하는 방법1
          //기존 일정들을 new_todos에 복사한다. 
          // const new_todos = [...todos]
          // new_todos.push("젤리이이이")
          // setTodos(new_todos)


          //두번째 방식 펼침연산자를 이용해서 새로운 일정을 추가하는 방식
          // const new_todos = [...todos,"젤리이이잉"]
          // setTodos(new_todos)

          //세번째 방식
          // setTodos((prev)=>[...prev,"젤리이이잉"])
        }}
      >
        <Goal title={"✔️🔥🗒"} todos={todos} />
      </Pressable>
      {/* <Goal title={"혜미니👻"} todos={["공덕가기이이이ㅣ", "해장국 뇸뇸", "순대국 뇸뇸"]}/>
      <Goal title={"개인공부👻"} todos={["김브래인씨ㅣ", "논문"]}/> */}
    </Container>
  );
}
