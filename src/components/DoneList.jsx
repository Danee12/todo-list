// Done에 나오는 객체 나열하기
const DoneList = ({ item, removeHandler, isDoneChangeHandler}) => {
    return (
      <div key={item.id} className="todo-component">
        <div className='todo-space'>
          <h3 className='todo-title'>{item.title}</h3>
          <div className='todo-content'>{item.content}</div>
        </div>
        <div className='todo-button'>
          <button className='delete-button' onClick={()=>removeHandler(item.id)}>삭제하기</button>
          <button className='cancle-button' onClick={()=>isDoneChangeHandler(item.id)}>취소</button>
        </div>
      </div>
    )
  }

  export default DoneList;