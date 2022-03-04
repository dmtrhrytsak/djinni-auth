import { useState } from 'react';

const RemindForm = ({ onPasswordReset }) => {
  const [email, setEmail] = useState('');

  return (
    <div className="w-full">
      <div className="mb-12">
        <div className="space-y-4 mb-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-2 py-2 border rounded border-gray-300"
          />
        </div>

        <button
          onClick={() => onPasswordReset(email)}
          className="px-6 py-2 rounded bg-sky-700 text-white text-lg hover:ring active:ring"
        >
          Продовжити
        </button>
      </div>
    </div>
  );
};

export default RemindForm;
