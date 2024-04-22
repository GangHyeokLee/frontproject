interface SocialLoginProps {
  src: string;
  alt: string;
  onClick: () => void;
}

export const SocialLogin = ({ src, alt, onClick }: SocialLoginProps) => {
  return (
    <img
      src={src}
      alt={alt}
      className="w-20 h-20 mx-2 mt-10 hover:cursor-pointer"
      onClick={onClick}
    />
  )
}
