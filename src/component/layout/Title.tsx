import { useNavigate } from 'react-router';

const Title = () => {
  const navi = useNavigate();
  return (
    <div
      className="font-orbit text-2xl font-bold ml-24 cursor-pointer"
      onClick={() => navi('/')}
    >
      OOTD
    </div>
  );
};

export default Title;
