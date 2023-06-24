import React, { useState } from "react";
import "./styles.css"
import { InputTodo } from "./components/InputTodo";
import { IncompleteTodos } from "./components/IncompleteTodos";
import { CompleteTodos } from "./components/CompleteTodos";


export const App = () => {
  const [todoText, setTodoText] = useState('');
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([])

  // テキスト入力値の値 
  const onChangeTodoText = (e) => setTodoText(e.target.value)

  // 追加ボタンクリック時に「incompleteTodos」の配列にtodoを追加。inputボックス内のテキストを初期化。
  const onClickAdd = () => {
    if (todoText === '') return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText('');
  };

  // 削除ボタンクリック時に「incompleteTodos」の配列から対象のtodoを削除。
  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };

  // 完了ボタンクリック時に「incompleteTodos」から対象のタスクを削除し、
  // 「CompleteTodos」の配列へ完了したtodoを追加。
  const onClickComplete = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1)

    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  }

  // 戻すボタンクリック時に「CompleteTodos」から対象のtodoを削除し、
  // 「incompleteTodos」の配列へ対象のtodoを追加する。
  const onClickBack = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);

    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]]
    setCompleteTodos(newCompleteTodos);
    setIncompleteTodos(newIncompleteTodos);
  }

  return (
    <>
      <InputTodo todoText={todoText} 
                 onChange={onChangeTodoText} 
                 onClick={onClickAdd}
                 disabled={incompleteTodos.length >= 5} />
      {incompleteTodos.length >= 5 && 
        <p style={{ color: 'red' }}>登録できるtodo5個までだよ〜。消化しろ〜。</p>
      }
      <IncompleteTodos todos={incompleteTodos} 
                       onClickComplete={onClickComplete}
                       onClickDelete={onClickDelete} />
      <CompleteTodos todos={completeTodos}
                     onClickBack={onClickBack}/>
    </>
  );
}
