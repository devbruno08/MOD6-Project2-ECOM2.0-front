import { useState } from "react";
import { LoginSection, LogoSection } from "./styles";
import { SiCockroachlabs } from "react-icons/si";
import { useNavigate } from "react-router-dom";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
  };

  const navigate = useNavigate();

  return (
    <>
      <LogoSection>
        <SiCockroachlabs size={40} />
        <h1>Cheap Store</h1>
      </LogoSection>
      <LoginSection>
        <input
          type="email"
          name="email"
          placeholder="Your Email:"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          type="password"
          name="password"
          placeholder="Your Password:"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button
          onClick={() => navigate("/home")}
          type="submit"
          onSubmit={handleSubmit}
        >
          OK
        </button>
      </LoginSection>
    </>
  );
}
