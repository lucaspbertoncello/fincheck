import logo from "../../assets/images/white-logo.png";
import { Spinner } from "./Spinner";

import { Transition } from "@headlessui/react";

export function PageLoader({ isLoading }: { isLoading: boolean }) {
  return (
    <Transition
      show={isLoading}
      enter="transition-opacity duration-75"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-150"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div className="w-full h-screen bg-teal-900 grid place-items-center">
        <div className="flex flex-col items-center gap-4">
          <img src={logo} alt="finCheck" className="h-10" />
          <Spinner className="text-teal-900 fill-white" />
        </div>
      </div>
    </Transition>
  );
}
