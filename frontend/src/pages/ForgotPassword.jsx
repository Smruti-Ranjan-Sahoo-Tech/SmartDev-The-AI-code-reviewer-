import { useState } from "react";
import { useFirebaseAuthStore } from "../store/useFirebaseAuthStore";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const { forgotPasswordByLink, loading, error, message } =
    useFirebaseAuthStore();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    forgotPasswordByLink(email);
  };

  return (
    <div className="flex h-screen items-center justify-center bg-black text-white">
      <form
        onSubmit={handleSubmit}
        className="w-96 space-y-4 bg-gray-900 p-6 rounded"
      >
        <h1 className="text-xl font-semibold">Forgot Password</h1>

        <input
          type="email"
          placeholder="Enter your email"
          className="w-full p-2 rounded bg-black border border-gray-700"
          onChange={(e) => setEmail(e.target.value)}
        />

        <button
          disabled={loading}
          className="w-full bg-blue-600 py-2 rounded  cursor-pointer"
        >
          {loading ? "Sending..." : "Send Reset Link"}
        </button>

        {message && (
          <p className="text-sm text-green-400">{message}</p>
        )}
        {error && (
          <p className="text-sm text-red-400">{error}</p>
        )}
      </form>
    </div>
  );
};

export default ForgotPassword;
