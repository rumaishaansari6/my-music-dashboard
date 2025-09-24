import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Navbar from "../components/Navbar";

export default function Login({ theme, setTheme }) {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(()=>{
    const user = localStorage.getItem("user");
    if(user) router.push("/dashboard");
  },[]);

  const handleLogin = (e) => {
    e.preventDefault();
    if(username==="admin" && password==="admin"){
      localStorage.setItem("user", username);
      router.push("/dashboard");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className={`login-page ${theme}`}>
      <Navbar theme={theme} setTheme={setTheme} />
      <div className="login-card">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <input 
            type="text" 
            placeholder="Username" 
            value={username} 
            onChange={e=>setUsername(e.target.value)} 
            required
          />
          <input 
            type="password" 
            placeholder="Password" 
            value={password} 
            onChange={e=>setPassword(e.target.value)} 
            required
          />
          <button type="submit" className="primary">Login</button>
        </form>
        
      </div>
    </div>
  );
}