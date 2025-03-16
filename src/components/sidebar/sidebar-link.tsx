import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { SidebarMenuItem, SidebarMenuButton } from "@/components/ui/sidebar";
import { SidebarLabel } from "./sidebar-label";

// Reusable SidebarLink component
interface SidebarLinkProps {
  href: string;
  icon?: React.ReactNode;
  label: string;
  isExternal?: boolean;
  isPrimary?: boolean;
  className?: string;
  isActive?: boolean;
}

export function SidebarLink({
  href,
  icon,
  label,
  isExternal = false,
  isPrimary = false,
  className,
  isActive = false,
}: SidebarLinkProps) {
  return (
    <SidebarMenuItem>
      <SidebarMenuButton
        asChild
        tooltip={label}
        isActive={isActive}
        className={cn(
          !isPrimary && "text-secondary-foreground hover:text-foreground",
          className
        )}
      >
        <Link
          href={href}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
          className="flex items-center gap-3"
        >
          {icon}
          <SidebarLabel isPrimary={isPrimary}>{label}</SidebarLabel>
          {isExternal && <ArrowUpRight className="h-3 w-3 opacity-70" />}
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
}
