import { Ask, Button, Title } from "component/Auth";
import { useNavigate } from "react-router-dom"

const SignUpSelectPage = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center mt-16">
      <div
        className="w-[50%] max-w-[800px] h-[90vh] relative flex rounded-xl overflow-auto scrollbar-hide"
      >
        <div className="w-full flex flex-col items-center p-10">
          <Title name="회원가입" />
          <Ask question="이미 회원이신가요?" onClick={() => { navigate('/login') }} name="로그인" />
          <Button name="일반회원" onClick={() => navigate('/register/user')} />
          <Button name="판매자 회원" onClick={() => navigate('/register/seller')} />
        </div>
      </div>
    </div>
  )
}

export default SignUpSelectPage