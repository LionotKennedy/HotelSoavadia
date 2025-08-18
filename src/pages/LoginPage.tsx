// src/pages/LoginPage.tsx
import { useNavigate } from "react-router-dom";

import { LoginForm } from "../components/auth/LoginForm";

export const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = (credentials: { username: string; password: string; role: string }) => {
    // Ici tu peux stocker l'utilisateur dans un contexte ou localStorage
    localStorage.setItem("user", JSON.stringify(credentials));
    navigate("/dashboard");
  };

  return <LoginForm onLogin={handleLogin} />;
};