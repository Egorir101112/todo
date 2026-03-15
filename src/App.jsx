import {useState} from "react";
import AppHeader from "./AppHeader.jsx";
import ItemFilter from "./itemsFilter.jsx";
import SearchPanel from "./SearchPanel.jsx";
import TodoList from "./TodoList.jsx";
import AddItems from "./Additems.jsx";

let maxID = 1000
const App = () => {

    const [items, setItems] = useState([
        { id: 1, label: 'проснуться'},
        { id: 2, label: 'умыться', important: true },
        { id: 3, label: 'покушать'}
    ]);

    const deleteItems = (id) => {
      setItems((items) => {
        const index = items.findIndex((element) => element.id === id)
          const before = items.slice(0, index);
          const after =  items.slice(index + 1);
          return [...before, ...after]
      })
    }
       
    const addItems = (text) => {
      setItems((items) => {
        const newitem = {
          id: maxID++,
          label: text,
          important: false
        }
        return [...items, newitem]
      })
    }
  return(
    <div className="container">
      <AppHeader/>
      <div className="row">
        <div className="col-6">
          <SearchPanel/>
        </div>
        <div className="col-6">
          <ItemFilter/>
        </div>
      </div>
      <TodoList todos={items} onDeleted={deleteItems} />
      <AddItems onAdd = {addItems}/>
    </div>
  )
}

export default App;



