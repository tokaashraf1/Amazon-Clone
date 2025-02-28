import logo from "../assets/logo.png";
import arrow from "../assets/arrow.png";
import { AuthContext } from "../contexts/AuthContext";
import { validateRegistration } from "../utils/validation";
import { Link, useNavigate } from "react-router-dom";
import "../style.css";
import { useContext, useState } from "react";
import toast from "react-hot-toast";
function Register() {
  const { authState, register } = useContext(AuthContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors((prevErrors) => ({ ...prevErrors, [e.target.name]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateRegistration(
      formData.name,
      formData.email,
      formData.password,
      authState.users
    );

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const result = register(formData.name, formData.email, formData.password);
    if (result.success) {
      toast.success("user registered successfully!");
      navigate("/login");
      setFormData({ name: "", email: "", password: "" });
      navigate("/");
    } else {
      setErrors({ email: result.message });
    }
  };
  return (
    <div className="flex items-center flex-col mt-[8%]  sm:mt-[3%] ">
      <div>
        <img src={logo} alt="logo" className="max-w-full " />
      </div>
      <div className="form-container mt-10  sm:w-[60%] md:w-[45%] lg:w-[30%] border rounded-md py-8">
        <form className="w-[78%] mx-auto" onSubmit={handleSubmit}>
          <h1 className="text-xl font-semibold  lg:text-2xl">Create Account</h1>

          <div className="mt-3">
            <div>
              <label className="font-semibold">Your name</label>
              <input
                type="text"
                name="name"
                className="border border-gray-400 block w-full rounded-md h-[33px]"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && (
                <p className="text-sm text-red-500">{errors.name}</p>
              )}
            </div>
            <div className="mt-3">
              <label className="font-semibold">Email</label>
              <input
                type="email"
                name="email"
                className="border border-gray-400 block w-full rounded-md h-[33px]"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && (
                <p className="text-sm text-red-500">{errors.email}</p>
              )}
            </div>
            <div className="mt-3">
              <label className="font-semibold">Password</label>
              <input
                type="password"
                name="password"
                className="border border-gray-400 block w-full rounded-md h-[33px]"
                value={formData.password}
                onChange={handleChange}
              />
              {errors.password && (
                <p className="text-sm text-red-500">{errors.password}</p>
              )}
            </div>
            <button className="bg-[#FFD814] w-full rounded-md py-1  mt-4">
              Sign Up
            </button>
            <hr className="mt-4" />
            <p className="mt-4 font-semibold">Buying for work?</p>
            <Link to="/register" className="text-[#2A8FD7]">
              Create a free business account
            </Link>
            <hr className="mt-4" />
            <p className="mt-4">
              Already have an account?{" "}
              <span className="text-[#2A8FD7]">
                {" "}
                <Link to="/login">
                  Sign in <img src={arrow} className="inline" />{" "}
                </Link>
              </span>
            </p>
            <p className="pb-1 mt-3">
              By creating an account or logging in , you agree to Amazon’s{" "}
              <span className="text-[#2A8FD7] underline">
                {" "}
                <a href="">Conditions of Use </a>
              </span>{" "}
              and{" "}
              <span className="text-[#2A8FD7] underline">
                <a href="">Privacy Notice. </a>
              </span>
            </p>
          </div>
        </form>
      </div>
      <hr className="w-[95%] h-[2px] mt-10" />
      <ul className="flex justify-center mt-10 gap-11">
        <li className="text-[#2A8FD7] ">
          <a href="">Conditions of Use</a>
        </li>
        <li className="text-[#2A8FD7] ">
          <a href="">Privacy Notice</a>
        </li>
        <li className="text-[#2A8FD7] ">
          <a href="">Help</a>
        </li>
      </ul>
      <p className="pb-10 mt-3 mr-4">
        © 1996-2024, Amazon.com, Inc. or its affiliates
      </p>
    </div>
  );
}

export default Register;
