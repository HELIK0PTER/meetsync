import { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col h-full items-center justify-center">
      {children}
    </div>
  );
}
