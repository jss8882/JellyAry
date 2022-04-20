import React, {useState, useEffect} from "react";
import { Pressable, TextInput } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import styled from "styled-components/native";
import Ionicons from '@expo/vector-icons/Ionicons';



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
    width: 50%;
    justify-content: space-between;
    align-items: center;
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
    align-self: center;
  `;


  // 등록된 일정들
  const [todos, setTodos] = useState([])

  //타이핑중인 아직 추가되지는 않은 일정
  const [newTodo, setNewTodo] = useState("")

  //TextInput이 보여지는 상태인지를 저장하는 상태
  const [inputShown,setInputShown] = useState(false)

  useEffect(()=>{
    console.log("new todo: ", newTodo)
  },[newTodo])

  useEffect(()=>{
    console.log(todos)
  },[todos])


  return (
    <>
      <Pressable
        // onPress={()=>setInputShown(true)}
        // !:NOT연산자
        //false=>!false  Not false => true
        //true => !true not true => false
        onPress={()=>setInputShown(prev=>!prev)}
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
        todos.map((todo,index) => (
          <TodoContainer>
            <BouncyCheckbox
              text={todo}
            />
            <Pressable 
              onPress={()=>{
                console.log("icon pressed",todo,index)
                setTodos(prev=>prev.filter(item=>item!==todo))
              }}
            >
              <Ionicons
                style={{
                  marginLeft:30,
                }}
                name="trash-outline"
                size={15}
                color="green"
              />
            </Pressable>
          </TodoContainer>
        ))

      }

      {
        // 삼항연산자 if (조건){조건이 참일때 수행할 코드} else {조건이 참이 아닐때 수행할 코드}
        //(조건)?(조건이참일때 수행할 코드):(조건이 참이 아닐때 수행할 코드)

        //조건: inputShown이 true인가?
        // inputShown===true?(
        inputShown?(
          //inputShown이 true일때
          <NewTodoInput
            onChangeText={(text)=>{
              setNewTodo(text)
            }}
            onSubmitEditing={()=>{
              //새ㅔ로운 일정 추가
              setTodos((prev) => [...prev, newTodo]);
              //빈칸으로 초기화
              setNewTodo("")
              setInputShown(false)

              // console.log(newTodo)
            }}
            placeholder="어떤 일을 하실건가요?"
            value={newTodo}
            // keyboardType="number-pad"
            returnKeyType="done"

          />
        ):(
          //inputShown이 true가 아닐때
          null
        )
      }
    </>
  );
};

export default Goal;
