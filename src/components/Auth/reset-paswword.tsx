import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const ResetPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState<{ password?: string; confirmPassword?: string }>({});

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const validateForm = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors: { password?: string; confirmPassword?: string } = {};

    if (!password) {
      validationErrors.password = "Password is required";
    } else if (password.length < 6) {
      validationErrors.password = "Password must be at least 6 characters";
    }

    if (!confirmPassword) {
      validationErrors.confirmPassword = "Please confirm your password";
    } else if (password !== confirmPassword) {
      validationErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      console.log("Password Reset Successful", { password });
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
            We're setting up a new password. Remember to keep it in a safe place for easy recovery.
          </p>

          <form onSubmit={validateForm}>
            <div className="mb-4 relative">
              <label className="block text-gray-700">New Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full px-4 py-3 border rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-3 flex items-center"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
            </div>

            <div className="mb-4 relative">
              <label className="block text-gray-700">Confirm Password</label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full px-4 py-3 border rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <button
                  type="button"
                  onClick={toggleConfirmPasswordVisibility}
                  className="absolute inset-y-0 right-3 flex items-center"
                >
                  {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>
              )}
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
