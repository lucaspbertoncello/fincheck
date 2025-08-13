import { ExitIcon } from "@radix-ui/react-icons";
import { DropdownMenu } from "../components/DropdownMenu";
import { useAuth } from "../../app/hooks/useAuth";

export function Avatar() {
  const { signout } = useAuth();

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <div className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-teal-100">
          <span className="text-sm font-medium tracking-[-0.5px] text-teal-900">
            LB
          </span>
        </div>
      </DropdownMenu.Trigger>

      <DropdownMenu.Content className="w-32">
        <DropdownMenu.Item onSelect={signout} className="justify-between">
          Sair
          <ExitIcon className="h-4 w-4" />
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}
