import React, {Component} from 'react'

class AddToDo extends Component {
    state={
        title:""
    }

    setValue = (e)=>{
        this.setState({title: e.target.value})
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTask(this.state.title)
        this.setState({title: ""})
    }

    render(){
        return (
            <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
                <input 
                type="text"
                name="title"
                style={{flex:"10", padding:"5px"}}
                placeholder="Add to do.."
                value={this.state.title}
                onChange={this.setValue}>
                </input>
                <input
                type="submit"
                value="Add"
                className="btn"
                style={{flex:"1"}}>    
                </input>
            </form>
        )
    }
}

export default AddToDo