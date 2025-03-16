import { cn } from "@/lib/utils";

// Reusable SidebarLabel component
interface SidebarLabelProps {
  children: React.ReactNode;
  className?: string;
  isPrimary?: boolean;
}

export function SidebarLabel({
  children,
  className,
  isPrimary = false,
}: SidebarLabelProps) {
  return (
    <span
      className={cn(
        "flex-grow text-sm",
        isPrimary ? "font-medium" : "",
        className
      )}
    >
      {children}
    </span>
  );
}
