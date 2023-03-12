import React from 'react';

const LoggedIn = () => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  
  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      {isLoggedIn ? 'LoggedIn' : 'Logged Out'}
    </div>
  );
};

export default LoggedIn;
