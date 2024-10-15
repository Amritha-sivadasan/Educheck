"use client";

import { Bell, Headset } from "lucide-react";
import React from "react";
interface NavbarProps {
  className?: string; 
}

const Navbar : React.FC<NavbarProps>= ({className}) => {
  return (
    <div className={`flex flex-col w-full h-20 justify-between  bg-white ${className}`}>
      <div className="w-full flex justify-between bg-white">
        <div className="">
          <h1 className="">Heading</h1>
        </div>
        <div className="">
          <ul className="flex ">
            <li>
              <Bell strokeWidth={0} style={{ fill: "gray" }} />
            </li>
            <li>
              <Headset strokeWidth={0.7} />
            </li>
            <li>
              <div className="rounded ">user</div>
            </li>
          </ul>
        </div>
      </div>
      <div className="ms-10 cursor-pointer">
        <ul className="flex gap-10 ">
          <li>Exam</li>
          <li>Exam</li>
          <li>Exam</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
