import '../App.css';
import React, { useState } from 'react';

function RegistrationInfo() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  return (
    <div className="App">
      <header className="App-header">
        <form>
          <fieldset>
            <legend>Give Us Your Details</legend>
            <label>Enter your name: 
              <input type="text" value={name}
                onChange={e => setName(e.target.value)} />
            </label>
            <label>Enter your email: 
              <input type="text" value={email}
                onChange={e => setEmail(e.target.value)} />
            </label>
          </fieldset>
          <button onClick={e => {
            setName(e.target.value);
            setEmail(e.target.value);
            alert(`Wow, thanks ${name} for signing up! ${email} sounds kinda lame though...`);
            e.preventDefault();
          }}>Submit</button>
        </form>
      </header>
    </div>
  );
}

export default RegistrationInfo;