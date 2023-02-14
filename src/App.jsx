import './App.css'
import { Form } from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <form>
        <input type="text" name='title'/>
        <input type="text" name="description"/>
        <button type='submit'>create</button>
      </form>
    </div>
  )
}

export default App
