import { LoginForm } from "@/components/Auth/LoginForm";
import React from "react";

const page = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="px-24 min-h-[500px] bg-white rounded-xl shadow-xl shadow-slate-300 flex justify-center items-center">
        <LoginForm />
      </div>
    </div>
  );
};

export default page;
