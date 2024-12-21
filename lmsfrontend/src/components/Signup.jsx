// src/components/Signin.js
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  // State hooks for each form field
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const [failure, setFailure] = useState(null);

  // Handle form submission
  const submit = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);
    setFailure(null);

    // Use axios directly to post the form data to the API
    axios
      .post("https://modcom2.pythonanywhere.com/api/signup", {
        username: username,
        email: email,
        password: password,
        phone: phone,
      })
      .then(function (response) {
        // Handle successful login response
        console.log(response.data.success);
        setLoading(false);
        setSuccess(response.data.success);

        // Clear form fields
        setUsername("");
        setEmail("");
        setPassword("");
        setPhone("");
      })
      .catch(function (error) {
        // Handle error in the API call
        console.log(error.message);
        setLoading(false);
        setFailure(error.message);
      });
  };

  return (
    <div className="form-container">
      {loading && <div>Please Wait...</div>}
      {success && <div>{success}</div>}
      {failure && <div>{failure}</div>}
      
      <form onSubmit={submit}>
        <h1>Sign In</h1>
        <div>
          <input
            type="text"
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <br />
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <br />
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <br />
          <input
            type="text"
            placeholder="Enter Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          <br />
          <button type="submit">Sign In</button>
        </div>
      </form>
      
      <Link to="/signup">Don't have an account? Sign Up</Link>
    </div>
  );
};

export default Signup;
