import React, { useEffect } from "react";
import { useAuth, useUser } from "@clerk/clerk-react";
import axios from "axios";
import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";

const ClerkLogin = ({ close }) => {
  const { getToken } = useAuth();
  const { isSignedIn } = useUser();

  //  AUTO CHECK ON LOAD
  useEffect(() => {
    if (isSignedIn) {
      toast.info("User already exists / already logged in");
    }
  }, [isSignedIn]);

  const handleGoogleLogin = async () => {
    try {
      // BLOCK IF ALREADY LOGGED IN
      if (isSignedIn) {
        toast.info("User already exists / already logged in");
        return;
      }

      const token = await getToken();

      if (!token) {
        toast.error("Authentication failed");
        return;
      }

      const res = await axios.post(
        "https://capstone-project-jmh2.onrender.com/api/clerk",
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
      toast.error(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="mt-4">

      <button
        onClick={handleGoogleLogin}
        className="w-full flex items-center justify-center gap-3 
        py-2 rounded bg-white text-black font-medium 
        hover:scale-105 transition"
      >
        <FcGoogle className="text-xl" />
        Continue with Google
      </button>

    </div>
  );
};

export default ClerkLogin;