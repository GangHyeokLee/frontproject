import { useNavigate } from "react-router-dom";

const NavRegister = () => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate('/register')
      }}
      className="ml-3 cursor-pointer text-sm font-ibm"
    >
      회원가입
    </div>
  );
};

export default NavRegister;
