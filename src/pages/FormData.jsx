import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const FormData = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const handlaChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  const submitForm = (event) => {
    event.preventDefault();
    navigate("/result", { state: { formData } });
  };
  return (
    <>
      <h1>Fill in information</h1>
      <form onSubmit={submitForm}>
        <p>
          <label>Name:</label>
          <input type="text" name="name" id="name" onChange={handlaChange} />
        </p>
        <p>
          <label>E-mail:</label>
          <input type="text" name="email" onChange={handlaChange}/>
        </p>
        <p>
          <label>Jobs:</label>
          <input type="text" name="job" id="job" onChange={handlaChange}/>
        </p>
        <p>
          <label>Salary</label>
          <input type="text" name="salary" id="salary" onChange={handlaChange}/>
        </p>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};
export default FormData;
