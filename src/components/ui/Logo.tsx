
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

interface LogoProps {
  className?: string;
}

export const Logo = ({ className }: LogoProps) => {
  return (
    <Link to="/" className={cn("flex items-center space-x-2", className)}>
      <div className="h-10 w-10 flex items-center justify-center">
        <img 
          src="/public/lovable-uploads/5cfbfd0b-820f-404a-9977-7a3da8ea7bbd.png" 
          alt="Fidcent Logo" 
          className="w-full h-full object-contain"
        />
      </div>
      <div className="flex flex-col items-start">
        <span className="text-2xl font-bold text-fidcent-navy dark:text-white">Fidcent Tech</span>
        <span className="text-xs opacity-70">Innovative Solutions</span>
      </div>
    </Link>
  );
};
