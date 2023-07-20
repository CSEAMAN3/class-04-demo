import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
  });

  function handleFormData(event) {
    // console.log("Form changed");
    setFormData({ ...formData, [event.target.name]: event.target.value });
    console.log(formData);
  }

  function handleForm(event) {
    event.preventDefault();
    console.log(formData);
  }

  return (
    <div className="App">
      <Header />
      <form onSubmit={handleForm}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" onChange={handleFormData} />
        <label htmlFor="dob">Date of birth</label>
        <input type="date" id="dob" name="dob" onChange={handleFormData} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
