import { useState } from 'react';

const useUserCredentialsInput = () => {
  const [userCredentials, setUserCredentials] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { value, name } = e.target;

    setUserCredentials({
      ...userCredentials,
      [name]: value,
    });
  };

  return { userCredentials, handleChange };
};

export { useUserCredentialsInput };
