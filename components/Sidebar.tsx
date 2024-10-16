"use client";

import React, { useState } from "react";
import {
  BarChart2,
  Settings,
  AlignJustify,
  LayoutDashboard,
  Search,
  Mail,
} from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";

interface SidebarItemProps {
  href: string[];
  icon: React.ReactNode;
  text: string;
  active?: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ href, icon, text }) => {
  const pathname = usePathname();
  const isActive = href.includes(pathname);
  return (
    <li>
      <a
        href={href[0]}
        className={`flex items-center p-2 rounded-lg ${
          isActive
            ? "bg-orange-500 text-white"
            : "text-gray-700 hover:bg-gray-100"
        }`}
      >
        <p className={isActive ? "text-white" : "text-orange-500"}>{icon}</p>
        <span className="ml-3 hidden md:block lg:block sm:block">{text}</span>
      </a>
    </li>
  );
};

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`flex flex-col lg:h-screen md:h-screen md:w-64 lg:w-64 w-full bg-white border-r `}
    >
      <div className="p-4 flex justify-between">
        <div className="flex gap-2">
          <div className="mt-1">
            {" "}
            <Image
              src="/icon.png"
              alt="Logo"
              width={20}
              height={20}
              className="rounded"
            />
          </div>

          <h2 className="text-2xl font-bold  md:inline">ELT Global</h2>
        </div>

        <AlignJustify
          strokeWidth={1.5}
          className="cursor-pointer md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>

      <nav
        className={`flex-1  p-4 ${
          isOpen
            ? "block absolute top-0 right-0 bg-white w-20 mt-10 sm:w-64 h-screen z-50"
            : "hidden md:block"
        } `}
      >
        {" "}
        <p className="text-sm font-medium text-gray-500 mb-5 mt-2 ms-3 hidden md:block lg:block sm:block">
          GENERAL
        </p>
        <ul className="space-y-2">
          <SidebarItem
            href={["/", "/dashboard"]}
            icon={<LayoutDashboard strokeWidth={1.75} />}
            text="Dashboard"
          />
          <SidebarItem
            href={["/find"]}
            icon={<Search size={20} />}
            text="Find"
          />
          <SidebarItem
            href={["/inbox"]}
            icon={<Mail size={20} strokeWidth={2} />}
            text="Inbox"
          />
          <SidebarItem
            href={["/analytics"]}
            icon={<BarChart2 size={20} />}
            text="Analytics"
          />
          <SidebarItem
            href={["/settings"]}
            icon={<Settings size={20} />}
            text="Settings"
          />
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
