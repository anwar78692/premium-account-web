import React from "react";
import Login from "../components/LoginPage/Login";
import RightPage from "../components/LoginPage/RightPage";

function LoginPage() {
  return (
    <div className="min-h-screen w-full grid grid-cols-1 lg:grid-cols-2">
      <div className="lg:col-span-1  lg:mt-[6rem] lg:pl-[8rem]">
        <Login />
      </div>
      <div className="lg:col-span-1 lg:relative hidden lg:block">
        <RightPage />
      </div>
    </div>
  );
}

export default LoginPage;
