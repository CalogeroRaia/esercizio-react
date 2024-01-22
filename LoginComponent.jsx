import React, { useState } from 'react';

const users = [
  { email: "calogeroraia3@gmail.com", name: "Calogero", contatore: 1 },
];

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [resetLogin, setResetLogin] = useState(false);
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleLogin = () => {
    const enteredEmail = email.trim().toLowerCase();
    const user = users.find(user => user.email === enteredEmail);

    if (user) {
      setCurrentUser(user);
      setIsLoggedIn(true);
      setResetLogin(false);
    } else {
      alert("Email non valida. Inserisci l'indirizzo email consentito.");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);

    if (resetLogin) {
      resetLoginForm();
      setResetLogin(false);
    } else {
      setResetLogin(true);
      resetLoginForm();
    }
  };

  const resetLoginForm = () => {
    setEmail('');
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <h1>{currentUser.contatore > 1 ? `Bentornato ${currentUser.name}` : `Benvenuto ${currentUser.name}`}</h1>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <h1>Login Page</h1>
          <form>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" value={email} onChange={handleEmailChange} required />
            <button type="button" onClick={handleLogin} disabled={!email}>Login</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default App;
