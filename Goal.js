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
{/* <Goal title={"βοΈπ₯π"}/> */}

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


  // λ±λ‘λ μΌμ λ€
  const [todos, setTodos] = useState([])

  //νμ΄νμ€μΈ μμ§ μΆκ°λμ§λ μμ μΌμ 
  const [newTodo, setNewTodo] = useState("")

  //TextInputμ΄ λ³΄μ¬μ§λ μνμΈμ§λ₯Ό μ μ₯νλ μν
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
        // !:NOTμ°μ°μ
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
        //λ°°μ΄ν¬κΈ°λ§νΌ λ°λ³΅νλ μ½λ (todosμ ν΄μΌν μΌμ΄ 3κ°κ° μμΌλ©΄ 3λ²λ°λ³΅, 2κ° μμΌλ©΄ 2λ² λ°λ³΅)
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
        // μΌν­μ°μ°μ if (μ‘°κ±΄){μ‘°κ±΄μ΄ μ°ΈμΌλ μνν  μ½λ} else {μ‘°κ±΄μ΄ μ°Έμ΄ μλλ μνν  μ½λ}
        //(μ‘°κ±΄)?(μ‘°κ±΄μ΄μ°ΈμΌλ μνν  μ½λ):(μ‘°κ±΄μ΄ μ°Έμ΄ μλλ μνν  μ½λ)

        //μ‘°κ±΄: inputShownμ΄ trueμΈκ°?
        // inputShown===true?(
        inputShown?(
          //inputShownμ΄ trueμΌλ
          <NewTodoInput
            onChangeText={(text)=>{
              setNewTodo(text)
            }}
            onSubmitEditing={()=>{
              //μγλ‘μ΄ μΌμ  μΆκ°
              setTodos((prev) => [...prev, newTodo]);
              //λΉμΉΈμΌλ‘ μ΄κΈ°ν
              setNewTodo("")
              setInputShown(false)

              // console.log(newTodo)
            }}
            placeholder="μ΄λ€ μΌμ νμ€κ±΄κ°μ?"
            value={newTodo}
            // keyboardType="number-pad"
            returnKeyType="done"

          />
        ):(
          //inputShownμ΄ trueκ° μλλ
          null
        )
      }
    </>
  );
};

export default Goal;
