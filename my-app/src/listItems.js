import React from 'react'
import './listitem.css'

function ListItems(props){
    
        const items = props.items;
        const listItems = items.map(item =>{
            return <div className="list" key="item.key">
                <p>{item.text}
                <div id="add"><input type="checkbox" /></div>
                </p>
            </div>
        })

        return <div>{listItems}</div>

    
}

export default ListItems;