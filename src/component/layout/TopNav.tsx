import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Menu, X } from "lucide-react";
import { NavItem } from './NavItem';

interface NavItemProps {
  title: string;
  path: string;
}

const role = localStorage.getItem('role');

const NavItemList: NavItemProps[] = [
  { title: "전체 상품", path: "/products" },
  { title: "양말", path: "/chat" },
  ...(role === "SELLER" ? [{ title: "판매 상품", path: "/selling" }] : [])
];

export const TopNav = () => {
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
