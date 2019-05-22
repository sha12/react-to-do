import React, {Component} from 'react';

class TodoItem extends Component{

    getStyle = ()=>{
        return {
            background:'#f4f4f4',
            padding: "10px",
            borderBottom: "1px #ccc dotted",
            textDecoration: this.props.todo.isdone ? 'line-through': 'none'}
    }

    render(){
        const {id, title} = this.props.todo
        return(
           <div style={this.getStyle()}>
               <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this, id)}></input>
                    {title}
                    <button style={btnStyle} name="removeTask" onClick={this.props.removeTask.bind(this,id)}>X</button>

               </p>
           </div>
                )
        }

}

const btnStyle = {
    background: "#ff0000",
    color: "#fff",
    border: 'none',
    padding: "5px 9px",
    borderRadius: "50%",
    float: "right",
    cursor: "pointer"
}

export default TodoItem;
