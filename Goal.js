import React, {useState, useEffect} from "react";
import { Pressable, TextInput } from "react-native";
import styled from "styled-components/native";



const NewTodoInput = styled.TextInput`
  width: 200px;
  height: 25px;

  margin-top: 20px;
  background-color: #efefef;
  border-radius: 5px;
  padding-left: 10px;
`;
{/* <Goal title={"✔️🔥🗒"}/> */}

const Goal = ({title}) => {
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


  // 등록된 일정들
  const [todos, setTodos] = useState([])

  //타이핑중인 아직 추가되지는 않은 일정
  const [newTodo, setNewTodo] = useState("")

  useEffect(()=>{
    console.log("new todo: ", newTodo)
  },[newTodo])


  return (
    <>
      <Pressable
        
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
          <Pressable
            onPress={() => {
              console.log(`${todo} is completed`);
            }}
          >
            <TodoContainer>
              <CompletedBox />
              <ScheduleName>{todo}</ScheduleName>
            </TodoContainer>
          </Pressable>
        ))
      }
      {/* TEXT_INPUT을 써볼거에오 */}
      <NewTodoInput
        onChangeText={(text)=>{
          setNewTodo(text)
        }}
        onSubmitEditing={()=>{
          //새ㅔ로운 일정 추가
          setTodos((prev) => [...prev, newTodo]);
          //빈칸으로 초기화
          setNewTodo("")

          // console.log(newTodo)
        }}
        placeholder="어떤 일을 하실건가요?"
        value={newTodo}
        // keyboardType="number-pad"
        returnKeyType="done"

      />

      {/* <TextInput 
      /> */}
    </>
  );
};

export default Goal;
