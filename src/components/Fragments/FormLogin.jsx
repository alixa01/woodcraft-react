import { useState } from "react";
import Button from "../Elements/Button";
import InputForm from "../Elements/Input";
import { useNavigate } from "react-router-dom";

const FormLogin = () => {
  const [formData, setFormData] = useState({
    username: "admin",
    password: "admin",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(`Input changed: ${name} = ${value}`);
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { username, password } = formData;
    console.log("Submitted username:", username);
    console.log("Submitted password:", password);

    if (username === "admin" && password === "admin") {
      setError("");
      navigate("/home");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputForm
        label="Username"
        type="text"
        placeholder="John Doe"
        name="username"
        value={formData.username}
        onChange={handleInputChange}
      />
      <InputForm
        label="Password"
        type="password"
        placeholder="********"
        name="password"
        value={formData.password}
        onChange={handleInputChange}
      />
      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
      <Button type="submit" classname="bg-secondary">
        Sign In
      </Button>
    </form>
  );
};

export default FormLogin;
