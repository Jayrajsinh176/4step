



import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  // 🔹 Generate Unique Member ID
  const generateMemberId = () => {
    const random = Math.floor(1000 + Math.random() * 9000);
    return "4STEP" + random;
  };

  // 🔹 Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 🔹 Validation
  const validate = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Full name is required";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter valid email address";
    }

    if (!formData.mobile) {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^[6-9]\d{9}$/.test(formData.mobile)) {
      newErrors.mobile = "Enter valid 10 digit mobile number";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Confirm your password";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // 🔹 Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    const memberId = generateMemberId();

    alert(`Signup Successful 🎉\nYour Member ID: ${memberId}`);

    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-[#f5e6d3] flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-md rounded-xl shadow-xl overflow-hidden">

        <div className="bg-[#8b5e3c] text-white text-center py-4 font-semibold text-2xl">
          Create Account
        </div>

        <div className="p-6 space-y-5">
          <form onSubmit={handleSubmit} className="space-y-4">

            {/* Full Name */}
            <div>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border px-4 py-3 rounded-lg focus:ring-2 focus:ring-[#8b5e3c]"
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">{errors.name}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full border px-4 py-3 rounded-lg focus:ring-2 focus:ring-[#8b5e3c]"
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>

            {/* Mobile */}
            <div>
              <input
                type="text"
                name="mobile"
                placeholder="Mobile Number"
                value={formData.mobile}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, "").slice(0, 10);
                  setFormData({ ...formData, mobile: value });
                }}
                className="w-full border px-4 py-3 rounded-lg focus:ring-2 focus:ring-[#8b5e3c]"
              />
              {errors.mobile && (
                <p className="text-red-500 text-xs mt-1">{errors.mobile}</p>
              )}
            </div>

            {/* Password */}
            <div>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full border px-4 py-3 rounded-lg focus:ring-2 focus:ring-[#8b5e3c]"
              />
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">{errors.password}</p>
              )}
            </div>

            {/* Confirm Password */}
            <div>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full border px-4 py-3 rounded-lg focus:ring-2 focus:ring-[#8b5e3c]"
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.confirmPassword}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-[#8b5e3c] text-white py-3 rounded-lg hover:bg-[#6f472d] transition font-semibold"
            >
              SIGN UP
            </button>
          </form>

          <p className="text-center text-sm text-gray-600">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-[#8b5e3c] font-semibold hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;

// Login Page
// import React, { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";

// function Login() {
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     mobile: "",
//     password: "",
//   });

//   const [errors, setErrors] = useState({});

//   const demoUsers = [
//     { mobile: "9876543210", password: "4step123" },
//     { mobile: "8866217613", password: "Test@123" },
//   ];

//   const validate = () => {
//     let newErrors = {};

//     if (!/^[6-9]\d{9}$/.test(formData.mobile)) {
//       newErrors.mobile = "Enter valid 10 digit mobile number";
//     }

//     if (formData.password.length < 6) {
//       newErrors.password = "Password must be at least 6 characters";
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!validate()) return;

//     const user = demoUsers.find(
//       (u) =>
//         u.mobile === formData.mobile &&
//         u.password === formData.password
//     );

//     if (user) {
//       localStorage.setItem("isAuth", "true");
//       navigate("/home");
//     } else {
//       alert("Invalid mobile number or password ❌");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-[#f5e6d3] flex items-center justify-center p-4">
//       <div className="bg-white w-full max-w-md rounded-xl shadow-xl overflow-hidden">

//         <div className="bg-[#8b5e3c] text-white text-center py-4 font-semibold text-2xl">
//           User Login
//         </div>

//         <div className="p-6 space-y-5">
//           <form className="space-y-4" onSubmit={handleSubmit}>

//             <input
//               type="text"
//               placeholder="Mobile Number"
//               value={formData.mobile}
//               onChange={(e) =>
//                 setFormData({
//                   ...formData,
//                   mobile: e.target.value.replace(/\D/g, "").slice(0, 10),
//                 })
//               }
//               className="w-full border px-4 py-3 rounded-lg focus:ring-2 focus:ring-[#8b5e3c]"
//             />
//             {errors.mobile && <p className="text-red-500 text-xs">{errors.mobile}</p>}

//             <input
//               type="password"
//               placeholder="Password"
//               value={formData.password}
//               onChange={(e) =>
//                 setFormData({ ...formData, password: e.target.value })
//               }
//               className="w-full border px-4 py-3 rounded-lg focus:ring-2 focus:ring-[#8b5e3c]"
//             />
//             {errors.password && <p className="text-red-500 text-xs">{errors.password}</p>}

//             <button
//               type="submit"
//               className="w-full bg-[#8b5e3c] text-white py-3 rounded-lg hover:bg-[#6f472d]"
//             >
//               LOGIN
//             </button>
//           </form>

//           <p className="text-center text-sm font-semibold text-gray-500">
//             New here?{" "}
//             <Link to="/signup" className="text-[#8b5e3c] font-semibold">
//               Sign Up
//             </Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;


// Header page with profile dropdown
// import React, { useState, useEffect, useRef } from 'react'
// import { CgProfile } from "react-icons/cg";
// import { RiShoppingBagLine } from "react-icons/ri";
// import { FaSearch } from "react-icons/fa";
// import { Link } from 'react-router-dom';


// function Header() {

//     const [open, setOpen] = useState(false);
//     const dropdownRef = useRef(null);

//     useEffect(() => {
//         function handleClickOutside(event) {
//             if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//                 setOpen(false);
//             }
//         }

//         document.addEventListener("mousedown", handleClickOutside);
//         return () => {
//             document.removeEventListener("mousedown", handleClickOutside);
//         };
//     }, []);

//     return (
//         <header className="sticky top-0 z-50 w-full border-b border-gray-300 bg-white">
//             <div className="w-full mx-auto px-6">

//                 <div className="hidden md:flex justify-end gap-2 text-sm text-gray-700 py-2 font-medium">
//                     <a href="#" className="hover:text-blue-600">Track Order</a>
//                     <span>|</span>
//                     <a href="#" className="hover:text-blue-600">Help Centre</a>
//                 </div>

//                 <div className="flex items-center justify-between h-16">

//                     <img
//                         src="./images/4steplogo.png"
//                         alt="4step"
//                         className="h-15 w-auto"
//                     />

//                     <div className="text-sm font-medium text-gray-700 mr-2">
//                         <p>Welcome</p>
//                         <Link to="/" href="#" className=" hover:text-blue-600">Sign In </Link>
//                         <span>/</span>
//                         <a href="#" className=" hover:text-blue-600 ml-1">Register</a>
//                     </div>


//                     <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-700">
//                         <Link to="/home" className="hover:text-blue-600">Home</Link>
//                         <a href="#" className="hover:text-blue-600">About</a>
//                         <a href="#" className="hover:text-blue-600">Opportunity</a>
//                         <Link to="/allproduct" className="hover:text-blue-600">All Products</Link>
//                         <Link to="/product" href="#" className="hover:text-blue-600">Products</Link>
//                         <Link to="/helpform" className="hover:text-blue-600">Contact</Link>
//                     </nav>

//                     <div className="hidden md:flex items-center border border-gray-300  bg-gray-100  rounded-lg px-3 py-1 gap-2">
//                         <button
//                             className="text-sm font-semibold hover:text-blue-600"
//                         >
//                             <FaSearch />
//                         </button>
//                         <input
//                             type="text"
//                             placeholder="Search..."
//                             className="outline-none text-sm px-2 py-1 bg-transparent"
//                         />
//                     </div>


//                     <div className="hidden md:flex">
//                         <Link to="/checkout"
//                             className="bg-gray-100 p-2 rounded-lg text-xl text-gray-700 hover:text-blue-600">

//                             <RiShoppingBagLine />
//                         </Link>
//                         <div className="relative" ref={dropdownRef}>
//                             <button
//                                 onClick={() => setOpen(!open)}
//                                 className="bg-gray-100 p-2 ml-2 rounded-lg text-xl text-gray-700 hover:text-blue-600"
//                             >
//                                 <CgProfile />
//                             </button>

//                             {open && (
//                                 <div className="absolute right-0 mt-3 w-48 bg-white border rounded-lg shadow-lg py-2 z-50">
//                                     <a
//                                         href="#"
//                                         className="block px-4 py-2 text-sm hover:bg-gray-100"
//                                     >
//                                         My Profile
//                                     </a>
//                                     <a
//                                         href="#"
//                                         className="block px-4 py-2 text-sm hover:bg-gray-100"
//                                     >
//                                         Orders
//                                     </a>
//                                     <a
//                                         href="#"
//                                         className="block px-4 py-2 text-sm hover:bg-gray-100"
//                                     >
//                                         Wishlist
//                                     </a>
//                                     <hr className="my-2" />
//                                     <Link
//                                         to="/"
//                                         className="block px-4 py-2 text-sm text-red-500 hover:bg-gray-100"
//                                     >
//                                         Logout
//                                     </Link>
//                                 </div>
//                             )}
//                         </div>

//                     </div>
//                 </div>

//             </div>
//         </header>
//     );
// }

// export default Header;
