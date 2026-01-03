import { useState } from "react";
import { useFirebaseAuthStore } from "../store/useFirebaseAuthStore";

const ChangePassword = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const { changePassword, loading, error, message } =
    useFirebaseAuthStore();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPassword.length < 6) return;
    changePassword(currentPassword, newPassword);
  };

  return (
    <div className="flex justify-center mt-10 text-white">
      <form className="w-96 space-y-4 bg-gray-900 p-6 rounded">
        <h1 className="text-xl font-semibold">Change Password</h1>

        <input
          type="password"
          placeholder="Current password"
          className="w-full p-2 rounded bg-black border border-gray-700"
          onChange={(e) => setCurrentPassword(e.target.value)}
        />

        <input
          type="password"
          placeholder="New password"
          className="w-full p-2 rounded bg-black border border-gray-700"
          onChange={(e) => setNewPassword(e.target.value)}
        />

        <button
          onClick={handleSubmit}
          disabled={loading}
          className="w-full bg-green-600 py-2 rounded cursor-pointer"
        >
          {loading ? "Updating..." : "Update Password"}
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

export default ChangePassword;
