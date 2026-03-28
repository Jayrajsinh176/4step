import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../api/axios";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    mobile: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};

    if (!formData.member_id.trim()) {
      newErrors.member_id = "Member ID is required";
    }

    if (!formData.password || formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    try {
      setLoading(true);
      const res = await api.post("/login", formData);

      alert("Login successful ✅");

      localStorage.setItem("isAuth", "true");
      localStorage.setItem("user", JSON.stringify(res.data.data));

      navigate("/home");

    } catch (error) {
      console.log(error.response?.data);
      alert("Invalid Member ID or Password ❌");
    } finally {
      setLoading(false);
    }
  };
  console.log(formData);


  return (
    <div className="min-h-screen bg-[#f5e6d3] flex items-center justify-center p-3 sm:p-4 md:p-8">
      <div className="bg-white w-full max-w-md rounded-xl shadow-xl overflow-hidden">

        <div className="bg-[#8b5e3c] text-white text-center py-4 font-semibold text-xl sm:text-2xl">
          User Login
        </div>

        <div className="p-4 sm:p-6 space-y-4 sm:space-y-5">
          <form className="space-y-4" onSubmit={handleSubmit}>

            <input
              type="text"
              placeholder="Member ID"
              value={formData.member_id}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  member_id: e.target.value
                })

              }
              className="w-full border px-4 py-3 rounded-lg focus:ring-2 focus:ring-[#8b5e3c] text-sm"
            />
            {errors.member_id && <p className="text-red-500 text-xs">{errors.member_id}</p>}

            <input
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              className="w-full border px-4 py-3 rounded-lg focus:ring-2 focus:ring-[#8b5e3c] text-sm"
            />
            {errors.password && <p className="text-red-500 text-xs">{errors.password}</p>}

            <button
              type="submit"
              disabled={loading}
              className={`w-full text-white py-3 rounded-lg text-sm ${loading ? "bg-[#8b5e3c] cursor-not-allowed" : "bg-[#8b5e3c] hover:bg-[#6f472d]"}`}
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>

          <p className="text-center text-sm font-semibold text-gray-500">
            New here?{" "}
            <Link to="/signup" className="text-[#8b5e3c] font-semibold">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;