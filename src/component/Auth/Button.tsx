interface ButtonProps {
  name: string;
  onClick?: () => void;
}

export const Button = ({ name, onClick }: ButtonProps) => {
  return (
    <button type="submit" className="w-full bg-[#d0d0d0] text-white text-3xl p-5 rounded-xl shadow-xl whitespace-nowrap my-8" onClick={onClick}>
      {name}
    </button>
  )
}
