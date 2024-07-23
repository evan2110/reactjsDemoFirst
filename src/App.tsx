import { Button, TextField } from "@mui/material"
import Todo from "./components/Todo"

function App() {

  return (
    <>
      <p>This is ToDo App</p>
      <div>
        <TextField size="small"/> 
        <Button variant="contained">Thêm</Button>
      </div>
      <div>
        {/* su dung component Todo */}
        <Todo />
        <Todo />
        <Todo />
        <Todo />
      </div>
    </>
  )
}

export default App
