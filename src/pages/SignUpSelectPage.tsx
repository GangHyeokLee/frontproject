import { useNavigate } from "react-router-dom"

const SignUpSelectPage = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center mt-16">
      <div
        className="w-[50%] max-w-[800px] h-[90vh] relative flex rounded-xl overflow-auto scrollbar-hide"
      >
        <div className="w-full flex flex-col items-center p-10">
          <div className="text-3xl whitespace-nowrap">회원가입</div>
          <div className="flex flex-row mt-5 whitespace-nowrap mb-16">
            <div>이미 회원이신가요? </div>
            <div
              className="text-[#d0d0d0] ml-3 cursor-pointer mb-5 hover:underline"
              onClick={() => {
                navigate('/login');
              }}
            >
              로그인
            </div>
          </div>
          <button
            className="w-full my-16 bg-[#d0d0d0] text-white text-3xl p-5 rounded-xl shadow-xl whitespace-nowrap"
            onClick={() => {
              navigate('/register/user')
            }}
          >
            일반회원
          </button>
          <button
            className="w-full bg-[#d0d0d0] text-white text-3xl p-5 rounded-xl shadow-xl whitespace-nowrap"
            onClick={() => {
              navigate('/register/seller')
            }}
          >
            판매자 회원
          </button>
        </div>
      </div>
    </div>
  )
}

export default SignUpSelectPage