"use client";

import React, { useState } from "react";
import {
  BarChart2,
  Settings,
  AlignJustify,
  LayoutDashboard,
  Search,
} from "lucide-react";
import Image from "next/image";

interface SidebarItemProps {
  href: string;
  icon: React.ReactNode;
  text: string;
  active?: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  href,
  icon,
  text,
  active = false,
}) => {
  return (
    <li>
      <a
        href={href}
        className={`flex items-center p-2 rounded-lg ${
          active
            ? "bg-orange-500 text-white"
            : "text-gray-700 hover:bg-gray-100"
        }`}
      >
        {icon}
        <span className="ml-3">{text}</span>
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
      <div className="p-4 border-b flex justify-between">
        <div className="flex gap-2">
          <Image
            src="/icon.png"
            alt="Logo"
            width={20}
            height={16}
            className="rounded"
          />
          <h2 className="text-xl font-semibold  md:inline">ELT Global</h2>
        </div>

        <AlignJustify
          strokeWidth={1.5}
          className="cursor-pointer md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>

      <nav className={`flex-1  p-4 ${isOpen ? "block" : "hidden md:block"}`}>
        {" "}
        {/* Show items only if open */}
        <p className="text-sm font-medium text-gray-500 mb-2">GENERAL</p>
        <ul className="space-y-2">
          <SidebarItem
            href="/dashboard"
            icon={<LayoutDashboard strokeWidth={1.75} />}
            text="Dashboard"
            active
          />
          <SidebarItem href="#feed" icon={<Search size={20} />} text="Feed" />
          <SidebarItem
            href="/analytics"
            icon={<BarChart2 size={20} />}
            text="Analytics"
          />
          <SidebarItem
            href="/settings"
            icon={<Settings size={20} />}
            text="Settings"
          />
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
