import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import NavItem from './NavItem';
import { Menu, X } from "lucide-react";

interface NavItemProps {
  title: string;
  path: string;
}

const role = localStorage.getItem('role');

const NavItemList: NavItemProps[] = [
  { title: "상의", path: "/grow" },
  { title: "하의", path: "/profile" },
  { title: "양말", path: "/chat" },
  ...(role === "SELLER" ? [{ title: "판매 상품", path: "/selling" }] : [])
];

const TopNav: React.FC = () => {
  const [isNavOpen, setNavOpen] = useState(false);
  const navi = useNavigate();

  const toggleNav = () => {
    setNavOpen(!isNavOpen);
  };

  const handleNavigation = (path: string) => {
    navi(path);
    setNavOpen(false);
  };

  return (
    <div className="font-orbit">
      <div onClick={toggleNav} className="cursor-pointer hover:opacity-50 ">
        {isNavOpen ? <X /> : <Menu />}
      </div>
      {isNavOpen && (
        <div className="fixed top-12 left-0 z-50 w-full h-auto bg-slate-100 border-b border-gray-300 p-3 drop-shadow-xl">
          {NavItemList.map((item, index) => (
            <div
              key={index}
              className="cursor-pointer w-fit hover:underline"
              onClick={() => handleNavigation(item.path)}
            >
              <NavItem title={item.title} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TopNav;
