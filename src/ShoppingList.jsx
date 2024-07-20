import React, { useState } from 'react'
import Item from './Item';

const ShoppingList = () => {
    const INITIAL_STATE = [
        {id: 1, name: "peanut butter", qty: 2},
        {id: 2, name: "whole milk", qty: 1}
    ]
    const [items, setItems] = useState(INITIAL_STATE)
    return (
        <div>
            <h3>Shopping List</h3>
            <div>
                {items.map(({ id, name, qty }) => <Item id={id} name={name} qty={qty} key={id} />)}
            </div>
        </div>
    )
};

export default ShoppingList;