import React from "react";

const Login = (props) => {
  return (
    <div>
      <h1>You need to Sign In</h1>
      <form>
        <label for="login">Login:</label>
        <input type="text" name="login"></input>
        <label for="password">Password:</label>
        <input type="text" name="password"></input>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Login;
