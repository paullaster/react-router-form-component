import './App.css'
import {Form} from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Form>
        <input type="text" name='title'/>
        <input type="text" name="description"/>
        <button type='submit'></button>
      </Form>
    </div>
  )
}

export default App
