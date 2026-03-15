 const AddItems = ({onAdd}) => {
    return(
        <div className="row">
            <div className="col-5">
                <input className="form-control" placeholder="Сюда писать элементы"/>
            </div>
            <div className="col-6">
                <button className="btn btn-outline-info" onClick={() => onAdd('test')} >
                    Добавить элемент
                </button>
            </div>
        </div>
    )
 }

 export default AddItems;