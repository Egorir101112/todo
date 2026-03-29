 import { useState } from "react";
 
 
 const AddItems = ({onAdd}) => {
    const [value, setValue] = useState('');

    const handleAdd = () => {
        onAdd(value);
        setValue('');
    }

    return(
        <div className="row">
            <div className="col-5">
                <input className="form-control" placeholder="Сюда писать элементы"
                value={value}
                onChange={(e) => setValue(e.target.value)}/>
            </div>
            <div className="col-6">
                <button className="btn btn-outline-info" onClick={handleAdd} >
                    Добавить элемент
                </button>
            </div>
        </div>
    )
 }

 export default AddItems;   