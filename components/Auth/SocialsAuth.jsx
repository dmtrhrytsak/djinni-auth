import { FcGoogle } from 'react-icons/fc';

const SocialsAuth = ({ onSignInWithGoogle }) => {
  return (
    <div className="w-full mb-12">
      <button
        onClick={onSignInWithGoogle}
        className="flex gap-2 items-center w-full py-2 px-2 border rounded border-gray-300 shadow-sm text-lg"
      >
        <span className="p-1 rounded bg-sky-100">
          <FcGoogle className="text-xl" />
        </span>
        Увійти з Google
      </button>
    </div>
  );
};

export default SocialsAuth;
