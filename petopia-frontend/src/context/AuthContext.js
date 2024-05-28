import React, { createContext, useState, useEffect } from 'react';
import { auth } from '../firebase';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  const login = async (email, password) => {
    await auth.signInWithEmailAndPassword(email, password);
  };

  const signup = async (email, password) => {
    await auth.createUserWithEmailAndPassword(email, password);
  };

  const logout = async () => {
    await auth.signOut();
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
