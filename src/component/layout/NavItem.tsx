interface NavItemProps {
  title: string;
}

export const NavItem = ({ title }: NavItemProps) => {
  return <div className="text-6xl font-black pb-2">{title}</div>;
};


