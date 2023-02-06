import './App.scss';
import { useState } from 'react';

function App() {

  let [name, setName] = useState('')
  let [password, setPassword] = useState('')

  let handleInput = (func, value) => {
    func(value);
  }
  

  let handleFormSubmit = (e) => {
    e.preventDefault();
    alert('Succes!')
    console.log(e);
    console.log(`Name: ${name}; Password:${password}`)
  }

  return (
    <div className="App">
      <form className="form" onSubmit={(e) => handleFormSubmit(e)}>
        <div>
        <label>Nume: </label>
          <input type="text" name="name" value={name} onChange={(e) => handleInput(setName, e.target.value)}></input>
        </div>
        
        <div>
        <label>Parola: </label>
          <input type="password" name="password" value={password} onChange={(e) => handleInput(setPassword, e.target.value)}></input>
        </div>

        <button type="submit">Submit</button>
      </form>
      
    </div>
  );
}

export default App;
