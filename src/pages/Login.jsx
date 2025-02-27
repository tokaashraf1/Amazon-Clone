import logo from "../assets/logo.png";
import { AuthContext } from "../contexts/AuthContext";
import { validateLogin } from "../utils/validation";
import loginArrow from "../assets/loginArrow.png";
import { useNavigate } from "react-router-dom";
import "../style.css";
import { useContext, useState } from "react";
import toast from "react-hot-toast";

function Login() {
  const { login } = useContext(AuthContext);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  // const [message, setMessage] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors((prevErrors) => ({ ...prevErrors, [e.target.name]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateLogin(formData.email, formData.password);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const result = login(formData.email, formData.password);
    if (result.success) {
      toast.success("user logged in successfully!");
      navigate("/");
      setFormData({ email: "", password: "" });
      setErrors({}); // Clear errors on success
    } else {
      if (result.message === "Incorrect password.") {
        setErrors({ password: result.message }); // Show error under password field
      } else {
        setErrors({ email: result.message }); // Show error under email field
      }
    }
  };

  return (
    <div className="flex items-center flex-col mt-[8%] sm:mt-[3%]">
      <div>
        <img src={logo} alt="logo" className="max-w-full" />
      </div>
      <div className="form-container mt-10 sm:w-[60%] md:w-[45%] lg:w-[30%] border rounded-md py-8">
        <form className="w-[78%] mx-auto" onSubmit={handleSubmit}>
          <h1 className="text-xl font-semibold lg:text-2xl">Sign in</h1>

          <div className="mt-3">
            <div>
              <label className="font-semibold">Email</label>
              <input
                type="text"
                name="email"
                className="border border-gray-400 outline-none block w-full rounded-md h-[33px]"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && (
                <p className="text-sm text-red-500">{errors.email}</p>
              )}
            </div>
            <div className="mt-2">
              <label className="font-semibold">Password</label>
              <input
                type="password"
                name="password"
                className="border border-gray-400 outline-none block w-full rounded-md h-[33px]"
                value={formData.password}
                onChange={handleChange}
              />
              {errors.password && (
                <p className="text-sm text-red-500">{errors.password}</p>
              )}
            </div>

            {/* Display the login error message here */}

            <button
              type="submit"
              className="bg-[#FFD814] w-full rounded-md py-1 mt-4"
            >
              Continue
            </button>
            <p className="pb-1 mt-3">
              By continuing, you agree to Amazon’s
              <span className="text-[#2A8FD7] underline">
                <a href="">Conditions of Use </a>
              </span>
              and
              <span className="text-[#2A8FD7] underline">
                <a href="">Privacy Notice.</a>
              </span>
            </p>
            <p className="mt-5">
              <img src={loginArrow} className="inline" />{" "}
              <span className="text-[#2A8FD7] underline">Need help?</span>
            </p>
            <hr className="mt-8" />
            <p className="mt-5 font-semibold">Buying for work?</p>
            <p className="text-[#2A8FD7] mt-2">Shop on Amazon Business</p>
          </div>
        </form>
      </div>
      <div className="flex items-center form-container sm:w-[60%] md:w-[45%] lg:w-[30%] my-4">
        <div className="flex-grow border-t border-gray-300"></div>
        <span className="mx-2 text-gray-500">New to Amazon?</span>
        <div className="flex-grow border-t border-gray-300"></div>
      </div>
      <button
        className="form-container sm:w-[60%] md:w-[45%] lg:w-[30%] border border-black rounded-md"
        onClick={() => navigate("/register")}
      >
        Create your Amazon account
      </button>
      <hr className="w-[95%] h-[2px] mt-10" />
      <ul className="flex justify-center mt-10 gap-11">
        <li className="text-[#2A8FD7]">
          <a href="">Conditions of Use</a>
        </li>
        <li className="text-[#2A8FD7]">
          <a href="">Privacy Notice</a>
        </li>
        <li className="text-[#2A8FD7]">
          <a href="">Help</a>
        </li>
      </ul>
      <p className="pb-10 mt-3 mr-4">
        © 1996-2024, Amazon.com, Inc. or its affiliates
      </p>
    </div>
  );
}

export default Login;
