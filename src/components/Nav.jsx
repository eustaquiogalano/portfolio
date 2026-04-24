import React from "react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

function Nav() {
  return (
    <header className="bg-secondary text-secondary-foreground p-[1rem] flex items-center justify-between md:px-[5rem] xl:px-[10rem] 2xl:px-[20rem] ">
      <p className="text-sm">eustaquio</p>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink
              className="hover:bg-accent hover:text-accent-foreground"
              href="#"
            >
              Projects
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              className="hover:bg-accent hover:text-accent-foreground"
              href="#"
            >
              Github
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              className="hover:bg-accent hover:text-accent-foreground"
              href="#"
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
