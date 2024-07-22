import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserForm from './UserForm'
import ShoppingList from './ShoppingList'
import SimpleForm from './SimpleForm'

function App() {

  return (
    <>
      <ShoppingList />
      <UserForm />
      <SimpleForm />
    </>
  )
}

export default App
