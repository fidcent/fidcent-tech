
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

export const Logo = ({ className }: LogoProps) => {
  return (
    <div className={cn("flex items-center space-x-2", className)}>
      <div className="h-10 w-10 flex items-center justify-center">
        <img 
          src="/lovable-uploads/5cfbfd0b-820f-404a-9977-7a3da8ea7bbd.png" 
          alt="Fidcent Logo" 
          className="w-full h-full object-contain"
        />
      </div>
      <div className="flex flex-col items-start">
        <span className="text-2xl font-bold text-fidcent-navy dark:text-white">Fidcent Tech</span>
        <div className="flex items-center space-x-1.5 text-xs">
          <span className="opacity-70">Innovative Solutions</span>
          <span className="text-gray-400">|</span>
          <span className="text-xs font-medium text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800/50 px-1.5 py-0.5 rounded">
            RC 7718433
          </span>
        </div>
      </div>
    </div>
  );
};
