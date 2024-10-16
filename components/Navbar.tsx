"use client";

import { Bell } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { ModeToggle } from "./ThemeChange";

interface NavbarProps {
  className?: string;
}
const dataLabel = ["Exam", "Results", "Status"];

const Navbar: React.FC<NavbarProps> = ({ className }) => {
  const [active, setActive] = useState<string>(dataLabel[0]);
  const handleSelectedItem = (item: string) => {
    setActive(item);
  };

  return (
    <div
      className={`flex flex-col w-full h-26 justify-between  bg-white ${className}`}
    >
      <div className="w-full flex justify-between items-center bg-white p-4">
        <h1 className="text-2xl font-bold">Heading</h1>

        <div className="flex items-center gap-8">
          <ul className="flex items-center gap-8">
            <li>
              <Bell strokeWidth={0} style={{ fill: "gray" }} />
            </li>
            <li>
              <Image src="/headphone.png" alt="icon" width={20} height={20} />
            </li>
            <li>
              <div className="rounded-full bg-secondary flex justify-center items-center w-8 h-8">
                <Image src="/profile.png" alt="icon" width={30} height={30} />
              </div>
            </li>
            <li>
            <ModeToggle/>
            </li>
          </ul>
        </div>
      </div>
      <div className="ms-10 cursor-pointer ">
        <ul className="flex gap-8  ">
          {dataLabel.map((item) => (
            <li
              className={`${
                active == item && "text-orange-500 border-b border-black "
              }  p-2`}
              key={item}
              onClick={() => handleSelectedItem(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
