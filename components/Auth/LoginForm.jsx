import { useUserCredentialsInput } from '../../hooks/useUserCredentialsInput.hook';

const LoginForm = ({ onSignInWithCredentials }) => {
  const { userCredentials, handleChange } = useUserCredentialsInput();

  return (
    <div>
      <div className="mb-12">
        <div className="space-y-4 mb-4">
          <input
            type="email"
            name="email"
            value={userCredentials.email}
            placeholder="Email"
            onChange={handleChange}
            className="w-full px-2 py-1 border rounded border-gray-300"
          />
          <input
            type="password"
            name="password"
            value={userCredentials.password}
            placeholder="Пароль"
            onChange={handleChange}
            className="w-full px-2 p-1 border rounded border-gray-300"
          />
        </div>

        <button
          onClick={() =>
            onSignInWithCredentials(
              userCredentials.email,
              userCredentials.password
            )
          }
          className="px-6 py-2 rounded bg-sky-700 text-white text-lg hover:ring active:ring"
        >
          Увійти
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
