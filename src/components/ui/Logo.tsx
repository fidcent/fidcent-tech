
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

export const Logo = ({ className }: LogoProps) => {
  return (
    <div className={cn("flex items-center space-x-2", className)}>
      <div className="gradient-bg w-8 h-8 rounded-lg flex items-center justify-center">
        <div className="w-4 h-4 bg-white rounded-sm" />
      </div>
      <div className="flex flex-col items-start">
        <span className="text-2xl font-bold">Fidcent Tech</span>
        <span className="text-xs opacity-70">Innovative Solutions</span>
      </div>
    </div>
  );
};
