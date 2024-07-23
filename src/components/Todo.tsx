import { Button } from '@mui/material'
import React from 'react'

// truyen vào prop cho component
const Todo = ({name} : {name: string}) => {
  return (
    <Button style={{ justifyContent: 'start' }} fullWidth={true}>{name}</Button>
  )
}

export default Todo
