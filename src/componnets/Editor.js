import React, { useState, useContext } from "react";
import { TodoMethods } from './App';

function Editor({ todo }) {
  const [ text, setText ] = useState(todo.text);
  const { setEdittingTodoId, updateEdittingTodoText } = useContext(TodoMethods);

  function confirm() {
    updateEdittingTodoText(text);
    close();
  };

  function handleKeyUp(e) {
    if (e.keyCode !== 13) return;
    else confirm();
  };

  function close() {
    setEdittingTodoId(null)
  };

  return (
    <div className="ModalContainer">
      <div className="Modal">
        <p>
          <span onClick={close}>X</span>
        </p>
        <input
          value={text}
          onChange={e => { setText(e.target.value) }}
          onKeyUp={handleKeyUp}
        />
        <button onClick={confirm}>确定</button>
      </div>
    </div>
  );
}

export default Editor;
