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
      <div className="z-[99] grid h-screen w-full place-items-center bg-teal-900">
        <div className="flex flex-col items-center gap-4">
          <img src={logo} alt="finCheck" className="h-10" />
          <Spinner className="fill-white text-teal-900" />
        </div>
      </div>
    </Transition>
  );
}
