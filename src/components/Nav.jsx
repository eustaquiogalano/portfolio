import React from "react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { SidebarTrigger } from "./ui/sidebar";

function Nav() {
  return (
    <header className="bg-secondary text-secondary-foreground p-[1rem] flex items-center justify-between md:px-[5rem] xl:px-[10rem] 2xl:px-[20rem] h-16 ">
      <p className="text-sm">eustaquio</p>
      <SidebarTrigger className="sm:hidden"></SidebarTrigger>
      <NavigationMenu className="hidden sm:flex">
        <NavigationMenuList className="flex gap-[1rem]">
          <NavigationMenuItem>
            <NavigationMenuLink
              className="hover:bg-accent hover:text-accent-foreground"
              href="#projects"
            >
              Projects
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              className="hover:bg-accent hover:text-accent-foreground"
              href="https://github.com/eustaquiogalano"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              className="hover:bg-accent hover:text-accent-foreground"
              href="#contacts"
            >
              Contact
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
}

export default Nav;
