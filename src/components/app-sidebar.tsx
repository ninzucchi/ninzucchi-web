"use client";

import { Home } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarMenu,
  SidebarGroup,
  SidebarHeader,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  GithubIcon,
  TwitterIcon,
  InstagramIcon,
  SubstackIcon,
  ImageIcon,
} from "@/components/icons";
import { SidebarLink } from "@/components/sidebar";

export function AppSidebar() {
  return (
    <Sidebar variant="floating" collapsible="icon">
      <SidebarContent className="flex flex-col justify-between flex-grow gap-y-0">
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarLink href="/" label="Nick Inzucchi" isPrimary />
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
        <SidebarGroup>
          <SidebarMenu className="gap-y-2">
            <SidebarLink
              href="/"
              icon={<Home className="h-4 w-4" />}
              label="Home"
              isPrimary
              isActive
            />
            {/* <SidebarLink
              href="/photos"
              icon={<ImageIcon className="h-4 w-4" />}
              label="Photos"
              isPrimary
            /> */}
          </SidebarMenu>
        </SidebarGroup>
        <SidebarGroup className="mt-auto">
          <SidebarMenu className="gap-y-2">
            <SidebarLink
              href="https://substack.com/@ninzucchi"
              icon={<SubstackIcon className="h-4 w-4" />}
              label="Substack"
              isExternal
            />
            <SidebarLink
              href="https://github.com/ninzucchi"
              icon={<GithubIcon className="h-4 w-4" />}
              label="GitHub"
              isExternal
            />
            <SidebarLink
              href="https://instagram.com/ninzucchi"
              icon={<InstagramIcon className="h-4 w-4" />}
              label="Instagram"
              isExternal
            />
            <SidebarLink
              href="https://twitter.com/ninzucchi"
              icon={<TwitterIcon className="h-4 w-4" />}
              label="Twitter"
              isExternal
            />
            {/* <Separator className="my-3" /> */}
            {/* <SidebarMenuItem className="text-secondary-foreground hover:text-foreground">
              <ThemeToggle />
            </SidebarMenuItem> */}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
