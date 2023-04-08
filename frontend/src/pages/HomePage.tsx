import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../axios";

export function HomePage() {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({ name: "przykłaowe imię", number: 34 });
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const submitForm = () => {
    axios.post("/users", inputs).then((res) => {
      navigate("/");
    });
  };
  return (
    <div>
      <h2>New User</h2>
      <div>
        <div>
          <div>
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={inputs.name || ""}
              onChange={handleChange}
            />

            <label>Email</label>
            <input
              type="email"
              name="email"
              value={inputs.name || ""}
              onChange={handleChange}
            />

            <label>Password</label>
            <input
              type="password"
              name="password"
              value={inputs.number || ""}
              onChange={handleChange}
            />

            <button type="button" onClick={submitForm}>
              Create
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
