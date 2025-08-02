import { useUser } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const { login } = useUser();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // You can replace this with real auth logic
    const dummyAdmin = {
      name: "Admin",
      email: "admin@site.com",
      role: "admin", // 💡 required for RequireAdmin
    };

    login(dummyAdmin);
    navigate("/admin"); // Or wherever you want to redirect after login
  };

  return (
    <form onSubmit={handleLogin} className="space-y-4">
      <h2 className="text-xl font-bold">Admin Login</h2>
      <button
        type="submit"
        className="bg-black text-white py-2 px-4 rounded hover:bg-gray-800"
      >
        Login as Admin
      </button>
    </form>
  );
};

export default SignIn;
