import React from 'react';

const Signin = () => {
  return (
    <div>
      <h2>Sign In</h2>
      <form>
        {/* Add your form fields here */}
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default Signin;
