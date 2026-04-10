import React from "react";
import { useAuth, useUser } from "@clerk/clerk-react";
import axios from "axios";
import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";

const ClerkLogin = ({ close }) => {
  const { getToken } = useAuth();
  const { isSignedIn } = useUser();

  const handleGoogleLogin = async () => {
    try {
      if (isSignedIn) {
        toast.info("User already login");
        return;
      }

      const token = await getToken();

      const res = await axios.post(
        "https://capstone-project-x3g1.onrender.com/api/clerk",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (res.data.success) {
        toast.success("Login Successful");
        close && close();
      } else {
        toast.error(res.data.message);
      }
    } catch (err) {
      toast.error(
        err.response?.data?.message || "Login failed"
      );
    }
  };

  return (
    <div className="mt-4">

      {/* GOOGLE login BUTTON */}
      <button
        onClick={handleGoogleLogin}
        className="w-full flex items-center justify-center gap-3 
        py-2 rounded bg-white text-black font-medium 
        hover:scale-105 transition"
      >
        <FcGoogle  className="text-red-500 text-lg" />
        Continue with Google
      </button>

    </div>
  );
};

export default ClerkLogin;