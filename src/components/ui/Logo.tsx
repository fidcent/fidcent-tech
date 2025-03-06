
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
      <span className="text-2xl font-bold">Fidcent</span>
    </div>
  );
};
