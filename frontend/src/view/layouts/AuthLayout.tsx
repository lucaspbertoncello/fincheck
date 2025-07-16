import { Outlet } from "react-router-dom";

import authImage from "../../assets/images/auth-image.png";
import logo from "../../assets/images/logo.png";
import grayLogo from "../../assets/images/gray-logo.png";

export function AuthLayout() {
  return (
    <div className="flex w-full h-full px-8 lg:px-0">
      {/* form */}
      <div className="w-full lg:w-1/2 h-full flex items-center justify-center flex-col gap-16">
        <img src={grayLogo} alt="finCheck logo" />

        <div className="w-full max-w-[440px] flex items-center justify-center">
          <Outlet />
        </div>
      </div>

      {/* auth image */}
      <div className="w-1/2 h-full p-8 lg:flex items-center justify-center flex-col hidden">
        <img
          src={authImage}
          alt=""
          className="max-w-[656px] max-h-[960px] w-full h-full object-cover select-none rounded-[32px]"
        />

        <div className="max-w-[656px] bg-white p-10 absolute rounded-b-[32px] bottom-8">
          <img src={logo} alt="Fincheck Logo" className="mb-4 select-none" />

          <p className="text-gray-700 font-medium text-xl">
            Gerencie suas finanças pessoais de uma forma simples com o fincheck,
            e o melhor, totalmente de graça!
          </p>
        </div>
      </div>
    </div>
  );
}
