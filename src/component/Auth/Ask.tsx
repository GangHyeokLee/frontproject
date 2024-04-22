interface AskProps {
  question: string;
  onClick: () => void;
  name: string;
}

export const Ask = ({ question, onClick, name }: AskProps) => {
  return (
    <div className="flex flex-row mt-5 whitespace-nowrap">
      {question}
      <div className="text-[#d0d0d0] ml-3 cursor-pointer mb-5 hover:underline" onClick={onClick}>
        {name}
      </div>
    </div>
  )
}
