import { useState } from "react";
import "./Login.css";

const Login = () => {
  const [form, setForm] = useState("Sign Up");
  return (
    <div className="login">
      <img
        src="/logo.png"
        alt="logo"
        height={200}
        width={200}
        className="logo"
      />
      <form className="login-form">
        <h2>{form}</h2>
        {form === "Sign Up" ? (
          <input
            type="text"
            placeholder="Username"
            className="form-input"
            required
          />
        ) : null}
        <input
          type="email"
          placeholder="Email"
          className="form-input"
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="form-input"
          required
        />
        <button type="submit">
          {form === "Sign Up" ? "Create Account" : "Login"}
        </button>
        <div className="login-term">
          <input type="checkbox" />
          <p>By signing up, you agree to our terms and privacy policy</p>
        </div>
        <div className="login-forgot">
          {form === "Sign Up" ? (
            <p className="login-toggle">
              Already have an account?{" "}
              <span onClick={() => setForm("Login")}>login</span>
            </p>
          ) : (
            <p className="login-toggle">
              Create account?{" "}
              <span onClick={() => setForm("Sign Up")}>click here</span>
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export { Login };
