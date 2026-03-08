import TodoListItem from "./Todolistitem.jsx";

const TodoList = ({todos}) => {  
    const elements = todos.map((item) => {
        const {id, ...itemProps} = item;
        return(
            <li key={id} className="list-group-item">
                <TodoListItem {...itemProps}/>
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





