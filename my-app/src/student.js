import React ,{Component}from "react";

class Student extends Component {
    constructor(props){
        super(props);

        this.state = {
            newItem : '',
            list : []
        };
    }
    updateInput(key,value){
        this.setState({
            [key]:value
        });
    }
    addItem (){
        const newItem={
            id : 1 +Math.random(),
            value : this.state.newItem.slice()
        };
        const list =[...this.state.list];
        list.push(newItem);
        this.setState({
            list,
            newItem : ""
        });
    }
        render(){
            return (

                <div className ="Student">
                    <div>
                    ADD AN ITEM 
                    <br />
                    <input type="text" placeholder ="new item" value ={this.state.newItem} onChange= {e => this.updateInput("newItem" , e.target.value)}/>
                    <button onClick={()=>this.addItem()}>add</button>
                    <br />
                    <ul>
                        {this.state.list.map(item =>{
                            return (
                                <li key={item.id}>{item.value}</li>
                            )
                        })}
                    </ul>

                    </div>
                </div>
               
                
            );
        }
    }

    export default Student;
