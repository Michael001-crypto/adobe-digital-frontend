import { createContext, useContext, useState, useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setIsAdmin(currentUser.email === "admin@adobe.com");
        localStorage.setItem("adobeUser", JSON.stringify(currentUser));
      } else {
        setUser(null);
        setIsAdmin(false);
        localStorage.removeItem("adobeUser");
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const logout = async () => {
    await signOut(auth);
    setUser(null);
    setIsAdmin(false);
    localStorage.removeItem("adobeUser");
  };

  return (
    <AuthContext.Provider value={{ user, isAdmin, logout, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

// Custom hook
export const useUser = () => useContext(AuthContext);
