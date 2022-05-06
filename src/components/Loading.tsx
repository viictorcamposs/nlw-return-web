import { CircleNotch } from "phosphor-react";

export function Loading(): JSX.Element {
  return (
    <div className="flex items-center justify-center w-6 h-6 overflow-hidden">
      <CircleNotch weight="bold" className="w-4 h-4 animate-spin" />
    </div>
  );
}
