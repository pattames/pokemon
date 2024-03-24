import { useState } from "react";

export default function Signup({ setUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    const response = await fetch("http://localhost:8080/users/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(data.error);
    }

    if (response.ok) {
      console.log("RESPONSE WAS OK");
      localStorage.setItem("user", JSON.stringify(data));
      setUser(data);
      setIsLoading(false);
      setUsername("");
      setPassword("");
      alert("User created. Please log in");
    }
  };

  return (
    <form className="signup" onSubmit={handleSubmit}>
      <h3>Signup</h3>
      <label>username:</label>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <label>password:</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button>Sign in</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
}
