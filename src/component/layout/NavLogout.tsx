const NavLogout = () => {
  const handleLogout = async () => {

    window.location.replace('/');
  };

  return (
    <div
      onClick={handleLogout}
      className="cursor-pointer text-sm font-ibm mr-3"
    >
      로그아웃
    </div>
  );
};

export default NavLogout;
