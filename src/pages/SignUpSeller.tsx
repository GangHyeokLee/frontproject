import { USER_COLLECTION, auth } from "@/firebase";
import { Ask, AuthForm, Button, Title } from "component/Auth";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useRef } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const SignUpSeller = () => {

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
        const userDoc = doc(USER_COLLECTION, createdUser.user.uid);

        await setDoc(userDoc, {
          uid: createdUser.user.uid,
          nickname: data.name,
          createdAt: new Date(),
          updatedAt: new Date(),
          isSeller: "SELLER",
          phone: data.phone || ""
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
          <div className="text-3xl whitespace-nowrap">회원가입</div>
          <Title name="회원가입" />
          <Ask question="이미 회원이신가요?" onClick={() => { navigate('/login') }} name="로그인" />
          <form onSubmit={handleSubmit(onSubmit)} className="w-full mb-10">
            <AuthForm title="상호명" type="text" name="name" register={register} errors={errors} />
            <AuthForm title="이메일" type="email" name="email" isPattern={true} register={register} errors={errors} pattern={/^[^\s@]+@[^\s@]+\.[^\s@]+$/} errorMsg="유효하지 않은 이메일입니다." />
            <AuthForm title="전화번호" type="text" name="phone_number" register={register} errors={errors} isRequired={false} />
            <AuthForm title="비밀번호" type="password" name="password" isPattern={true} register={register} errors={errors} pattern={/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{10,}$/} errorMsg="비밀번호는 10자 이상, 특수문자, 대/소문자 , 숫자를 포함해야합니다." />
            <AuthForm title="비밀번호 확인" type="password" name="password_validation" register={register} errors={errors} isValidate={true} validateKey={password.current} validateName="비밀번호" />
            <Button name="회원가입" />
          </form>
        </div>
      </div >
    </div >
  )
}

export default SignUpSeller