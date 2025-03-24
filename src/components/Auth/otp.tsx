import React, { useState } from "react";

const OtpVerification = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [resendTimer, setResendTimer] = useState(30);
  const [isResending, setIsResending] = useState(false);

  const handleChange = (index: number, value: string) => {
    if (/^[0-9]?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Move focus to the next input
      if (value !== "" && index < otp.length - 1) {
        document.getElementById(`otp-input-${index + 1}`)?.focus();
      }
    }
  };

  const handleResend = () => {
    setIsResending(true);
    setResendTimer(30);
    setTimeout(() => {
      setIsResending(false);
    }, 30000);
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

      {/* Right Side - OTP Verification */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-6 md:p-8">
        <div className="w-full max-w-lg">
          {/* Left-aligned text */}
          <h2 className="text-2xl font-bold mb-2 text-left">Reset Password</h2>
          <p className="text-sm mb-6 text-gray-600 text-left">
            We sent an OTP to your Email Address. Please enter your OTP code to reset your password.
          </p>

          <div className="flex justify-center space-x-2 mb-4">
            {otp.map((digit, index) => (
              <input
                key={index}
                id={`otp-input-${index}`}
                type="text"
                value={digit}
                maxLength={1}
                onChange={(e) => handleChange(index, e.target.value)}
                className="w-12 h-12 text-center text-xl border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-600"
              />
            ))}
          </div>

          <button
            className="w-full bg-[#E32B8D] text-white py-3 rounded-3xl hover:bg-pink-600 transition duration-200"
          >
            Continue
          </button>

          <p className="text-sm text-gray-600 mt-4 text-center">
            Didn't receive the code?{" "}
            {resendTimer > 0 ? (
              <span className="text-pink-600">Re-send OTP Code in {resendTimer}s</span>
            ) : (
              <button
                onClick={handleResend}
                disabled={isResending}
                className="text-pink-600 font-semibold"
              >
                Resend OTP
              </button>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default OtpVerification;
