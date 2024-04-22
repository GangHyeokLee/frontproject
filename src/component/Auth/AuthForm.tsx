import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface FormProps {
  title: string;
  type: string;
  pattern: RegExp
  register: UseFormRegister<FieldValues>;
  chkError: boolean //에러 표시할 지 말지
  errors: FieldErrors<FieldValues>
  errorMsg?: string
}

export const AuthForm = ({ title, type, register, chkError, pattern, errors, errorMsg }: FormProps) => {
  return (
    <div className="w-full mb-5">
      <div className="mb-3 whitespace-nowrap">{title}</div>
      <input
        type={type}
        className="border-2 bg-[#d0d0d0] rounded-xl w-full text-xl p-3"
        {...register(type, { required: true, pattern: pattern })}
      />
      {chkError && errors[type] && (
        <p className=" text-rose-500">{errorMsg}</p>
      )}
    </div>
  )
}
