import React from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  useSidebar,
} from "@/components/ui/sidebar";

const data = {
  versions: ["1.0.1", "1.1.0-alpha", "2.0.0-beta1"],
  navMain: [
    {
      title: "Projects",
      url: "/#projects",
    },
    {
      title: "Github",
      url: "https://github.com/eustaquiogalano",
      target: "_blank",
      rel: "noopener noreferrer",
    },
    {
      title: "Contact",
      url: "/#contacts",
    },
  ],
};

export function AppSidebar({ ...props }) {
  const { toggleSidebar } = useSidebar();

  return (
    <Sidebar {...props} side="right" className="bg-primary">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {data.navMain.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild onClick={toggleSidebar}>
                    <a href={item.url} target={item.target} rel={item.rel}>
                      {item.title}
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
