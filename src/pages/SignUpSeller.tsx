import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUpSeller = () => {

  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passchk, setPasschk] = useState('');
  const [phone, setPhone] = useState("");

  const isEmailValid: boolean = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isPasswordValid: boolean =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{10,}$/.test(
      password
    );
  const isConfirmPasswordValid: boolean = password === passchk;
  const isNameValid: boolean = !!name;
  const isPhoneValid: boolean = !!phone || /^\d{11}$/.test(phone);
  
  

  const isButtonDisabled: boolean =
    !isEmailValid ||
    !isPasswordValid ||
    !isConfirmPasswordValid ||
    !isNameValid ||
    !isPhoneValid;

  const handleRegister = async () => {
    // const userInfo = {
    //   email: email,
    //   userName: name,
    //   password: password,
    //   phone: phone
    // };

    // const res = await sendRegisterInfo(userInfo);

    // if (!res) {
    //   alert('사용중인 닉네임과 메일입니다.');
    // } else if (res.code === 'COM-000') {
    //   alert('회원 가입 완료');
    //   setRegisterModal(false);
    //   setLoginModal(true);
    // } else if (res.code === 'USR-004') {
    //   alert('이미 사용중인 닉네임입니다.');
    // } else if (res.code === 'USR-005') {
    //   alert(res.message);
    // } else if (res.code === 'USR-006') {
    //   alert('닉네임과 이메일을 변경하세요.');
    // }
  };

  return (
    <div className="flex justify-center scrollbar-hide">
      <div
        className="w-[50%] max-w-[800px] h-[90vh] relative flex rounded-xl overflow-auto scrollbar-hide"
      >
        <div className="w-full flex flex-col items-center p-10 scrollbar-hide">
          <div className="text-3xl whitespace-nowrap">회원가입</div>
          <div className="flex flex-row mt-5 whitespace-nowrap">
            <div>이미 회원이신가요? </div>
            <div
              className="text-[#d0d0d0] ml-3 cursor-pointer mb-5 hover:underline"
              onClick={() => {
                navigate('/login')
              }}
            >
              로그인
            </div>
          </div>
          <div className="w-full mb-10">
            <div className="w-full mb-5">
              <div className="mb-3 whitespace-nowrap">이메일</div>
              <input
                type="email"
                className="border-2 border-[#d0d0d0] rounded-xl w-full text-xl p-3"
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
              </div>
              <input
                type="password"
                className="border-2 border-[#d0d0d0] rounded-xl w-full text-xl p-3"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {!isPasswordValid && password && (
                <p className=" text-rose-500">
                  10자 이상 대, 소문자, 숫자, 특수문자 포함해야 합니다.
                </p>
              )}
            </div>
            <div className="w-full mb-5">
              <div className="mb-3 whitespace-nowrap">비밀번호 확인</div>
              <input
                type="password"
                className="border-2 border-[#d0d0d0] rounded-xl w-full text-xl p-3"
                value={passchk}
                onChange={(e) => setPasschk(e.target.value)}
              />
              {!isConfirmPasswordValid && passchk && (
                <p className=" text-rose-500">
                  비밀번호가 일치하지 않습니다.
                </p>
              )}
            </div>
            <div className="w-full mb-5">
              <div className="mb-3 whitespace-nowrap">상호명</div>
              <input
                type="text"
                className="border-2 border-[#d0d0d0] rounded-xl w-full text-xl p-3"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="w-full mb-5">
              <div className="mb-3 whitespace-nowrap">전화번호</div>
              <input
                type="text"
                className="border-2 border-[#d0d0d0] rounded-xl w-full text-xl p-3"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            {/* <div className="flex justify-start flex-col">
                <div className="mb-3">데이터 사용 동의</div>
                <div className="flex flex-row"><input type="checkbox" className="mr-3" /><div>이용약관에 동의합니다.</div></div>
                <div className="flex flex-row mt-3 mb-5"><input type="checkbox" className="mr-3" /><div>개인정보 수집 및 이용에 동의합니다.</div></div>
              </div> */}
            <button
              disabled={isButtonDisabled}
              className="w-full bg-[#d0d0d0] text-white text-3xl p-5 rounded-xl shadow-xl whitespace-nowrap"
              onClick={handleRegister}
            >
              회원가입
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default SignUpSeller