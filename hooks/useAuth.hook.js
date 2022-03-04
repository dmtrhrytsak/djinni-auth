import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import {
  onAuthStateChanged,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
  sendEmailVerification,
} from 'firebase/auth';

import { auth, googleProvider } from '../services/firebase.config';

export const useAuth = () => {
  const [user, setUser] = useState(null);
  const [isInitializing, setIsInitializing] = useState(true);
  const [error, setError] = useState(null);

  const router = useRouter();

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      setError(error.message);

      alert(error.message);
    }
  };

  const signInWithCredentials = async (email, password) => {
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);

      if (!user.emailVerified) {
        throw new Error(
          'You need to confirm your email address before you can access your account.'
        );
      }

      setUser(user);
    } catch (error) {
      setError(error.message);

      alert(error.message);
    }
  };

  const signUpWithEmailAndPassword = async (email, password) => {
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      await sendEmailVerification(user);

      alert(
        'We have sent an email with a confirmation link to your email address.'
      );

      router.push('/login');
    } catch (error) {
      setError(error.message);

      alert(error.message);
    }
  };

  const signOutFromAccount = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      setError(error.message);

      alert(error.message);
    }
  };

  const resetPassword = async (email) => {
    try {
      await sendPasswordResetEmail(auth, email);

      alert('A password reset link was sent.');

      router.push('/login');
    } catch (error) {
      setError(error.message);

      alert(error.message);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (currentUser) => {
        setIsInitializing(true);

        if (currentUser && currentUser.emailVerified) {
          setUser(currentUser);
        } else {
          setUser(null);
        }

        setIsInitializing(false);
      },
      (error) => {
        setError(error.message);

        alert(error.message);
      }
    );

    return unsubscribe;
  }, []);

  return {
    user,
    isInitializing,
    signInWithCredentials,
    signInWithGoogle,
    signUpWithEmailAndPassword,
    signOutFromAccount,
    resetPassword,
  };
};
