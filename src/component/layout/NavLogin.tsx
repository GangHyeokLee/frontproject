import { useNavigate } from "react-router-dom";

const NavLogin = () => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => { navigate('/login') }}
      className="cursor-pointer text-sm font-ibm"
    >
      로그인
    </div>
  );
};

export default NavLogin;
