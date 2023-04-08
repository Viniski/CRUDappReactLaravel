import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "../axios";

export function EditPage() {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({ name: "przykłaowe imię", number: 34 });
  const { id } = useParams();

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = () => {
    axios.get("/users/" + id + "/edit").then((res) => {
      setInputs({
        name: res.data.name,
        number: res.data.number,
      });
    });
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const submitForm = () => {
    axios.put("/users/" + id, inputs).then((res) => {
      navigate("/");
    });
  };

  return (
    <div>
      <h2>Edit User</h2>
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
              value={inputs.number || ""}
              onChange={handleChange}
            />

            <button type="button" onClick={submitForm}>
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
