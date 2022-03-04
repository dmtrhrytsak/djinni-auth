import { useState } from 'react';

const RegisterForm = ({ onRegister }) => {
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

  return (
    <div className="w-full">
      <div className="mb-12">
        <div className="space-y-4 mb-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="w-full px-2 py-1 border rounded border-gray-300"
          />
          <input
            type="password"
            name="password"
            placeholder="Пароль"
            onChange={handleChange}
            className="w-full px-2 p-1 border rounded border-gray-300"
          />
        </div>

        <button
          onClick={() =>
            onRegister(userCredentials.email, userCredentials.password)
          }
          className="px-6 py-2 rounded bg-sky-700 text-white text-lg hover:ring active:ring"
        >
          Продовжити
        </button>
      </div>
    </div>
  );
};

export default RegisterForm;
