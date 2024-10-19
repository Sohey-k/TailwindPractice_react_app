type TextLogoProps = {
  className?: string; // classNameをオプションで受け取る
};

const Textlogo_2 = ({ className }: TextLogoProps) => {
  return (
    <h1 className={`font-stalinist font-bold text-black ${className}`}>
      RE:ARME
    </h1>
  );
};

export default Textlogo_2;
