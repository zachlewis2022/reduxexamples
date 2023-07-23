import React, { useState } from 'react';
import './App.css';
import ClassDemo from './ClassDemo';
//import { useForm, SubmitHandler } from "react-hook-form";

function App() {
  const [name, setName] = useState("");

  return (
    <div className="App">
<form>
      <label>Enter your name:
        <input
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
    </form>
      <ClassDemo props={name} />
    </div>
  );
}

export default App;
