import React from "react";

class TodoListItem extends React.Component {

    render() {
        const {label,
            onDeleted,
            onToggleDone,
            onToggleImportant,
            done,
            important
        } = this.props;
    
        let myClass = ''
        if(done) {
            myClass += ' done'
        }

        if(important) {
            myClass = myClass + 'important'
        }
        
    return(
        <div className="row">
            <div className="col-6">
            <span className={myClass} onClick={onToggleDone}>
                {label}
             </span>
            </div>
            <div className="col-6">
            {done ? ( 
                <button
                onClick={onToggleDone}
                type="button"
                className="btn btn-outline-warning buttons">
                    <i className="fa-solid fa-arrow-left"></i>
                </button>
            ) : (
                <button
                onClick={onToggleDone}
                type="button"
                className="btn btn-success buttons">
                    <i className="fa-solid fa-check"></i>
                </button>
            )}  
                <button onClick={onToggleImportant}
                    type="button"
                    className="btn btn-primary buttons">
                        <i className="fa-solid fa-exclamation"></i>
                </button>

                <button onClick={onDeleted}
                type="button"
                className="btn btn-danger buttons">
                    <i className="fa-solid fa-trash"></i>
                </button>
            </div>
        </div>
    )
  }
 };

export default TodoListItem;