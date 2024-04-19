import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import GoogleIcon from '../assets/google.png';
import { auth } from "@/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const LoginPage = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log(response);

      const user = auth.currentUser;

      console.log('user', user);

      navigate('/', { replace: true });
    } catch (error) {
      console.log('fail');
    }
  };

  const isEmailValid: boolean = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  return (
    <div className="flex justify-center pt-16">
      <div
        className="w-[50%] max-w-[800px] relative h-fit flex rounded-xl overflow-hidden"
      >
        <div className="w-full flex flex-col items-center p-10">
          <div className="text-3xl whitespace-nowrap">로그인</div>
          <div className="flex flex-row mt-5 whitespace-nowrap">
            <div>아직 회원이 아니신가요? </div>
            <div
              className="text-[#d0d0d0] ml-3 cursor-pointer mb-5 hover:underline"
              onClick={() => {
                navigate('/register')
              }}
            >
              회원가입
            </div>
          </div>
          <div className="w-full mb-10">
            <div className="w-full mb-5">
              <div className="mb-3 whitespace-nowrap">이메일</div>
              <input
                type="email"
                className="border-2 bg-[#d0d0d0] rounded-xl w-full text-xl p-3"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {!isEmailValid && email && (
                <p className=" text-rose-500">유효하지 않은 이메일입니다.</p>
              )}
            </div>
            <div className="w-full mb-5">
              <div className="flex flex-row justify-between">
                <div className="mb-3 whitespace-nowrap">비밀번호</div>
                {/* <div className="text-[#92C7CF] cursor-pointer hover:underline whitespace-nowrap">비밀번호 분실</div> */}
              </div>
              <input
                type="password"
                className="border-2 bg-[#d0d0d0] rounded-xl w-full text-xl p-3"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyUp={(e) => {
                  if (e.key === 'Enter') {
                    handleLogin();
                  }
                }}
              />
            </div>
            <button
              disabled={!isEmailValid}
              className="w-full bg-[#d0d0d0] text-white text-3xl p-5 rounded-xl shadow-xl whitespace-nowrap"
              onClick={handleLogin}
            >
              로그인
            </button>
          </div>
          <div className="w-full flex flex-row justify-between ">
            <div className="border-2 h-0 border-gray-300 w-[40%] mr-10 mt-2" />
            <div className="w-fit whitespace-nowrap">또는</div>
            <div className="border-2 h-0 border-gray-300 w-[40%] ml-10 mt-2" />
          </div>
          <img
            src={GoogleIcon}
            alt="kakao icon"
            className="w-20 h-20 mx-2 mt-10 hover:cursor-pointer"
            onClick={() => { }
              // window.location.replace(
              //   `${import.meta.env.VITE_APP_BACKEND_DEPLOY}/oauth2/authorization/kakao`
              // )import firebase from './../firebase';
            }
          />
        </div>
      </div>
    </div>
  )
}

export default LoginPage