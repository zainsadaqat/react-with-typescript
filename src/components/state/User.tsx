import React from 'react';

type UserType = {
  name: string;
  email: string;
};

const User = () => {
  const [user, setUser] = React.useState<UserType | null>(null);
  return (
    <>
      <button
        onClick={() =>
          setUser({ name: 'zain sadaqat', email: 'zain@gmail.com' })
        }
      >
        Login
      </button>
      <button onClick={() => setUser(null)}>Logout</button>
      {user ? user?.name : 'Logged Out'}
    </>
  );
};

export default User;
