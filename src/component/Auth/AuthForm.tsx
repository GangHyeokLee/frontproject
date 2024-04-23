import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { ErrorMsg } from "./ErrorMsg";

interface FormProps {
  title: string;
  type: string;
  name: string;
  register: UseFormRegister<FieldValues>;
  isPattern?: boolean //에러 표시할 지 말지
  pattern?: RegExp
  errors: FieldErrors<FieldValues>
  errorMsg?: string
  isRequired?: boolean
  isValidate?: boolean
  validateKey?: string
  validateName?: string
}

export const AuthForm = ({
  title, type, name, register,
  errors, errorMsg = "",
  isPattern = false, pattern,
  isRequired = true,
  isValidate = false, validateKey = "", validateName = ""
}: FormProps) => {
  return (
    <div className="w-full mb-5">
      <div className="mb-3 whitespace-nowrap">{title + (isRequired ? "*" : "")}</div>
      <input
        type={type}
        className="border-2 bg-white rounded-xl w-full text-xl p-3"
        {...register(name, { required: isRequired, pattern: pattern, validate: (value) => !isValidate || (value === validateKey) })}
      />
      {isPattern && errors[name]?.type === "pattern" && <ErrorMsg errorMsg={errorMsg} />}
      {isRequired && errors[name]?.type === "required" && <ErrorMsg errorMsg="필수로 입력해야합니다." />}
      {isValidate && errors[name]?.type === "validate" && <ErrorMsg errorMsg={`${validateName}이(가) 일치하지 않습니다.`} />}
    </div>
  )
}
