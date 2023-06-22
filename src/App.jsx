import React, { useState } from "react";
import "./styles.css"

export const App = () => {
  const [todoText, setTodoText] = useState('');
  const [incpmpleteTodos, setIncompleteTodos] = useState(['あああああああ', 'いいいいいいい']);
  const [completeTodos, setCompleteTodos] = useState(['ううううううう'])

  const onChangeTodoText = (e) => setTodoText(e.target.value)
  const onClickAdd = () => {
    if (todoText === '') return;
    const newTodos = [...incpmpleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText('');
  };

  const onClickDelete = (index) => {
    const newTodos = [...incpmpleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };

  return (
    <>
      <div className="input-area">
        <input placeholder="TODOを入力" value={todoText} onChange={onChangeTodoText}/>
        <button onClick={onClickAdd}>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {incpmpleteTodos.map((todo, index) => {
            return(
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button>完了</button>
                <button onClick={() => onClickDelete(index)}>削除</button>
              </div>
            )
          })}
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了のTODO</p>
          <ul>
            {completeTodos.map((todo) => {
              return(
                <div key={todo} className="list-row">
                  <li>うううううう</li>
                  <button>完了</button>
                  <button>削除</button>
                </div>
              )
            })} 
          </ul>
      </div>
    </>
  );
}
