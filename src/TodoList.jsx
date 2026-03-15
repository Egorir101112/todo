import TodoListItem from "./Todolistitem.jsx";

const TodoList = ({todos, onDeleted}) => {  
    const elements = todos.map((item) => {
        const {id, ...itemProps} = item;
        return(
            <li key={id} className="list-group-item">
                <TodoListItem {...itemProps} onDeleted = {() => onDeleted(id) }/>
            </li>
        )
    })
  
  return(
    <ul className="list-group" id="list">
        {elements}
    </ul>
  )
};

export default TodoList;





