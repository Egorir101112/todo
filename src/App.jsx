import AppHeader from "./AppHeader.jsx";
import ItemFilter from "./itemsFilter.jsx";
import SearchPanel from "./SearchPanel.jsx";
import TodoList from "./TodoList.jsx";

const App = () => {
    const items = [ 
        { id: 1, label: 'проснуться'},
        { id: 2, label: 'умыться', important: true },
        { id: 3, label: 'покушать'} ];
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
      <TodoList todos={items}/>
    </div>
  )
}

export default App;



