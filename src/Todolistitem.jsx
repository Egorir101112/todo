import React from "react";

class TodoListItem extends React.Component {

    state = {
        done: false,
        check: false
    }

    onLabelClick = () => {
        console.log(`Нажато на ${this.props.label}`);
        this.setState(({done}) => {
            return {
                done: !done
            }
        } );
    }

    onCheckClick = () => {
        this.setState(({check}) =>{
            return {
                check: !check
            }
        }
    );
    }


    render() {
        let myClass = ''
        if(this.state.done) {
            myClass += ' done'
        }

        if(this.state.check) {
            myClass = myClass + ' check'
        }
   
        const {label} = this.props;
    // const itemStyle = {
    //     color: important ? 'red' : 'black'

    return(
        <div>
            <span className={myClass} onClick={this.onLabelClick}>
                {label}
             </span>
            <button onClick={this.onCheckClick} type="button" className="btn btn-success buttons">
                <i className="fa-solid fa-check"></i>
            </button>
            <button onClick={this.props.onDeleted} type="button" className="btn btn-danger buttons">
                <i className="fa-solid fa-trash"></i>
            </button>
        </div>
    )
  }
 };

export default TodoListItem;