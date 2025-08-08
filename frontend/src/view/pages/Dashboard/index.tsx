import logo from "../../../assets/images/logo.png";
import { Avatar } from "../../components/Avatar";
import { Accounts } from "./components/Accounts";
import { Transactions } from "./components/Transactions";

export function Dashboard() {
  return (
    <div className="flex h-full w-full flex-col gap-4 p-4 md:px-8 md:pt-6 md:pb-8">
      <header className="flex h-12 items-center justify-between">
        <img src={logo} alt="fincheck" />
        <Avatar />
      </header>

      <main className="flex flex-1 flex-col gap-4 md:flex-row">
        <div className="w-full md:w-1/2">
          <Accounts />
        </div>

        <div className="w-full md:w-1/2">
          <Transactions />
        </div>
      </main>
    </div>
  );
}
