import { useNavigate } from "react-router-dom";
import { USER_COLLECTION, auth } from "@/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { Ask, AuthForm, DivideLine, SocialLogin, Button, Title } from "component/Auth";
import { FieldValues, useForm } from "react-hook-form";
import GoogleIcon from '../../assets/google.png';
import { handleGoogleLogin } from "@/api/auth/handleGoogleLogin";

const LoginPage = () => {

  const navigate = useNavigate();
  const { register, formState: { errors }, handleSubmit } = useForm();

  const onSubmit = async (data: FieldValues) => {
    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
      const uid = auth.currentUser?.uid;
      if (uid) {
        const docSnap = await getDoc(doc(USER_COLLECTION, uid));
        localStorage.setItem("isSeller", docSnap.data()?.isSeller)
      }
      navigate('/', { replace: true });
    } catch (error) {
      console.log('fail');
    }
  };

  const handleGoogle = () => {
    handleGoogleLogin();
  }

  return (
    <div className="flex justify-center pt-16">
      <div className="w-[50%] max-w-[800px] relative h-fit flex rounded-xl overflow-hidden">
        <div className="w-full flex flex-col items-center p-10">
          <Title name="로그인" />
          <Ask question="아직 회원이 아니신가요? " onClick={() => { navigate('/register') }} name="회원가입" />
          <form onSubmit={handleSubmit(onSubmit)} className="w-full mb-10">
            <AuthForm title="이메일" type="email" name="email" isPattern={true} register={register} errors={errors} isRequired={false} pattern={/^[^\s@]+@[^\s@]+\.[^\s@]+$/} errorMsg="유효하지 않은 이메일입니다." />
            <AuthForm title="비밀번호" type="password" name="password" isPattern={false} register={register} errors={errors} isRequired={false} />
            <Button name="로그인" />
          </form>
          <DivideLine />
          <SocialLogin src={GoogleIcon} alt="Google Login" onClick={handleGoogle} />
        </div>
      </div>
    </div >
  )
}

export default LoginPage