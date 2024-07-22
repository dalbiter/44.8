import React, { useState } from 'react'

const NewItemForm = ({ addItem }) => {
    const INTIAL_STATE = {
        name: '',
        qty: ''
    }
    const [formData, setFormData] = useState(INTIAL_STATE)
    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(formData => ({
            ...formData,
            [name]: value,
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addItem({ ...formData })
        setFormData(INTIAL_STATE)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Product</label>
            <input id='name'
                   type='text'
                   name='name'
                   placeholder='Item Name'
                   value={formData.name}
                   onChange={handleChange} 
            />
            <label htmlFor="qty">Quantity: {formData.qty} </label>
            <input type="range"
                   name='qty'
                   value='qty'
                   onChange={handleChange} 
                   min='1' 
                   max='10' 
            />
            {/* <input id='qty'
                   type='text'
                   name='qty'
                   placeholder='Quantity'
                   value={formData.qty}
                   onChange={handleChange} 
            /> */}
            <button>Add to List</button>
        </form>
    )
}; 

export default NewItemForm;