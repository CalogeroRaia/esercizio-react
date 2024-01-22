import React, { useState, useRef } from 'react';

const users = [
  { email: "calogeroraia3@gmail.com", name: "Calogero", contatore: 1 },
];

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [resetLogin, setResetLogin] = useState(false);
  const emailInputRef = useRef(null);

  const handleEmailChange = () => {
    const loginButton = document.querySelector("#loginForm button");
    loginButton.disabled = !emailInputRef.current.checkValidity();
  };

  const handleLogin = () => {
    const enteredEmail = emailInputRef.current.value.trim().toLowerCase();
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
    emailInputRef.current.value = '';
    emailInputRef.current.disabled = false;
    document.querySelector("#loginForm button").disabled = true;
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
          <form id="loginForm">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" ref={emailInputRef} onChange={handleEmailChange} required />
            <button type="button" onClick={handleLogin} disabled>Login</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default App;
