import React from 'react';
import Edit from '@material-ui/icons/Edit'
import Cancel from '@material-ui/icons/Close'
import Save from '@material-ui/icons/Save'

import Button from '@material-ui/core/Button'
class Input extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            value: "hola",
            editMode : false,
        }
    }

    saveEdit = (e) => {
        this.setState({
            value: e.target.parentElement.firstChild.value,
            editMode: false
        })
        
    }
    

    render(){
            if(this.state.editMode){
            return(
                <div className="field input">
                    <input type="text" defaultValue={this.state.value}/>
                    <button onClick={()=>this.setState({editMode:false})}><Cancel style={{fontSize: 15}} /></button>
                    <Button 
                        onClick={(e) => this.saveEdit(e)}
                        variant="contained" 
                        startIcon={<Save />}
                    />
                </div>)
            } else {
            return <div className="field output">
                    <span>{this.state.value}</span>
                    <button onClick={()=>this.setState({editMode: true})}><Edit style={{fontSize: 15}} /></button>
                </div>
            
        }

        
    }
}

export default Input;