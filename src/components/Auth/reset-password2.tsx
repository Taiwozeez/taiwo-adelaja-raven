import React, { useState } from "react";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState<{ email?: string }>({});

  const validateForm = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors: { email?: string } = {};

    if (!email) {
      validationErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      validationErrors.email = "Invalid email format";
    }

    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      console.log("Password reset link sent to:", email);
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen w-full">
      {/* Left Side - Image (Hidden on Mobile) */}
      <div className="w-1/2 h-full hidden md:block">
        <img
          src="/oversabinurse/signin.png"
          alt="Stethoscope"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Side - Reset Password Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-6 md:p-8">
        <div className="w-full max-w-lg">
          <h2 className="text-2xl font-bold mb-4">Reset Password</h2>
          <p className="text-sm mb-6 text-gray-600">
            Forgot your password? No worries, submit your email, and a password reset link will be sent to you.
          </p>

          <form onSubmit={validateForm}>
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Example@gmail.com"
                className="w-full px-4 py-3 border rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            <button
              type="submit"
              className="w-full bg-[#E32B8D] text-white py-3 rounded-3xl hover:bg-pink-600 transition duration-200"
            >
              Continue
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
