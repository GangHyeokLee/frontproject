import { useRef } from "react";
import { useNavigate } from "react-router-dom"
import GoogleIcon from '../assets/google.png';
import { USER_COLLECTION, auth } from "@/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { Ask, AuthForm, Button, DivideLine, SocialLogin, Title } from "component/Auth";
import { FieldValues, useForm } from "react-hook-form";


const SignUpNormal = () => {
  const navigate = useNavigate();
  const { register, watch, formState: { errors }, handleSubmit } = useForm();
  const password = useRef();
  password.current = watch('password');

  const onSubmit = async (data: FieldValues) => {
    try {
      const createdUser = await createUserWithEmailAndPassword(auth, data.email, data.password);
      console.log(createdUser);

      if (createdUser) {
        // Firebase DB 저장
        await setDoc(
          doc(USER_COLLECTION, createdUser.user.uid),
          {
            uid: createdUser.user.uid,
            nickname: data.name,
            createdAt: new Date(),
            updatedAt: new Date(),
            isSeller: false,
          })
      }
      auth.signOut();
      navigate('/', { replace: true })
    }
    catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center scrollbar-hide">
      <div
        className="w-[50%] max-w-[800px] h-[90vh] relative flex rounded-xl overflow-auto scrollbar-hide"
      >
        <div className="w-full flex flex-col items-center p-10 scrollbar-hide">
          <Title name="회원가입" />
          <Ask question="이미 회원이신가요?" onClick={() => { navigate('/login') }} name="로그인" />
          <form onSubmit={handleSubmit(onSubmit)} className="w-full mb-10">
            <AuthForm title="이름" type="text" name="name" register={register} errors={errors} />
            <AuthForm title="이메일" type="email" name="email" isPattern={true} register={register} errors={errors} pattern={/^[^\s@]+@[^\s@]+\.[^\s@]+$/} errorMsg="유효하지 않은 이메일입니다." />
            <AuthForm title="비밀번호" type="password" name="password" isPattern={true} register={register} errors={errors} pattern={/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{10,}$/} errorMsg="비밀번호는 10자 이상, 특수문자, 대/소문자 , 숫자를 포함해야합니다." />
            <AuthForm title="비밀번호 확인" type="password" name="password_validation" register={register} errors={errors} isValidate={true} validateKey={password.current} validateName="비밀번호" />
            <Button name="회원가입" />
          </form>
          <DivideLine />
          <SocialLogin src={GoogleIcon} alt="Google Login" onClick={() => { }} />
        </div>
      </div>
    </div>
  )
}

export default SignUpNormal