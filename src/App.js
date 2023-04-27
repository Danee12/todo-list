import { useState } from 'react';
import './App.css';
import WorkingList from './components/WorkingList';
import DoneList from './components/DoneList';


function App() {
  // 추가할 제목과 내용의 state
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  // 현재 시간
  const date = Date.now();

  // todo list 초기값
  const [todoList, setTodoList] = useState([
    { id: date + '' + Math.floor(Math.random() * 100), 
      title: "항해 99 듣기", 
      content: "React 공부하기", 
      isDone: 0 },
    { id: date + '' + Math.floor(Math.random() * 100), 
      title: "집에서 놀기", 
      content: "아무것도 안하기", 
      isDone: 1 }]);

  // 입력 값 : todo list 제목
  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  }

  // 입력 값 : todo list 내용
  const contentChangeHandler = (event) => {
    setContent(event.target.value);
  }

  // 등록하기 버튼
  // id는 현재시간에다가 랜덤한 숫자 두개 추가하여 만든다.
  const registerTodo = function () {
    console.log(todoList)
    // 현재 시간
    const date = Date.now();

    // 새로운 todo 객체 생성
    const newTodo = {
      id: date + '' + Math.floor(Math.random() * 100),
      title,
      content,
      isDone: 0
    }

    // 객체 넣기
    setTodoList([...todoList, newTodo])
  }

  // 삭제하기 버튼
  // 해당 key와 같은 요소 삭제후 setState
  const removeHandler = (key) => {
    const newTodo = todoList.filter(item => item.id !== key)

    setTodoList(newTodo)
  }

  // 상태 변환 버튼
  // isDone의 값이 0이면 1로, 1이면 0으로 변환
  const isDoneChangeHandler = (key) => {
    const newTodo = todoList.map(item => item.id === key ? {...item, isDone:Number(!item.isDone)}:item)

    setTodoList(newTodo)
  }


  return (
    <div className="full-screen">
      <div>
        <h1 className="title">My To-Do List</h1>
        <div className='input-space'>
          <div>
            <p style={{ fontSize: "20px", marginBottom: "0px" }}>
              제목 : <input value={title} onChange={titleChangeHandler} style={{ marginLeft: "10px" }} size="40" />
            </p>
            <p style={{ fontSize: "20px" }}>
              내용 : <input value={content} onChange={contentChangeHandler} style={{ marginLeft: "10px" }} size="40" />
            </p>
          </div>
          <button style={{ fontSize: "15px" }} onClick={registerTodo}>등록하기</button>
        </div>
      </div>

      <div>
        <h2 className="sub-title">🥕 Working!</h2>
        <div className="todo-list">
          {
            todoList.filter((item) => {
              return item.isDone === 0;
            })
              .map((item) => {
                return (<WorkingList key={item.id} item={item} 
                                    removeHandler={removeHandler} 
                                    isDoneChangeHandler={isDoneChangeHandler}/>)
              })
          }
        </div>

        <h2 className="sub-title">🥕 Done!</h2>
        <div className="todo-list">
          {
            todoList.filter((item) => {
              return item.isDone === 1;
            })
              .map((item) => {
                return (<DoneList key={item.id} item={item} 
                                  removeHandler={removeHandler} 
                                  isDoneChangeHandler={isDoneChangeHandler}/>)
              })
          }
        </div>
      </div>
    </div>
  );
}



export default App;
