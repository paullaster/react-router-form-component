import './App.css'
import { Form } from 'react-router-dom'

function App() {

  return (
    <Form>
      <input type="text" name='title' placeholder='Mugging'/>
      <input type="text" name='description' placeholder='This is the act of ...' />
      <button type='submit'>create</button>
    </Form>
  )
}

export default App
